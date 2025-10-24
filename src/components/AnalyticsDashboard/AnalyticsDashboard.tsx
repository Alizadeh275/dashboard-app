import { useState } from 'react';
import { FilterPanel } from '../FilterPanel/FilterPanel';
import { DynamicChart } from '../DynamicChart/DynamicChart';

export const AnalyticsDashboard = () => {
  const [filters, setFilters] = useState({});
  const [groupBy, setGroupBy] = useState<string[]>(['project_type', 'status']);

  return (
    <div className="min-h-screen bg-gray-100 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          داشبورد تحلیل دستورکارها
        </h1>
        
        <FilterPanel 
          onFiltersChange={setFilters}
          onGroupByChange={setGroupBy}
        />
        
        <DynamicChart 
          filters={filters}
          groupBy={groupBy}
        />
      </div>
    </div>
  );
};