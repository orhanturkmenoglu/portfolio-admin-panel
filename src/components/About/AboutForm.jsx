import axios from "axios";
import React, { useState } from "react";
import { addAbout, API_ENDPOINTS, BASE_URL } from "../../utils/apiEndpoint";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import InputEmoji from "react-input-emoji";

const AboutForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
    color: "#6b5b95",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await addAbout(formData);
      if (response.status === 201) {
        console.log("Response successfully:", response.data);
        toast.success("About section saved successfully! 🎉");
        setFormData({
          title: "",
          description: "",
          icon: "",
          color: "#6b5b95",
        });
      } else {
        toast.info("Request completed but returned an unexpected response.");
      }
    } catch (error) {
      console.error("Connection error:", error);
      if (error.response) {
        toast.error(
          error.response.data.message ||
            "An error occurred while saving your About information!"
        );
      } else {
        toast.error(
          "Unable to connect to the server. Please check your internet connection."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center border-b pb-3">
          📝 Update About Section
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              maxLength={100}
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., About Me"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none transition-all duration-200"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Description
            </label>
            <textarea
              name="description"
              maxLength={1000}
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Briefly introduce yourself..."
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none resize-none transition-all duration-200"
            />
          </div>

          {/* Icon */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Icon (FontAwesome Class)
            </label>
            <InputEmoji
              value={formData.icon}
              onChange={(value) => {
                setFormData({ ...formData, icon: value });
              }}
              cleanOnEnter
              placeholder="e.g., fa-user"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 outline-none transition-all duration-200"
            />
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Color
            </label>
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="e.g., blue"
              required
              className="w-20 h-10 p-0 border-none rounded-lg cursor-pointer shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-lg shadow-lg transition-all duration-300"
          >
            {loading ? (
              <>
                <LoaderCircle size={16} className="animate-spin h-5" />
                Saving...
              </>
            ) : (
              <>Saved</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutForm;
