import { Line } from "react-chartjs-2";
import { chart as chartjs } from "chart.js/auto";
import "./LineChart.css";

export default function LineChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "july",
      "august",
      "september",
      "october",
      "novermber",
      "december",
    ],
    datasets: [
      {
        label: "WATER USAGE",
        data: [33, 53, 85, 41, 44, 65, 50, 60, 80, 100],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div className="LineChart">
      
      <Line data={data} />
    </div>
  );
}
