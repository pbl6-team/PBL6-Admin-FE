import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CreateNotification from "./CreateNotification";

const notifications = [
  {
    title: "Title 1",
    content: "fuh tủehreuhguerhguhu4uuhuhfjsdfiou",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "sent",
  },
  {
    title: "Title 2",
    content: "Content 2",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "received",
  },
  {
    title: "Title 3",
    content: "Content 3",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "pending",
  },
  {
    title: "Title 4",
    content: "Content 4",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "sent",
  },
  {
    title: "Title 5",
    content: "Content 5",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "received",
  },
  {
    title: "Title 6",
    content: "Content 6",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "pending",
  },
  {
    title: "Title 7",
    content: "Content 7",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "sent",
  },
  {
    title: "Title 11",
    content: "fuh tủehreuhguerhguhu4uuhuhfjsdfiou",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "sent",
  },
  {
    title: "Title 12",
    content: "Content 2",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "received",
  },
  {
    title: "Title 13",
    content: "Content 3",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "pending",
  },
  {
    title: "Title 14",
    content: "Content 4",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "sent",
  },
  {
    title: "Title 15",
    content: "Content 5",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "received",
  },
  {
    title: "Title 16",
    content: "Content 6",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "pending",
  },
  {
    title: "Title 17",
    content: "Content 7",
    createdDate: "21-06-2002",
    sentDate: "21-06-2002",
    status: "sent",
  },
];

export function NotificationTable() {
  return (
    <div className="px-2 py-2 space-y-2 rounded-md bg-white">
      <div className="flex justify-between px-4 py-2 items-center">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="search" />
          <Button variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <CreateNotification />
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Title</TableHead>
            <TableHead className="w-1/2">Content</TableHead>
            <TableHead>Created date</TableHead>
            <TableHead>Sent date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notifications.map((notification) => (
            <TableRow key={notification.title}>
              <TableCell className="font-medium">
                {notification.title}
              </TableCell>
              <TableCell>{notification.content}</TableCell>
              <TableCell>{notification.createdDate}</TableCell>
              <TableCell>{notification.sentDate}</TableCell>
              <TableCell>{notification.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
