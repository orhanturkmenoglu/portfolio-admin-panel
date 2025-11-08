import React, { useState } from "react";

const SettingsDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
        ⚙️ Ayarlar Paneli
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Dark Mode */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
          <span className="text-5xl mb-4">🌙</span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Dark Mode</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
            Uygulamanın temasını değiştir.
          </p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-32 py-2 rounded-full font-semibold transition-colors duration-300 ${
              darkMode
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {darkMode ? "Aktif" : "Pasif"}
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
          <span className="text-5xl mb-4">🔔</span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Bildirimler</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
            Anlık bildirimleri aç/kapat.
          </p>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-32 py-2 rounded-full font-semibold transition-colors duration-300 ${
              notifications
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {notifications ? "Aktif" : "Pasif"}
          </button>
        </div>

        {/* Auto Updates */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
          <span className="text-5xl mb-4">⚡</span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Otomatik Güncellemeler</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
            Uygulamanın güncellemeleri otomatik almasını aç/kapat.
          </p>
          <button
            onClick={() => setAutoUpdate(!autoUpdate)}
            className={`w-32 py-2 rounded-full font-semibold transition-colors duration-300 ${
              autoUpdate
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {autoUpdate ? "Aktif" : "Pasif"}
          </button>
        </div>

        {/* Profil */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
          <span className="text-5xl mb-4">👤</span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Profil</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
            Kullanıcı bilgilerini görüntüle ve düzenle.
          </p>
          <button className="w-32 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all duration-300">
            Görüntüle
          </button>
        </div>

        {/* Güvenlik */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
          <span className="text-5xl mb-4">🔒</span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Güvenlik</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
            Şifre ve güvenlik ayarlarını yönet.
          </p>
          <button className="w-32 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300">
            Düzenle
          </button>
        </div>

        {/* Yardım */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
          <span className="text-5xl mb-4">❓</span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Yardım & Destek</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
            Yardım almak veya destek ile iletişime geç.
          </p>
          <button className="w-32 py-2 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition-all duration-300">
            Git
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDashboard;
