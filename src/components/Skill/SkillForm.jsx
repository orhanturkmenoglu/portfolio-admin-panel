import React, { useState } from "react";

const SkillForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    description: "",
    tags: [""],
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagChange = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData({ ...formData, tags: newTags });
  };

  const addTag = () => {
    setFormData({ ...formData, tags: [...formData.tags, ""] });
  };

  const removeTag = (index) => {
    const newTags = [...formData.tags];
    newTags.splice(index, 1);
    setFormData({ ...formData, tags: newTags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // API call örneği
      // await axios.post("/api/skills", formData);

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 ">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 border-b pb-3">
          🛠️ Skill Ekle / Düzenle
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Skill Başlığı
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Örn: React"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm transition-all duration-200"
            />
          </div>

          {/* Icon */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Skill İkonu (FontAwesome)
            </label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              placeholder="fa-react"
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
              placeholder="Skill ile ilgili kısa açıklama"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm resize-none transition-all duration-200"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Skill Etiketleri
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full shadow-sm"
                >
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => handleTagChange(idx, e.target.value)}
                    placeholder="Örn: Frontend"
                    required
                    className="bg-transparent outline-none w-20 sm:w-32 text-sm text-gray-800 dark:text-gray-100"
                  />
                  {formData.tags.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTag(idx)}
                      className="text-red-500 hover:text-red-600 transition-all"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-indigo-500 text-white rounded-2xl hover:bg-indigo-600 transition-all text-sm shadow-sm"
              >
                + Etiket
              </button>
            </div>
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
              ✅ Skill başarıyla kaydedildi!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SkillForm;
