import React, { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tech: [""],
    icons: [""],
    demo: "",
    code: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayField = (field, index) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [field]: newArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // API call örneği
      // await axios.post("/api/projects", formData);

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
    <div className="flex justify-center items-start py-10 px-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 border-b pb-3">
          🚀 Proje Ekle / Düzenle
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Proje Başlığı
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Örn: Personal Portfolio Website"
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
              rows={5}
              placeholder="Projenin detaylarını yazınız..."
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm resize-none transition-all duration-200"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Resim URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm transition-all duration-200"
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Kullanılan Teknolojiler
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.tech.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full shadow-sm"
                >
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) =>
                      handleArrayChange(idx, "tech", e.target.value)
                    }
                    placeholder="React"
                    required
                    className="bg-transparent outline-none w-20 sm:w-32 text-sm text-gray-800 dark:text-gray-100"
                  />
                  {formData.tech.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField("tech", idx)}
                      className="text-red-500 hover:text-red-600 transition-all"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField("tech")}
                className="px-4 py-2 bg-indigo-500 text-white rounded-2xl hover:bg-indigo-600 transition-all text-sm shadow-sm"
              >
                + Teknoloji
              </button>
            </div>
          </div>

          {/* Icons */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Proje İkonları
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.icons.map((icon, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full shadow-sm"
                >
                  <input
                    type="text"
                    value={icon}
                    onChange={(e) =>
                      handleArrayChange(idx, "icons", e.target.value)
                    }
                    placeholder="fa-react"
                    required
                    className="bg-transparent outline-none w-20 sm:w-32 text-sm text-gray-800 dark:text-gray-100"
                  />
                  {formData.icons.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField("icons", idx)}
                      className="text-red-500 hover:text-red-600 transition-all"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField("icons")}
                className="px-4 py-2 bg-indigo-500 text-white rounded-2xl hover:bg-indigo-600 transition-all text-sm shadow-sm"
              >
                + İkon
              </button>
            </div>
          </div>

          {/* Demo & Code Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                Demo Link
              </label>
              <input
                type="text"
                name="demo"
                value={formData.demo}
                onChange={handleChange}
                placeholder="https://example.com/demo"
                required
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                Kod Linki
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="https://github.com/username/project"
                required
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm transition-all duration-200"
              />
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
              ✅ Proje başarıyla kaydedildi!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
