"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

export interface ChartBarCustomProps {
  readonly chartData: ReadonlyArray<{ month: string; value: number }>;
  readonly percentage?: string;
  readonly title?: string;
  readonly barColor?: string;
  readonly highlightIndex?: number;
}

export function ChartBarCustom({
  chartData,
  percentage = "36.25%",
  title = "GRAPH TITLE",
  barColor = "var(--color-secondary)",
  highlightIndex = 3,
}: ChartBarCustomProps) {
  const maxValue = chartData.length
    ? Math.ceil(Math.max(...chartData.map(d => d.value)) / 1000) * 1000
    : 3000;
  const yTicks = Array.from({ length: 4 }, (_, i) => i * (maxValue / 3));

  return (
    <Card>
      
      <CardContent className="pt-6 px-6 pb-0 w-full h-full flex flex-col">
        <div className="mb-1 w-full">
          <span className="text-base text-primary dark:text-secondary font-semibold block">{title}</span>
        </div>
        <div className="text-[2rem] font-extrabold text-secondary dark:text-primary leading-none mb-2">{percentage}</div>
        {/* Chart fills the rest of the card */}
        <div className="flex-1 w-full min-h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...chartData]}
              margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
              barCategoryGap={2}
              barGap={2}
            >
              <CartesianGrid stroke="#232325" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fill: "var(--color-primary)", fontWeight: 600, fontSize: 15, letterSpacing: "0.04em" }}
                interval="preserveStartEnd"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={5}
                tick={{ fill: "var(--color-primary)", fontWeight: 300, fontSize: 15 }}
                width={32}
                domain={[0, maxValue]}
                ticks={yTicks}
                tickFormatter={(value) => `${value/1000 >= 1 ? value/1000+'K' : value+'K'}`}
              />
              <Tooltip
                cursor={{ fill: "var(--color-secondary)", opacity: 0.2 }}
                contentStyle={{
                  background: "#232325",
                  border: "1px solid var(--color-secondary)",
                  borderRadius: 6,
                  color: "#fff",
                  fontWeight: 600,
                }}
                labelStyle={{ color: "var(--color-secondary)" }}
                itemStyle={{ color: "var(--color-secondary)" }}
              />
              <Bar dataKey="value" radius={2}>
                {chartData.map((entry, idx) => (
                  <Cell
                    key={`cell-${entry.month}`}
                    fill={idx === highlightIndex ? barColor : "#313139"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}