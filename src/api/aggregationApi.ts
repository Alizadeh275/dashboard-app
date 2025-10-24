import apiClient from "./config";

export interface AggregationResult {
  [key: string]: any; // Dynamic keys based on groupBy
  count: number;
}

export interface AggregationFilters {
  location_id?: number | null;
  project_type_id?: number | null;
  status_id?: number | null;
  year?: number | null;
  month?: number | null;
}

export const aggregationApi = {
  // Get aggregated data
  getAggregatedData: async (
    filters: AggregationFilters = {},
    groupBy: string[] = []
  ): Promise<AggregationResult[]> => {
    const params = new URLSearchParams();

    // Add filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params.append(key, value.toString());
      }
    });

    // Add groupBy
    groupBy.forEach((field) => {
      params.append("group_by", field);
    });

    const response = await apiClient.get<AggregationResult[]>(
      `/aggregations/sum?${params.toString()}`
    );
    return response.data;
  },
};
