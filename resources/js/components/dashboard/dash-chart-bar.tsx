"use client";

import { ChartBarCustom } from "@/components/dashboard/chart-bar";

const chartData = [
  { month: "XYZ", value: 300 },
  { month: "XYZ", value: 1100 },
  { month: "XYZ", value: 2100 },
  { month: "YZX", value: 2900 }, 
  { month: "YXZ", value: 2200 },
];

export default function DashboardBarChartSection() {
  return (
    <ChartBarCustom
      chartData={chartData}
      percentage="36.25%"
      title="GRAPH TITLE"
      highlightIndex={3}
    />
  );
}