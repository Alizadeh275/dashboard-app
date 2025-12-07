// constants/filterConfig.ts
export const GROUP_BY_LABELS: { [key: string]: string } = {
  project_type: "نوع پروژه",
  status: "وضعیت",
  location: "شهر",
  year: "سال",
  month: "ماه",
};

export const FILTER_CONFIG = [
  { key: "location_id", label: "شهر", dataKey: "locations" },
  { key: "project_type_id", label: "نوع پروژه", dataKey: "projectTypes" },
  { key: "status_id", label: "وضعیت", dataKey: "statuses" },
  { key: "year", label: "سال", dataKey: "years" },
  { key: "month", label: "ماه", dataKey: "months" },
] as const;

export interface FilterState {
  location_id: number | null;
  project_type_id: number | null;
  status_id: number | null;
  year: number | null;
  month: number | null;
}
