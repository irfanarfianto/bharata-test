"use client"

import { ChartPieSegment } from "@/components/dashboard/chart-pie"

const chartData = [
  { name: "Segment One", value: 41, fill: "#e9e9ea" },
  { name: "Segment Two", value: 27, fill: "#444652" },
  { name: "Segment Three", value: 19, fill: "#393b44" },
  { name: "Segment Four", value: 13, fill: "#31323a" },
]

export default function DashboardPieChartSection() {
  return (
    <ChartPieSegment data={chartData} />
  )
}