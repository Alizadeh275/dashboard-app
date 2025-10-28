// hooks/useFilters.ts
import { useState, useEffect } from "react";
import { FilterState } from "../config/filterConfig";

export const useFilters = (onFiltersChange: (filters: FilterState) => void) => {
  const [filters, setFilters] = useState<FilterState>({
    location_id: null,
    project_type_id: null,
    status_id: null,
    year: null,
    month: null,
  });

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    const numValue = value ? parseInt(value) : null;
    setFilters((prev) => ({ ...prev, [field]: numValue }));
  };

  return { filters, handleFilterChange };
};
