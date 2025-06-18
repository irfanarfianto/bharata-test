"use client"

import { Settings, User2 } from "lucide-react"
import { useState } from "react"
import { Card } from "../ui/card"
const DUMMY_MESSAGES = [
  {
    user: "JEFF CAPP",
    time: "57 minutes ago",
    msg: "i cant feel my legs :(",
  },
  {
    user: "WILSON CHILL",
    time: "52 minutes ago",
    msg: "ahem!",
  },
  {
    user: "WILSON CHILL",
    time: "51 minutes ago",
    msg: "whatever dude :D",
  },
  {
    user: "TREVOR BALD",
    time: "43 minutes ago",
    msg: "lolol",
  },
  {
    user: "ALICE KAY",
    time: "26 minutes ago",
    msg: "oh hell yes. lets get things moving\nwith a few basic questions.",
  },
  {
    user: "ALICE KAY",
    time: "23 minutes ago",
    msg: "ill look into this for you",
  },
]

export default function ChatPanel() {
  const [msg, setMsg] = useState("")

  return (
    <Card className="w-full shadow-none p-4" style={{ minHeight: 720 }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary px-2 py-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            {/* User icon */}
            <User2 size={24} className="text-white dark:text-black" />
          </div>
          <div>
            <div className="text-primary font-bold text-lg leading-none tracking-wide">LUCY EDWARDS</div>
            <div className="text-[#41f3bd] text-xs flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#41f3bd] rounded-full mr-1" /> ONLINE
            </div>
          </div>
        </div>
        <button className="text-primary hover:text-[#41f3bd]"><Settings size={22}/></button>
      </div>

      {/* Chat messages */}
      <div className="flex flex-col gap-3 py-4">
        {DUMMY_MESSAGES.map((item, idx) => (
          <div key={idx} className="border border-primary/50 rounded-sm px-3 py-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
            <User2 size={24} className="text-white dark:text-black" />
            </div>
            <div className="flex-1">
              <div className="flex gap-2 items-center">
                <span className="text-primary font-bold text-sm tracking-wide">{item.user}</span>
                <span className="text-gray-400 text-xs">{item.time}</span>
              </div>
              <div className="text-gray-500 text-base font-medium leading-tight whitespace-pre-line">{item.msg}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form className="flex items-center border border-primary/50 rounded-md px-3 py-2 mt-2 bg-transparent" onSubmit={e => { e.preventDefault(); setMsg(""); }}>
        <input
          type="text"
          placeholder="Send a message..."
          className="flex-1 bg-transparent outline-none border-none text-primary placeholder:text-[#575964] font-medium"
          value={msg}
          onChange={e => setMsg(e.target.value)}
        />
        <button type="submit" className="ml-3 text-primary font-semibold tracking-wide hover:text-[#41f3bd]">SEND</button>
      </form>
    </Card>
  )
}