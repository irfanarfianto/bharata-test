"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

export interface ChartAreaAxesProps {
  readonly chartData: ReadonlyArray<{ month: string; value: number }>;
  readonly percentage?: string;
  readonly title?: string;
  readonly yMax?: number;
  readonly yTicks?: number[];
  readonly color?: string;
  readonly gradientFrom?: string;
  readonly gradientTo?: string;
}

export function ChartAreaAxes({
  chartData,
  percentage = "28.49%",
  title = "GRAPH TITLE",
  yMax,
  yTicks,
  color = "var(--color-secondary)",
  gradientFrom = "var(--color-secondary)",
  gradientTo = "var(--color-secondary)",
}: ChartAreaAxesProps) {
  let maxValue: number;
  if (typeof yMax === "number") {
    maxValue = yMax;
  } else if (chartData.length) {
    maxValue = Math.ceil(Math.max(...chartData.map(d => d.value)) / 1000) * 1000;
  } else {
    maxValue = 3000;
  }

  const defaultTicks =
    yTicks?.length
      ? yTicks
      : Array.from({ length: 4 }, (_, i) => i * (maxValue / 3));

  return (
    <Card>
      <CardContent className="pt-6 px-6 pb-0 w-full h-full flex flex-col">
        <div className="mb-1 w-full">
          <span className="text-base text-primary dark:text-secondary font-semibold block truncate">{title}</span>
        </div>
        <div className="text-[2rem] font-extrabold text-secondary dark:text-primary leading-none mb-2">{percentage}</div>
        <div className="flex-1 min-h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={[...chartData]}
              margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={gradientFrom} stopOpacity={0.5}/>
                  <stop offset="95%" stopColor={gradientTo} stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--color-primary)" vertical={false} />
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
                ticks={defaultTicks}
                tickFormatter={(value) => `${value/1000 >= 1 ? value/1000+'K' : value+'K'}`}
              />
              <Tooltip
                cursor={{ stroke: color, strokeWidth: 2, opacity: 0.3 }}
                contentStyle={{
                  background: "#232325",
                  border: "0.3px solid #41f3bd",
                  borderRadius: 6,
                  color: "#fff",
                  fontWeight: 400,
                }}
                labelStyle={{ color: "text-primary" }}
                itemStyle={{ color: "text-secondary" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                fill="url(#colorArea)"
                strokeWidth={3}
                dot={false}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}