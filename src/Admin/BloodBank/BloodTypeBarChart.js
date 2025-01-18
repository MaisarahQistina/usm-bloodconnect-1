import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BloodTypeBarChart = ({ bloodTypes }) => {
  const data = {
    labels: bloodTypes.map((bloodType) => bloodType.type),
    datasets: [
      {
        label: "Blood Units",
        data: bloodTypes.map((bloodType) => bloodType.quantity),
        backgroundColor: bloodTypes.map(() => "rgba(255, 99, 132, 0.2)"),
        borderColor: bloodTypes.map(() => "rgba(255, 99, 132, 1)"),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Units",
        },
      },
      x: {
        title: {
          display: true,
          text: "Blood Type",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Blood Bank Inventory",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "400px",
        margin: "0 auto",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BloodTypeBarChart;