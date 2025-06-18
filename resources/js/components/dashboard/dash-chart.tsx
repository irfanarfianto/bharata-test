"use client";

import { ChartAreaAxes } from "@/components/dashboard/chart-area-axes";

const chartData = [
  { month: "XYZ", value: 900 },
  { month: "XYZ", value: 800 },
  { month: "XYZ", value: 2200 },
  { month: "XYZ", value: 1000 },
  { month: "YXZ", value: 1200 },
  { month: "YXZ", value: 2400 },
];

export default function DashboardAreaChartSection() {
  return (
    <ChartAreaAxes
      chartData={chartData}
      percentage="28.49%"
      title="GRAPH TITLE"
    />
  );
}