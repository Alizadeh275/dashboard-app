import { useDimensions } from '../../hooks/useDimensions';
import { useFilters } from '../../hooks/useFilters';
import { useGroupBy } from '../../hooks/useGroupBy';
import { GROUP_BY_LABELS } from '../../config/filterConfig';
import { FilterPanelLoading } from './FilterPanelLoading';
import { FilterPanelError } from './FilterPanelError';
import { FilterSection } from './FilterSection';
import { GroupBySection } from './GroupBySection';

interface FilterPanelProps {
  onFiltersChange: (filters: any) => void;
  onGroupByChange: (groupBy: string[]) => void;
}

export const FilterPanel = ({ onFiltersChange, onGroupByChange }: FilterPanelProps) => {
  const { dimensions, loading, error } = useDimensions();
  const { handleFilterChange } = useFilters(onFiltersChange);
  const { groupBy, handleGroupByChange } = useGroupBy(onGroupByChange);

  if (loading) return <FilterPanelLoading />;
  if (error) return <FilterPanelError error={error} />;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" dir="rtl">
      <h3 className="text-lg font-bold mb-4">فیلترها و گروه‌بندی</h3>
      
      <FilterSection 
        dimensions={dimensions}
        onFilterChange={handleFilterChange}
      />
      
      <GroupBySection 
        groupBy={groupBy}
        onGroupByChange={handleGroupByChange}
        labels={GROUP_BY_LABELS}
      />
    </div>
  );
};