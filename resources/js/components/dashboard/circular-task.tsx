"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

const COLOR = "#18e2ad"
const COLOR2 = "#45f0e3"
const DARK = "#353843"

// Data & konversi utk tiap chart dashboard
const stat1Data = [
  { name: "progress", value: 12, fill: COLOR },
  { name: "remain", value: 17, fill: DARK },
]
const stat2Data = [
  // 4 segmen progress, 4 gap (biar dashed)
  { name: "prog1", value: 4.5, fill: COLOR },
  { name: "gap1", value: 2, fill: DARK },
  { name: "prog2", value: 4.5, fill: COLOR },
  { name: "gap2", value: 2, fill: DARK },
  { name: "prog3", value: 4.5, fill: COLOR },
  { name: "gap3", value: 2, fill: DARK },
  { name: "prog4", value: 4.5, fill: COLOR },
  { name: "gap4", value: 2, fill: DARK },
]
const stat3Progress = 12;
const stat3Remain = 17;


export default function DashboardCircularStatsRecharts() {
  return (
    <Card className="rounded-md px-2 py-10 w-full relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Stat 1: Solid */}
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <PieChart width={120} height={120}>
            <Pie
              data={stat1Data}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius={35}
              strokeWidth={5}
              activeIndex={0}
              outerRadius={40}
              activeShape={({
                outerRadius = 6,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 5} />
              )}
              stroke="none"
              isAnimationActive={false}
              cornerRadius={0}
            />
          </PieChart>
          <div className="mt-4 text-center">
            <div className="font-extrabold text-2xl text-[#232833] mb-1" style={{ lineHeight: 1 }}>
              12/29
            </div>
            <div className="text-sm text-[#9397a3] tracking-wide" style={{ fontWeight: 500 }}>
              TASK COMPLETE
            </div>
          </div>
        </div>
        {/* Stat 2: Dashed */}
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <PieChart width={120} height={120}>
            <Pie
              data={stat2Data}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius={35}
              activeIndex={[0, 2, 4, 6]}
              outerRadius={40}
              activeShape={({
                outerRadius = 6,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 5} />
              )}
              stroke="none"
              strokeWidth={6}
              isAnimationActive={false}
              cornerRadius={0}
            />
          </PieChart>
          <div className="mt-4 text-center">
            <div className="font-extrabold text-2xl text-[#232833] mb-1" style={{ lineHeight: 1 }}>
              60%
            </div>
            <div className="text-sm text-[#9397a3] tracking-wide" style={{ fontWeight: 500 }}>
              FUNDS MET
            </div>
          </div>
        </div>
        {/* Stat 3: Dual color (tebal + tipis) */}
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <PieChart width={120} height={120}>
            {/* Lingkaran tipis (sisa) */}
            <Pie
              data={[
                { name: "all", value: stat3Progress + stat3Remain, fill: DARK }
              ]}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius={35}
              outerRadius={40}
              stroke="none"
              isAnimationActive={false}
              cornerRadius={0}
            />
            <Pie
              data={[
                { name: "remain", value: stat3Remain, fill: COLOR2 },
                { name: "progress", value: stat3Progress, fill: "transparent" }
              ]}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius={35}
              outerRadius={40}
              stroke="none"
              isAnimationActive={false}
              cornerRadius={0}
            />

            {/* Progress tebal */}
            <Pie
              data={[
                { name: "progress", value: stat3Progress, fill: COLOR },
                { name: "remain", value: stat3Remain, fill: "transparent" }
              ]}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius={35}
              outerRadius={45}
              stroke="none"
              isAnimationActive={false}
              cornerRadius={0}
            />
          </PieChart>
          <div className="mt-4 text-center">
            <div className="font-extrabold text-2xl text-[#232833] mb-1" style={{ lineHeight: 1 }}>
              Bacon
            </div>
            <div className="text-sm text-[#9397a3] tracking-wide" style={{ fontWeight: 500 }}>
              TARGET CONSUMPTION
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}