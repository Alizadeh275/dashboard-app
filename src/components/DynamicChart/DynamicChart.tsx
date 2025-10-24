import { useAggregationData } from '../../hooks/useAggregationData';
import { transformChartData, getDimensionLabel } from '../../utils/chartTransformers';
import { StackedBarChart } from '../Charts/StackedBarChart';
import { GroupedBarChart } from '../Charts/GroupedBarChart';
import { DataTable } from '../DataTable/DataTable';

interface DynamicChartProps {
  filters: any;
  groupBy: string[];
}

export const DynamicChart = ({ filters, groupBy }: DynamicChartProps) => {
  const { data, loading, error } = useAggregationData(filters, groupBy);

  // Function to get Persian title based on groupBy
  const getChartTitle = (chartType: string, groupBy: string[]) => {
    const persianGroupNames = groupBy.map(dim => getDimensionLabel(dim));
    
    switch (chartType) {
      case 'stackedBar':
        return `توزیع بر اساس ${persianGroupNames[0]}`;
      
      case 'groupedBar':
        return `توزیع بر اساس ${persianGroupNames.join(' و ')}`;
      
      case 'heatmap':
        return `نقشه حرارتی ${persianGroupNames.join(' و ')}`;
      
      case 'treemap':
        return `نمودار درختی ${persianGroupNames.join(' و ')}`;
      
      case 'table':
      default:
        return `جدول داده‌ها - گروه‌بندی بر اساس ${persianGroupNames.join(' و ')}`;
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">در حال بارگذاری داده‌ها...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-64">
          <div className="text-center text-red-500">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-lg font-semibold">خطا در بارگذاری داده‌ها</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!data || !data.chart_data || data.chart_data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-64">
          <div className="text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-semibold">داده‌ای برای نمایش وجود ندارد</p>
            <p className="text-sm mt-2">لطفاً فیلترها یا گروه‌بندی را تغییر دهید</p>
          </div>
        </div>
      </div>
    );
  }

  // Transform data based on groupBy dimensions
  const chartConfig = transformChartData(data.chart_data, groupBy);
  const chartTitle = getChartTitle(chartConfig.type, groupBy);
  const persianGroupNames = groupBy.map(dim => getDimensionLabel(dim));

  const renderChart = () => {
    switch (chartConfig.type) {
      case 'stackedBar':
        return <StackedBarChart data={chartConfig.data} title={chartTitle} />;
      
      case 'groupedBar':
        return <GroupedBarChart data={chartConfig.data} title={chartTitle} />;
      
      case 'heatmap':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-lg">نمودار Heatmap</p>
              <p className="text-sm mt-2">به زودی اضافه خواهد شد</p>
            </div>
          </div>
        );
      
      case 'treemap':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <p className="text-lg">نمودار Treemap</p>
              <p className="text-sm mt-2">به زودی اضافه خواهد شد</p>
            </div>
          </div>
        );
      
      case 'table':
      default:
        return <DataTable data={data.chart_data} groupBy={groupBy} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">نمودار تحلیلی</h3>
          <p className="text-sm text-gray-600 mt-1">{chartTitle}</p>
        </div>
        <div className="text-left text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">گروه‌بندی:</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                {persianGroupNames.join(' → ')}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span>
                <span className="font-semibold">تعداد کل:</span>{' '}
                {data.total_count.toLocaleString('fa-IR')}
              </span>
              <span>•</span>
              <span>
                <span className="font-semibold">رکوردها:</span>{' '}
                {data.chart_data.length.toLocaleString('fa-IR')}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-96 border border-gray-200 rounded-lg">
        {renderChart()}
      </div>
    </div>
  );
};