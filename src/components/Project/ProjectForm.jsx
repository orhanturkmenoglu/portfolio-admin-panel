import React, { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tech: [""],
    demo: "",
    code: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, value) => {
    const newArray = [...formData.tech];
    newArray[index] = value;
    setFormData({ ...formData, tech: newArray });
  };

  const addTechField = () => setFormData({ ...formData, tech: [...formData.tech, ""] });
  const removeTechField = (index) => {
    const newArray = [...formData.tech];
    newArray.splice(index, 1);
    setFormData({ ...formData, tech: newArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Example API call
      // await axios.post("/api/projects", formData);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 800);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-8 px-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6 border-b pb-3">
          🚀 Project Form
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-200">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Personal Portfolio Website"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm text-base transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-200">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Write a brief project description..."
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm resize-none text-base transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-200">
              Image Upload
            </label>
            <input
              type="file"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm text-base transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-200">
              Technologies
            </label>
            <div className="flex flex-wrap gap-3">
              {formData.tech.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full shadow-sm">
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => handleArrayChange(idx, e.target.value)}
                    placeholder="React"
                    required
                    className="bg-transparent outline-none w-24 text-sm sm:w-32 text-gray-800 dark:text-gray-100"
                  />
                  {formData.tech.length > 1 && (
                    <button type="button" onClick={() => removeTechField(idx)} className="text-red-500 hover:text-red-600 text-sm">
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addTechField} className="px-3 py-1.5 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 text-sm shadow-sm">
                + Tech
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-200">
                Demo Link
              </label>
              <input
                type="text"
                name="demo"
                value={formData.demo}
                onChange={handleChange}
                placeholder="https://example.com/demo"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm text-base transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-200">
                Code Link
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="https://github.com/username/project"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none shadow-sm text-base transition-all duration-200"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-base shadow-md transition-all duration-200"
          >
            {loading ? "Saving..." : "Save"}
          </button>

          {success && (
            <p className="text-green-500 dark:text-green-400 text-center font-semibold mt-3 animate-pulse text-base">
              ✅ Project saved successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
