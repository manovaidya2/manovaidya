import Consultation from '../models/Consultation.js';

const DEFAULT_KRAYA_LEADS_URL = 'https://api.kraya-ai.com/api/external/6Vjm8XVH/leads';

const resolveKrayaWebhookUrl = (webhookUrl = '') => {
  const candidate = String(webhookUrl || process.env.KRAYA_LEADS_URL || DEFAULT_KRAYA_LEADS_URL).trim();
  const parsed = new URL(candidate);
  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error('Kraya webhook URL must start with http:// or https://');
  }
  return parsed.toString();
};

const formatPhoneForKraya = (phone = '') => {
  const trimmed = String(phone).trim();
  if (trimmed.startsWith('+')) return trimmed.replace(/\s+/g, '');

  const digits = trimmed.replace(/\D/g, '');
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith('91')) return `+${digits}`;
  return digits ? `+${digits}` : trimmed;
};

const buildKrayaNotes = (consultation, extraNotes = '') => [
  extraNotes,
  consultation.message ? `Message: ${consultation.message}` : '',
  `Consultation mode: ${consultation.consultationMode}`,
  consultation.preferredDate ? `Preferred date: ${new Date(consultation.preferredDate).toLocaleDateString('en-IN')}` : '',
  consultation.preferredTime ? `Preferred time: ${consultation.preferredTime}` : '',
  `Admin status: ${consultation.status}`,
].filter(Boolean).join('\n');

export const createConsultation = async (req, res) => {
  try {
    const { name, phone, consultationMode, preferredDate, preferredTime, message } = req.body;

    if (!name || !phone || !consultationMode || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone, mode, date, and time are required'
      });
    }

    const consultation = await Consultation.create({
      name,
      phone,
      consultationMode,
      preferredDate,
      preferredTime,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: consultation
    });
  } catch (error) {
    console.error('Error creating consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit consultation request',
      error: error.message
    });
  }
};

export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: consultations
    });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultations',
      error: error.message
    });
  }
};

export const updateConsultationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const consultation = await Consultation.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Consultation status updated successfully',
      data: consultation
    });
  } catch (error) {
    console.error('Error updating consultation status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update consultation status',
      error: error.message
    });
  }
};

export const deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const consultation = await Consultation.findByIdAndDelete(id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Consultation request deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete consultation request',
      error: error.message
    });
  }
};

export const sendConsultationsToKraya = async (req, res) => {
  try {
    const {
      ids = [],
      stage = 'New Lead',
      pipeline = 'Leads',
      notes = '',
      source = 'Manovaidya admin appointments',
      webhookUrl = '',
      includeSequence = false,
      sequence = '',
      apiKey = '',
    } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Select at least one appointment lead to send'
      });
    }

    const krayaApiKey = String(apiKey || process.env.KRAYA_API_KEY || '').trim();
    if (!krayaApiKey) {
      return res.status(400).json({
        success: false,
        message: 'Kraya API key is required. Add KRAYA_API_KEY in backend .env or enter it before sending.'
      });
    }

    let krayaWebhookUrl;
    try {
      krayaWebhookUrl = resolveKrayaWebhookUrl(webhookUrl);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message || 'Invalid Kraya webhook URL'
      });
    }

    const consultations = await Consultation.find({ _id: { $in: ids } });
    if (consultations.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No selected consultation records found'
      });
    }

    const results = [];

    for (const consultation of consultations) {
      const payload = {
        name: consultation.name,
        phone: formatPhoneForKraya(consultation.phone),
        stage: stage || 'New Lead',
        pipeline: pipeline || 'Leads',
        notes: buildKrayaNotes(consultation, notes),
        source: source || 'Manovaidya admin appointments',
        consultationMode: consultation.consultationMode,
        preferredDate: consultation.preferredDate,
        preferredTime: consultation.preferredTime,
        adminStatus: consultation.status,
      };

      if (includeSequence && sequence) {
        payload.sequence = sequence;
      }

      const response = await fetch(krayaWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-KRAYA-API-KEY': krayaApiKey,
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let responseBody;
      try {
        responseBody = responseText ? JSON.parse(responseText) : {};
      } catch {
        responseBody = { message: responseText };
      }

      results.push({
        consultationId: consultation._id,
        name: consultation.name,
        success: response.ok,
        status: response.status,
        response: responseBody,
      });
    }

    const failed = results.filter((item) => !item.success);

    res.status(failed.length ? 207 : 200).json({
      success: failed.length === 0,
      message: failed.length
        ? `${results.length - failed.length} lead(s) sent, ${failed.length} failed`
        : `${results.length} lead(s) sent to Kraya successfully`,
      data: {
        sent: results.length - failed.length,
        failed: failed.length,
        results,
      }
    });
  } catch (error) {
    console.error('Error sending leads to Kraya:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send selected leads to Kraya',
      error: error.message
    });
  }
};
