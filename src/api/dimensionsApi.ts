import apiClient from "./config";

export interface DimensionItem {
  id: number;
  name: string;
}

export const dimensionsApi = {
  // Get all locations
  getLocations: async (): Promise<DimensionItem[]> => {
    const response = await apiClient.get<DimensionItem[]>("/locations");
    return response.data;
  },

  // Get all project types
  getProjectTypes: async (): Promise<DimensionItem[]> => {
    const response = await apiClient.get<DimensionItem[]>("/project-types");
    return response.data;
  },

  // Get all statuses
  getStatuses: async (): Promise<DimensionItem[]> => {
    const response = await apiClient.get<DimensionItem[]>("/statuses");
    return response.data;
  },

  // Get all years
  getYears: async (): Promise<number[]> => {
    const response = await apiClient.get<number[]>("/years");
    return response.data;
  },

  // Get all months
  getMonths: async (): Promise<number[]> => {
    const response = await apiClient.get<number[]>("/months");
    return response.data;
  },
};
