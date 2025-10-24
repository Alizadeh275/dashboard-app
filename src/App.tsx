import { Title } from './components/Title/Title';
import { ChartsGrid } from './components/ChartsGrid/ChartsGrid';
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

// Register Chart.js elements once
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
      <ChartsGrid />
    </div>
  );
}