import { Title } from './components/Title/Title';
import { DoughnutChartContainer } from './components/DoughnutChart/DoughnutChart.container';
import { BarChartContainer } from './components/BarChart/BarChart.container';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title as ChartTitle,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// ثبت اجزای مورد نیاز برای هر دو نمودار
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartTitle,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen" dir="rtl">
      <Title />
      <DoughnutChartContainer />
      <BarChartContainer />
    </div>
  );
}