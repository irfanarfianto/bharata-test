"use client"

import { Pie, PieChart, Sector, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { EllipsisVertical } from "lucide-react"

export interface PieSegmentData {
  name: string
  value: number
  fill: string
}

export interface ChartPieSegmentProps {
  readonly data: readonly PieSegmentData[]
}

export function ChartPieSegment({ data }: Readonly<ChartPieSegmentProps>) {
  return (
    <Card className="flex flex-col">
      <CardContent className="relative pt-6 px-6 pb-6 flex flex-col items-center justify-start flex-1">
      {/* Dots */}
      <button className="absolute right-5 top-5 p-2 text-[#595d64] hover:text-[#7de7e1]" aria-label="More">
          <EllipsisVertical />
        </button>
        <div className="w-full flex flex-col items-center">
          {/* Chart Pie di tengah */}
          <div className="w-full flex justify-center items-center" style={{ minHeight: 220 }}>
            <ResponsiveContainer width={220} height={220}>
              <PieChart>
                <Pie
                  data={[...data]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  activeIndex={0}
                  activeShape={({
                    outerRadius = 0,
                    ...props
                  }) => (
                    <Sector {...props} outerRadius={outerRadius + 10} />
                  )}
                  stroke="none"
                />
                <Tooltip
                  contentStyle={{
                    background: "#232325",
                    border: "none",
                    borderRadius: 8,
                    color: "#eaeaea",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                  itemStyle={{
                    color: "#eaeaea",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                  formatter={(value: number, name: string) =>
                    [`${value}%`, name]
                  }
                  cursor={{ fill: "rgba(34,34,34,0.1)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend custom — rata kiri, tapi tetap sejajar dengan chart */}
          <div
            className="flex flex-col gap-3 mt-8"
            style={{
              width: 220,           // lebar legend sama dengan chart
              alignItems: "flex-start"
            }}
          >
            {data.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-3 text-base font-semibold">
                {/* Flag icon untuk baris pertama */}
                {idx === 0 ? (
                  <span
                    style={{
                      display: "inline-block",
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: item.fill,
                      border: "2px solid #232325",
                      position: "relative",
                    }}
                  >
                    <svg width={18} height={18} style={{ position: "absolute", left: 0, top: 0 }}>
                      <rect x={4} y={3} width={2} height={12} fill="#fff" rx={1} />
                      <path d="M6 4 Q12 7 6 10 Z" fill="#fff" />
                    </svg>
                  </span>
                ) : (
                  <span
                    style={{
                      display: "inline-block",
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: item.fill,
                      border: "2px solid #232325",
                    }}
                  />
                )}
                <span
                  style={{ color: "text-primary" }}
                  className={idx === 0 ? "font-bold" : "font-normal"}
                >
                  {item.value}% {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}