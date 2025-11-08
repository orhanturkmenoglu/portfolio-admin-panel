import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const barData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
    datasets: [
      {
        label: "Projeler",
        data: [12, 19, 8, 15, 10, 22],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  const lineData = {
    labels: ["Paz", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
    datasets: [
      {
        label: "Ziyaretçiler",
        data: [120, 190, 150, 170, 200, 230, 180],
        fill: true,
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        borderColor: "rgba(236, 72, 153, 1)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = { responsive: true, plugins: { legend: { position: "top" } }, scales: { y: { beginAtZero: true } } };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">📊 Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-full max-w-5xl">
        {[
          { icon: "📁", label: "Toplam Proje", value: 32 },
          { icon: "👥", label: "Kullanıcılar", value: "1,245" },
          { icon: "💻", label: "Teknolojiler", value: 18 },
          { icon: "📝", label: "Görevler", value: 7 },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col items-center">
            <span className="text-3xl mb-1">{stat.icon}</span>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{stat.label}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-md mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 h-72">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Projeler Aylık Dağılım</h2>
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 h-72">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Haftalık Ziyaretçiler</h2>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
