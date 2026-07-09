import { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Edit2,
  FileVideo,
  Plus,
  Search,
  Trash2,
  Video as VideoIcon,
  X
} from 'lucide-react';
import api from '../api/axiosInstance';

const initialFormData = {
  title: '',
  category: '',
  embedCode: '',
  description: '',
  sortOrder: 0,
  status: 'published'
};

const extractYoutubeId = (value) => {
  const input = String(value || '').trim();
  if (!input) return null;

  const patterns = [
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match) return match[1];
  }

  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  return null;
};

function Field({ label, required, hint, children }) {
  return (
    <label className="mt-4 block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      {children}
      {hint ? <p className="mt-1 text-[11px] text-slate-500">{hint}</p> : null}
    </label>
  );
}

function VideoForm({ video, onClose, onSave }) {
  const [formData, setFormData] = useState(() => (video ? { ...initialFormData, ...video } : initialFormData));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const previewId = useMemo(() => extractYoutubeId(formData.embedCode), [formData.embedCode]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!extractYoutubeId(formData.embedCode)) {
        throw new Error('Paste a valid YouTube link or embed code — could not detect a video.');
      }

      const payload = { ...formData };

      const { data } = video
        ? await api.put(`/videos/${video._id}`, payload)
        : await api.post('/videos', payload);

      if (!data.success) {
        throw new Error(data.message || 'Something went wrong');
      }

      onSave();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="admin-modal-panel w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-violet-600">
              {video ? 'Edit video' : 'New video'}
            </p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{video ? video.title : 'Add Video'}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="max-h-[78vh] overflow-y-auto p-5">
          {error ? (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          ) : null}

          <Field label="Title" required>
            <input name="title" value={formData.title} onChange={handleChange} required className="admin-input" placeholder="Autism Care Journey - Family Interview" />
          </Field>

          <Field
            label="YouTube Embed Code / Link"
            required
            hint="Paste the full YouTube embed code (Share > Embed) or just the video link — we'll detect the video automatically."
          >
            <textarea
              name="embedCode"
              value={formData.embedCode}
              onChange={handleChange}
              required
              rows="3"
              placeholder='<iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe> or https://youtu.be/VIDEO_ID'
              className="admin-input font-mono text-xs"
            />
          </Field>

          {previewId ? (
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-black">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${previewId}`}
                  title="Video preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : formData.embedCode ? (
            <p className="mt-2 text-xs font-semibold text-amber-600">Couldn't detect a YouTube video in this yet.</p>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Category">
              <input name="category" value={formData.category} onChange={handleChange} placeholder="Autism, ADHD, Testimonial..." className="admin-input" />
            </Field>

            <Field label="Sort Order">
              <input type="number" name="sortOrder" value={formData.sortOrder} onChange={handleChange} className="admin-input" />
            </Field>

            <Field label="Status">
              <select name="status" value={formData.status} onChange={handleChange} className="admin-input">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </Field>
          </div>

          <Field label="Description">
            <textarea name="description" value={formData.description} onChange={handleChange} rows="3" placeholder="Short description shown on the video card" className="admin-input" />
          </Field>

          <div className="mt-6 flex justify-end gap-3 border-t border-slate-200 pt-5">
            <button type="button" onClick={onClose} className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="rounded-xl bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-800 disabled:cursor-not-allowed disabled:bg-violet-300">
              {loading ? 'Saving...' : 'Save Video'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function VideoManagement() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError('');
      const { data } = await api.get('/videos');
      if (!data.success) throw new Error(data.message || 'Failed to fetch videos');
      setVideos(data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchVideos();
  }, []);

  const filteredVideos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return videos.filter((item) => {
      const matchesQuery = !query || [item.title, item.category].some((value) => value?.toLowerCase().includes(query));
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [videos, searchQuery, statusFilter]);

  const publishedCount = videos.filter((item) => item.status === 'published').length;

  const handleAdd = () => {
    setSelectedVideo(null);
    setIsFormOpen(true);
  };

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsFormOpen(true);
  };

  const handleDelete = async (video) => {
    if (!window.confirm(`Delete "${video.title}"?`)) return;

    try {
      const { data } = await api.delete(`/videos/${video._id}`);
      if (!data.success) throw new Error(data.message || 'Failed to delete video');
      setVideos((current) => current.filter((item) => item._id !== video._id));
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleSave = () => {
    setIsFormOpen(false);
    setSelectedVideo(null);
    void fetchVideos();
  };

  if (loading && videos.length === 0) {
    return (
      <div className="p-6">
        <div className="h-20 animate-pulse rounded-2xl bg-slate-100" />
        <div className="mt-6 h-96 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-none p-3 md:p-5 lg:p-6">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-200">
            <VideoIcon size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Video Library</h1>
            <p className="mt-1 text-sm text-slate-500">Paste a YouTube embed code or link — it shows on the public Video Library page automatically.</p>
          </div>
        </div>

        <button onClick={handleAdd} className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-800">
          <Plus size={18} /> Add Video
        </button>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <StatCard label="Total videos" value={videos.length} Icon={VideoIcon} />
        <StatCard label="Published" value={publishedCount} Icon={CheckCircle2} />
        <StatCard label="Drafts" value={videos.length - publishedCount} Icon={FileVideo} />
      </div>

      {error ? (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} /> {error}
        </div>
      ) : null}

      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search by title or category..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100" />
        </div>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100">
          <option value="all">All status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-4">Video</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Sort</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVideos.map((item) => (
                <tr key={item._id} className="align-top hover:bg-slate-50/70">
                  <td className="px-5 py-4">
                    <div className="flex gap-3">
                      <div className="flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
                        {item.thumbnail ? (
                          <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
                        ) : (
                          <VideoIcon className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900">{item.title}</p>
                        <p className="mt-1 line-clamp-2 max-w-md text-xs leading-5 text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700">{item.category || 'General'}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.status === 'published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-500">{item.sortOrder ?? 0}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(item)} className="rounded-lg border border-blue-100 bg-blue-50 p-2 text-blue-700 hover:bg-blue-100" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(item)} className="rounded-lg border border-red-100 bg-red-50 p-2 text-red-700 hover:bg-red-100" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredVideos.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-5 py-12 text-center text-sm text-slate-500">
                    No videos found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      {isFormOpen ? (
        <VideoForm video={selectedVideo} onClose={() => setIsFormOpen(false)} onSave={handleSave} />
      ) : null}
    </div>
  );
}

function StatCard({ label, value, Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
        <span className="rounded-lg bg-violet-50 p-1.5 text-violet-700"><Icon size={16} /></span>
      </div>
      <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
