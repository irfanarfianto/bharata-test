"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "../ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button"
export default function CreateTaskCard() {
  return (
    <Card className="w-full max-w-md p-8 flex flex-col">
      
      <h2 className="text-3xl font-bold text-primary">Create task</h2>

      <form className="flex flex-col gap-6 flex-1 justify-start">
        {/* Task name */}
        <div>
          <Label htmlFor="task" className="text-base font-semibold text-primary mb-2">
            Task name
          </Label>
          <Input
            id="task"
            type="text"
            placeholder="e.g. watch Games of Thrones, again..."
            className="px-4 py-3 text-primary placeholder:text-[#575964] focus:outline-none focus:border-[#41f3bd] font-medium"
          />
        </div>

        {/* Email reminder */}
        <div>
          <Label htmlFor="email" className="text-base font-semibold text-primary mb-2">
            Send email reminder
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="email@domain.com"
            className=" px-4 py-3 text-primary placeholder:text-[#575964] focus:outline-none focus:border-[#41f3bd] font-medium"
          
          />
        </div>

        {/* Details */}
        <div>
          <Label htmlFor="details" className="text-base font-semibold text-primary mb-2">
            Details
          </Label>
          <Textarea
            id="details"
            rows={4}
            placeholder="add some dets here..."
            className="w-full px-4 py-3 text-primary placeholder:text-[#575964] focus:outline-none focus:border-[#41f3bd] font-medium resize-none"
          />
        </div>

        {/* Due date menggunakan Select */}
        <div>
          <Label htmlFor="duedate" className="text-base font-semibold text-primary mb-2">
            Due date
          </Label>
          <Select>
            <SelectTrigger className="w-full px-4 py-3 pr-10 text-primary focus:outline-none focus:border-[#41f3bd] font-medium">
              <SelectValue placeholder="Next Friday" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Due Dates</SelectLabel>
                <SelectItem value="nextfriday">Next Friday</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="nextweek">Next Week</SelectItem>
                <SelectItem value="someday">Someday</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Create Task Button */}
        <Button className="rounded-full px-10 py-6 transition-all">
        CREATE TASK
         </Button>
      </form>
    </Card>
  )
}