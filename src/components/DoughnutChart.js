import React, { useRef, useCallback } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

const data = {
  labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  datasets: [
    {
      label: "My Dataset",
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#ccc", "#ccc"],
      hoverOffset: 4,
    },
  ],
};

Chart.register(CategoryScale);

function DoughnutChart() {
  let ref = useRef(null);

  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  return (
    <div className="App">
      <button type="button" onClick={downloadImage}>
        Download
      </button>
      <div style={{ height: "690px", width: "690px", margin: "auto" }}>
        <Line ref={ref} data={data} />
      </div>
    </div>
  );
}

export default DoughnutChart;
