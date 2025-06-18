"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "../ui/card"

const events = [
  {
    id: "event-1",
    date: "Jan 12 @ 6pm",
    desc: "Skydive with Jeff",
  },
  {
    id: "event-2",
    date: "Jan 21 @ all day",
    desc:
      "Sarah’s 25th birthday · buy a nice present\nmaybe something nice for her garden!",
  },
  {
    id: "event-3",
    date: "Jan 22 @ 11am",
    desc: "Doctor’s appointment",
  },
  {
    id: "event-4",
    date: "Feb 1 @ 9am",
    desc: "Meeting with the team",
  },
  {
    id: "event-5",
    date: "Feb 14 @ 7pm",
    desc: "Valentine's Day dinner with Lisa",
  },
  {
    id: "event-6",
    date: "Feb 20 @ 3pm",
    desc: "Conference call with the client",
  },
  {
    id: "event-7",
    date: "Mar 5 @ 10am",
    desc: "Project deadline - submit final report",
  },
  {
    id: "event-8",
    date: "Mar 15 @ 1pm",
    desc: "Lunch with the new hire, welcome them to the team!",
  },
]

export default function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full  p-4 flex flex-col md:flex-row items-start gap-6 md:gap-0 relative ">
      {/* Kiri: Event List */}
      <div className="flex flex-col w-full md:w-[420px] pr-6">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-secondary font-medium text-base">NEW EVENT</span>
        </div>
        <div className="space-y-4 overflow-y-auto pr-2 max-h-[400px] custom-scroll">
          {events.map((ev) => (
            <div key={ev.id} className="border border-primary/50 rounded-sm px-4 py-2">
              <div className="font-medium text-primary hover:text-secondary">{ev.date}</div>
              <div className="text-gray-500 text-xs whitespace-pre-line">{ev.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Kanan: Calendar */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full"
        />
      </div>
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 4px;
        }
      `}</style>
    </Card>
  )
}