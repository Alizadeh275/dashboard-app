// components/FilterSection.tsx
import { FILTER_CONFIG,FilterState } from '../../config/filterConfig';
import { FilterSelect } from './FilterSelect';

interface FilterSectionProps {
  dimensions: any;
  onFilterChange: (field: keyof FilterState, value: string) => void;
}

export const FilterSection = ({ dimensions, onFilterChange }: FilterSectionProps) => (
  <div className="mb-6">
    <h4 className="font-semibold mb-3 text-gray-700">فیلترها</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {FILTER_CONFIG.map(({ key, label, dataKey }) => (
        <FilterSelect
          key={key}
          label={label}
          value={dimensions[dataKey]}
          onChange={(value) => onFilterChange(key, value)}
        />
      ))}
    </div>
  </div>
);

