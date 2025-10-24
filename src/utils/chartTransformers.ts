import { AggregationResult } from "../api/aggregationApi";

// Color palettes for different dimensions
export const colorPalettes = {
  project_type: [
    "rgba(34,197,94,0.7)", // سبز
    "rgba(59,130,246,0.7)", // آبی
    "rgba(245,158,11,0.7)", // زرد
    "rgba(168,85,247,0.7)", // بنفش
    "rgba(236,72,153,0.7)", // صورتی
    "rgba(20,184,166,0.7)", // فیروزه‌ای
  ],
  status: [
    "rgba(34,197,94,0.7)", // در دست اجرا - سبز
    "rgba(59,130,246,0.7)", // تهیه صورت وضعیت - آبی
    "rgba(245,158,11,0.7)", // صورت وضعیت نزد مالی - زرد
    "rgba(168,85,247,0.7)", // صورت وضعیت نزد ستاد - بنفش
    "rgba(236,72,153,0.7)", // صورت وضعیت نزد مشاور - صورتی
  ],
  location: [
    "rgba(59,130,246,0.7)", // آبی
    "rgba(34,197,94,0.7)", // سبز
    "rgba(245,158,11,0.7)", // زرد
    "rgba(168,85,247,0.7)", // بنفش
    "rgba(236,72,153,0.7)", // صورتی
  ],
  year: [
    "rgba(59,130,246,0.7)", // آبی
    "rgba(34,197,94,0.7)", // سبز
    "rgba(245,158,11,0.7)", // زرد
    "rgba(168,85,247,0.7)", // بنفش
  ],
  month: [
    "rgba(59,130,246,0.7)", // آبی
    "rgba(34,197,94,0.7)", // سبز
    "rgba(245,158,11,0.7)", // زرد
    "rgba(168,85,247,0.7)", // بنفش
  ],
};

// Helper function to get unique values from array
const getUniqueValues = (array: any[]): any[] => {
  const set = new Set(array);
  const result: any[] = [];
  set.forEach((value) => result.push(value));
  return result;
};

// Field mapping from frontend dimension names to backend field names
const fieldMap: { [key: string]: string } = {
  project_type: "project_type_name",
  status: "status_name",
  location: "city_name",
  year: "year",
  month: "month",
};

// Get the actual field name from dimension
const getFieldName = (dimension: string): string => {
  return fieldMap[dimension] || dimension;
};

// Transform for 1 dimension (Stacked Bar Chart)
export const transformForStackedBar = (
  data: AggregationResult[],
  dimension: string
) => {
  const fieldName = getFieldName(dimension);
  const labels = getUniqueValues(data.map((item) => item[fieldName]));

  const datasets = [
    {
      label: "تعداد",
      data: labels.map((label) => {
        const item = data.find((d) => d[fieldName] === label);
        return item ? item.count : 0;
      }),
      backgroundColor:
        colorPalettes[dimension as keyof typeof colorPalettes] ||
        colorPalettes.project_type,
      borderColor:
        colorPalettes[dimension as keyof typeof colorPalettes]?.map((color) =>
          color.replace("0.7", "1")
        ) ||
        colorPalettes.project_type.map((color) => color.replace("0.7", "1")),
      borderWidth: 1,
    },
  ];

  return {
    labels: labels.map((label) => label?.toString() || "نامشخص"),
    datasets,
  };
};

// Transform for 2 dimensions (Grouped Bar Chart)
export const transformForGroupedBar = (
  data: AggregationResult[],
  dimensions: string[]
) => {
  const [dim1, dim2] = dimensions;

  const dim1Field = getFieldName(dim1);
  const dim2Field = getFieldName(dim2);

  const dim1Values = getUniqueValues(data.map((item) => item[dim1Field]));
  const dim2Values = getUniqueValues(data.map((item) => item[dim2Field]));

  const datasets = dim2Values.map((dim2Value, index) => ({
    label: dim2Value?.toString() || "نامشخص",
    data: dim1Values.map((dim1Value) => {
      const item = data.find(
        (d) => d[dim1Field] === dim1Value && d[dim2Field] === dim2Value
      );
      return item ? item.count : 0;
    }),
    backgroundColor:
      colorPalettes[dim2 as keyof typeof colorPalettes]?.[index] ||
      `rgba(${index * 40}, ${index * 60}, ${index * 80}, 0.7)`,
    borderColor:
      colorPalettes[dim2 as keyof typeof colorPalettes]?.[index]?.replace(
        "0.7",
        "1"
      ) || `rgba(${index * 40}, ${index * 60}, ${index * 80}, 1)`,
    borderWidth: 1,
  }));

  return {
    labels: dim1Values.map((value) => value?.toString() || "نامشخص"),
    datasets,
  };
};

// Transform for Heatmap (2 dimensions)
export const transformForHeatmap = (
  data: AggregationResult[],
  dimensions: string[]
) => {
  const [dim1, dim2] = dimensions;

  const dim1Field = getFieldName(dim1);
  const dim2Field = getFieldName(dim2);

  const dim1Values = getUniqueValues(
    data.map((item) => item[dim1Field])
  ).sort();
  const dim2Values = getUniqueValues(
    data.map((item) => item[dim2Field])
  ).sort();

  const datasets = [
    {
      label: "تعداد",
      data: dim2Values
        .map((dim2Value, yIndex) =>
          dim1Values.map((dim1Value, xIndex) => {
            const item = data.find(
              (d) => d[dim1Field] === dim1Value && d[dim2Field] === dim2Value
            );
            return {
              x: xIndex,
              y: yIndex,
              v: item ? item.count : 0,
            };
          })
        )
        .flat(),
    },
  ];

  return {
    labels: {
      x: dim1Values.map((value) => value?.toString() || "نامشخص"),
      y: dim2Values.map((value) => value?.toString() || "نامشخص"),
    },
    datasets,
  };
};

// Transform for Treemap (2-3 dimensions)
export const transformForTreemap = (
  data: AggregationResult[],
  dimensions: string[]
) => {
  const hierarchy: any = {};

  data.forEach((item) => {
    let currentLevel = hierarchy;

    dimensions.forEach((dim, index) => {
      const fieldName = getFieldName(dim);
      const value = item[fieldName]?.toString() || "نامشخص";

      if (index === dimensions.length - 1) {
        // Last dimension - leaf node
        if (!currentLevel.children) currentLevel.children = [];
        currentLevel.children.push({
          name: value,
          value: item.count,
          color:
            colorPalettes[dim as keyof typeof colorPalettes]?.[index] ||
            `rgba(100, 100, 100, 0.7)`,
        });
      } else {
        // Intermediate level
        if (!currentLevel[value]) {
          currentLevel[value] = { name: value, children: {} };
        }
        currentLevel = currentLevel[value].children;
      }
    });
  });

  // Convert to array format for treemap
  const convertToArray = (obj: any): any[] => {
    if (obj.children) {
      return obj.children;
    }
    const result: any[] = [];
    Object.keys(obj).forEach((key) => {
      result.push({
        ...obj[key],
        children: obj[key].children
          ? convertToArray(obj[key].children)
          : undefined,
      });
    });
    return result;
  };

  return convertToArray(hierarchy);
};

// Define all possible chart types
export type ChartType =
  | "stackedBar"
  | "groupedBar"
  | "heatmap"
  | "treemap"
  | "table";

// Choose the best chart type based on groupBy dimensions
export const getChartType = (groupBy: string[]): ChartType => {
  switch (groupBy.length) {
    case 1:
      return "stackedBar";
    case 2:
      return "groupedBar";
    case 3:
      return "treemap";
    default:
      return "table";
  }
};

// Main transformer function
export const transformChartData = (
  data: AggregationResult[],
  groupBy: string[]
) => {
  const chartType = getChartType(groupBy);

  switch (chartType) {
    case "stackedBar":
      return {
        type: "stackedBar",
        data: transformForStackedBar(data, groupBy[0]),
      };
    case "groupedBar":
      return {
        type: "groupedBar",
        data: transformForGroupedBar(data, groupBy),
      };
    case "heatmap":
      return { type: "heatmap", data: transformForHeatmap(data, groupBy) };
    case "treemap":
      return { type: "treemap", data: transformForTreemap(data, groupBy) };
    case "table":
    default:
      return { type: "table", data };
  }
};

// Helper function to get dimension labels for display
export const getDimensionLabel = (dimension: string): string => {
  const labels: { [key: string]: string } = {
    project_type: "نوع پروژه",
    status: "وضعیت",
    location: "شهر",
    year: "سال",
    month: "ماه",
  };
  return labels[dimension] || dimension;
};

// Helper function to format values for display
export const formatValue = (value: any, dimension: string): string => {
  if (value === null || value === undefined) {
    return "نامشخص";
  }

  // Format numbers with Persian locale
  if (dimension === "count") {
    return value.toLocaleString("fa-IR");
  }

  return value.toString();
};
