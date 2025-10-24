import { useState, useEffect } from 'react';
import { useDimensions } from '../../hooks/useDimensions';

interface FilterPanelProps {
  onFiltersChange: (filters: any) => void;
  onGroupByChange: (groupBy: string[]) => void;
}

export const FilterPanel = ({ onFiltersChange, onGroupByChange }: FilterPanelProps) => {
  const { dimensions, loading, error } = useDimensions();
  
  const [filters, setFilters] = useState({
    location_id: null as number | null,
    project_type_id: null as number | null,
    status_id: null as number | null,
    year: null as number | null,
    month: null as number | null
  });
  
  const [groupBy, setGroupBy] = useState<string[]>(['project_type', 'status']);

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);

  useEffect(() => {
    onGroupByChange(groupBy);
  }, [groupBy]);

  const handleFilterChange = (field: string, value: string) => {
    const numValue = value ? parseInt(value) : null;
    setFilters(prev => ({ ...prev, [field]: numValue }));
  };

  const handleGroupByChange = (field: string, checked: boolean) => {
    setGroupBy(prev => 
      checked ? [...prev, field] : prev.filter(f => f !== field)
    );
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>در حال بارگذاری فیلترها...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-red-500">خطا در بارگذاری فیلترها: {error}</p>
      </div>
    );
  }

  const groupByLabels: { [key: string]: string } = {
    project_type: 'نوع پروژه',
    status: 'وضعیت',
    location: 'شهر', 
    year: 'سال',
    month: 'ماه'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" dir="rtl">
      <h3 className="text-lg font-bold mb-4">فیلترها و گروه‌بندی</h3>
      
      {/* Filters Section */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-gray-700">فیلترها</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">شهر</label>
            <select 
              className="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={(e) => handleFilterChange('location_id', e.target.value)}
            >
              <option value="">همه شهرها</option>
              {dimensions.locations.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
          </div>

          {/* Project Type Filter */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">نوع پروژه</label>
            <select 
              className="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={(e) => handleFilterChange('project_type_id', e.target.value)}
            >
              <option value="">همه انواع</option>
              {dimensions.projectTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">وضعیت</label>
            <select 
              className="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={(e) => handleFilterChange('status_id', e.target.value)}
            >
              <option value="">همه وضعیت‌ها</option>
              {dimensions.statuses.map(status => (
                <option key={status.id} value={status.id}>{status.name}</option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">سال</label>
            <select 
              className="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={(e) => handleFilterChange('year', e.target.value)}
            >
              <option value="">همه سال‌ها</option>
              {dimensions.years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Month Filter */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">ماه</label>
            <select 
              className="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={(e) => handleFilterChange('month', e.target.value)}
            >
              <option value="">همه ماه‌ها</option>
              {dimensions.months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Group By Section */}
      <div>
        <h4 className="font-semibold mb-3 text-gray-700">گروه‌بندی بر اساس</h4>
        <div className="flex flex-wrap gap-4">
          {Object.entries(groupByLabels).map(([value, label]) => (
            <label key={value} className="flex items-center space-x-2 space-x-reverse cursor-pointer">
              <input
                type="checkbox"
                checked={groupBy.includes(value)}
                onChange={(e) => handleGroupByChange(value, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">{label}</span>
            </label>
          ))}
        </div>
        
        {/* Group By Summary */}
        {groupBy.length > 0 && (
          <div className="mt-3 p-3 bg-blue-50 rounded text-sm border border-blue-200">
            <strong className="text-blue-800">گروه‌بندی انتخاب شده:</strong>{' '}
            <span className="text-blue-700">
              {groupBy.map(g => groupByLabels[g]).join(' → ')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};