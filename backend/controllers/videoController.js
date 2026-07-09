import Video from '../models/Video.js';

// Accepts a raw YouTube URL, a full <iframe> embed snippet, or a bare video ID
// and pulls out just the 11-character YouTube video ID.
const extractYoutubeId = (value) => {
  const input = String(value || '').trim();
  if (!input) return null;

  const patterns = [
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match) return match[1];
  }

  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  return null;
};

const normalizeVideoPayload = (body) => {
  const data = { ...body };

  const videoId = extractYoutubeId(data.embedCode);
  if (!videoId) {
    throw new Error('Could not find a valid YouTube video in the embed code/link provided.');
  }
  data.videoId = videoId;

  if (!data.thumbnail?.trim()) {
    data.thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  if (data.sortOrder !== undefined && data.sortOrder !== '') {
    data.sortOrder = Number(data.sortOrder);
  }

  return data;
};

export const createVideo = async (req, res) => {
  try {
    const videoData = normalizeVideoPayload(req.body);
    const video = new Video(videoData);
    await video.save();

    res.status(201).json({
      success: true,
      message: 'Video added successfully',
      data: video
    });
  } catch (error) {
    console.error('Error creating video:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to add video'
    });
  }
};

export const getAllVideos = async (req, res) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    const videos = await Video.find(filter).sort({ sortOrder: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      data: videos
    });
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch videos',
      error: error.message
    });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ success: false, message: 'Video not found' });
    }

    res.status(200).json({ success: true, data: video });
  } catch (error) {
    console.error('Error fetching video:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch video',
      error: error.message
    });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const updateData = normalizeVideoPayload(req.body);

    const video = await Video.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });

    if (!video) {
      return res.status(404).json({ success: false, message: 'Video not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Video updated successfully',
      data: video
    });
  } catch (error) {
    console.error('Error updating video:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to update video'
    });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({ success: false, message: 'Video not found' });
    }

    res.status(200).json({ success: true, message: 'Video deleted successfully' });
  } catch (error) {
    console.error('Error deleting video:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete video',
      error: error.message
    });
  }
};
