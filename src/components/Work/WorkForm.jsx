import React, { useState } from "react";

const WorkForm = () => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    duration: "",
    description: "",
    color: "#6b5b95",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // API call örneği
      // await axios.post("/api/work", formData);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1000);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 border-b pb-3">
          💼 İş Deneyimi Ekle / Düzenle
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Role */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Pozisyon / Rol
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Örn: Backend Developer"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm transition-all duration-200"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Şirket
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Örn: ABC Corp"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm transition-all duration-200"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Çalışma Süresi
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Örn: Jan 2023 - Nov 2025"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm transition-all duration-200"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Açıklama
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Örn: Developed REST APIs and backend services"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none resize-none shadow-sm transition-all duration-200"
            />
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Renk
            </label>
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-20 h-10 p-0 border-none rounded-lg cursor-pointer shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-lg shadow-lg transition-all duration-300"
          >
            {loading ? "Kaydediliyor..." : "Kaydet"}
          </button>

          {success && (
            <p className="text-green-500 dark:text-green-400 text-center font-semibold mt-3 animate-pulse">
              ✅ İş deneyimi başarıyla kaydedildi!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default WorkForm;
