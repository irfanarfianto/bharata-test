import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
// Three dots icon
function DotsIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="1.5"/>
      <circle cx="12" cy="12" r="1.5"/>
      <circle cx="12" cy="18" r="1.5"/>
    </svg>
  );
}

// Gauge component for the right card
function GaugePie({
  value,
  max = 120000,
  color = "#41f3bd",
  bgColor = "var(--primary)",
  text = "",
  subtext = "",
}: Readonly<{
  value: number;
  max?: number;
  color?: string;
  bgColor?: string;
  text?: string;
  subtext?: string;
}>) {
  const percent = Math.min(value / max, 1);
  // Pie data: progress & remain
  const data = [
    { name: "progress", value: percent * 100 },
    { name: "remain", value: 100 - percent * 100 },
  ];
  return (
    <div style={{ position: "relative", width: 300, height: 230 }}>
      <PieChart width={300} height={230}>
      
        <Pie
          data={data}
          startAngle={230}
          endAngle={-45}
          innerRadius={90}
          outerRadius={100}
          dataKey="value"
          cx={150}
          cy={115}
          stroke="none"
          isAnimationActive={false}
          cornerRadius={5}
        >
          <Cell key="progress" fill={color} />
          <Cell key="remain" fill={bgColor} />
        </Pie>
      </PieChart>
      {/* Centered Text */}
      <div style={{
        position: "absolute",
        top: "38%",
        left: 0,
        width: "100%",
        textAlign: "center",
        pointerEvents: "none"
      }}>
        <span style={{
          fontSize: "2rem",
          fontWeight: 500,
          color: "var(---primary)",
        }}>{text}</span>
        <div style={{
          fontSize: "0.8rem",
          color:  "var(---primary)",
          fontWeight: 500,
          letterSpacing: "0.02em"
        }}>{subtext}</div>
      </div>
    </div>
  );
}


export default function ArchiveAndGaugeCards() {
  return (
    <Card className="flex flex-col md:flex-row gap-8 w-full">
      {/* Archive Card */}
      <div className="relative flex-1 min-w-[280px] px-9 py-8 flex flex-col items-center justify-between">
        {/* Dots */}
        <button className="absolute right-5 top-5 p-2 text-[#595d64] hover:text-[#7de7e1]" aria-label="More">
          <DotsIcon />
        </button>
        <div className="w-full mb-4">
          <h2 className="text-[2rem] font-extrabold text-primary mb-3">Archives</h2>
        </div>
        <div className="my-3">
        {/* image asset */}
        <img
          src="/images/illustration.png"
          alt="Archive Illustration"
          className="mx-auto"
        />
        </div>
        <Button className="rounded-full px-10 py-6 transition-all">
           BACK TO DATA
         </Button>
      </div>
      {/* Gauge Card */}
      <div className="relative flex-1 min-w-[280px] flex flex-col items-center justify-center px-6 py-8">
        {/* Dots */}
        <button className="absolute right-5 top-5 p-2 text-[#595d64] hover:text-[#7de7e1]" aria-label="More">
          <DotsIcon />
        </button>
        <div className="flex flex-col items-center w-full">
          {/* pie chart */}
          <GaugePie
            value={90000}
            max={120000}
            color="#41f3bd"
            bgColor="bg-secondary"
            text="107.5k"
            subtext="Yays received"
          />
      </div>
      </div>
    </Card>
  );
}