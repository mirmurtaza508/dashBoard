import React, { useRef, useEffect, useContext } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./Chart.css";
import { themeContext } from "../../contexts/themeContext";

const GlassMorphicCard = ({ data, totalTransactions }) => {
  const chartRef = useRef(null);
  const [isDark] = useContext(themeContext);
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
        hoverBackgroundColor: data.hoverColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false, // Allow the chart to resize
    cutout: "70%", // Creates the donut hole in the middle
  };

  return (
    <div
      className="glass-card"
      style={{
        background: isDark ? "#191c24" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <div className="chart-container text-white">
        <Pie data={chartData} options={options} ref={chartRef} />
        <div className="chart-label">
          <span className={`${isDark ? "text-white" : "text-black"}`}>
            ${totalTransactions}
          </span>
          <br />
          <span className={`${isDark ? "text-white" : "text-black"}`}>
            Total
          </span>
        </div>
      </div>
      <div className="transactions-list">
        {data.labels.map((label, index) => (
          <div key={index} className="transaction-item">
            <span>{label}</span>
            <span>${data.values[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassMorphicCard;
