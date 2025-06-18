import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
 
 const files = [
   {
     name: "briefing-notes-with-apple.pdf",
     size: "56 MB",
     from: "Ben Andrews",
     date: "Jan 23",
   },
   {
     name: "image.png",
     size: "4 MB",
     from: "Alice Kay",
     date: "Jan 21",
   },
   {
     name: "website_presentation_and_discussion.doc",
     size: "104 MB",
     from: "Lewis Smith",
     date: "Jan 17",
   },
   {
     name: "Promotional Video",
     size: "2.4 GB",
     from: "Benedict Cumberbatch",
     date: "Jan 12",
   },
 ];
 
 export default function FileListTable() {
   return (
     <Card className="px-6 py-4">
       <Table className="w-full">
         <TableHeader>
           <TableRow>
             <TableHead className="w-[38%] font-semibold tracking-wide">FILE NAME</TableHead>
             <TableHead className="w-[13%] font-semibold tracking-wide">SIZE</TableHead>
             <TableHead className="w-[23%] font-semibold tracking-wide">FROM</TableHead>
             <TableHead className="w-[14%] font-semibold tracking-wide">DATE</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           {files.map((file) => (
             <TableRow key={file.name}>
               <TableCell className="w-[38%] truncate">{file.name}</TableCell>
               <TableCell className="w-[13%]">{file.size}</TableCell>
               <TableCell className="w-[23%]">{file.from}</TableCell>
               <TableCell className="w-[14%]">{file.date}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
       <div className="flex justify-center mt-4">
         <Button className="rounded-full px-10 py-6 transition-all">
           LOAD MORE
         </Button>
       </div>
     </Card>
   );
 }