import CaseStudy from '../models/CaseStudy.js';

const parseJsonArray = (value, fallback = []) => {
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return fallback;

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const normalizeCaseStudyPayload = (body, file) => {
  const data = { ...body };

  if (file) {
    data.image = `/uploads/${file.filename}`;
  }

  data.outcomes = parseJsonArray(data.outcomes)
    .map((item) => {
      if (typeof item === 'string') return { text: item.trim() };
      return { text: String(item?.text || '').trim() };
    })
    .filter((item) => item.text);

  data.faq = parseJsonArray(data.faq)
    .map((item) => ({
      question: String(item?.question || '').trim(),
      answer: String(item?.answer || '').trim()
    }))
    .filter((item) => item.question && item.answer);

  if (data.sortOrder !== undefined && data.sortOrder !== '') {
    data.sortOrder = Number(data.sortOrder);
  }

  return data;
};

export const createCaseStudy = async (req, res) => {
  try {
    const caseStudyData = normalizeCaseStudyPayload(req.body, req.file);

    const existingCaseStudy = await CaseStudy.findOne({ slug: caseStudyData.slug });
    if (existingCaseStudy) {
      return res.status(400).json({
        success: false,
        message: 'A case study with this slug already exists'
      });
    }

    const caseStudy = new CaseStudy(caseStudyData);
    await caseStudy.save();

    res.status(201).json({
      success: true,
      message: 'Case study created successfully',
      data: caseStudy
    });
  } catch (error) {
    console.error('Error creating case study:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create case study',
      error: error.message
    });
  }
};

export const getAllCaseStudies = async (req, res) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    const caseStudies = await CaseStudy.find(filter).sort({ sortOrder: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      data: caseStudies
    });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch case studies',
      error: error.message
    });
  }
};

export const getCaseStudyBySlug = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findOne({ slug: req.params.slug });

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
    }

    res.status(200).json({
      success: true,
      data: caseStudy
    });
  } catch (error) {
    console.error('Error fetching case study:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch case study',
      error: error.message
    });
  }
};

export const getCaseStudyById = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
    }

    res.status(200).json({
      success: true,
      data: caseStudy
    });
  } catch (error) {
    console.error('Error fetching case study:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch case study',
      error: error.message
    });
  }
};

export const updateCaseStudy = async (req, res) => {
  try {
    const updateData = normalizeCaseStudyPayload(req.body, req.file);

    if (updateData.slug) {
      const existingCaseStudy = await CaseStudy.findOne({
        slug: updateData.slug,
        _id: { $ne: req.params.id }
      });

      if (existingCaseStudy) {
        return res.status(400).json({
          success: false,
          message: 'A case study with this slug already exists'
        });
      }
    }

    const caseStudy = await CaseStudy.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Case study updated successfully',
      data: caseStudy
    });
  } catch (error) {
    console.error('Error updating case study:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update case study',
      error: error.message
    });
  }
};

export const deleteCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Case study deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting case study:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete case study',
      error: error.message
    });
  }
};
