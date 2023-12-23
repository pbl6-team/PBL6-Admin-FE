import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavLink } from "react-router-dom";
import { SearchCheck } from "lucide-react";

const data = [
  {
    name: "Nguyễn Văn A",
    serviceName: "Gói 1",
    subscribeFrom: "08:00 01/01/2021",
    subscribeTo: "08:00 01/05/2021",
    status: true,
  },
  {
    name: "Nguyễn Văn B",
    serviceName: "Gói 2",
    subscribeFrom: "09:00 01/01/2021",
    subscribeTo: "09:00 01/05/2021",
    status: true,
  },
  {
    name: "Nguyễn Văn C",
    serviceName: "Gói 3",
    subscribeFrom: "10:00 01/01/2021",
    subscribeTo: "10:00 01/05/2021",
    status: true,
  },
  {
    name: "Nguyễn Văn D",
    serviceName: "Gói 4",
    subscribeFrom: "11:00 01/01/2021",
    subscribeTo: "11:00 01/05/2021",
    status: false,
  },
  {
    name: "Nguyễn Văn E",
    serviceName: "Gói 1",
    subscribeFrom: "12:00 01/01/2021",
    subscribeTo: "12:00 01/05/2021",
    status: true,
  },
  {
    name: "Nguyễn Văn F",
    serviceName: "Gói 2",
    subscribeFrom: "13:00 01/01/2021",
    subscribeTo: "13:00 01/05/2021",
    status: true,
  },
];

export default function UserTable(props) {
  return (
    <Table className="border" >
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px]">Name</TableHead>
          <TableHead >Service Name</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((notification) => (
          <TableRow key={notification.name}>
            <TableCell className="font-medium">{notification.name}</TableCell>
            <TableCell>{notification.serviceName}</TableCell>
            <TableCell>{notification.subscribeFrom}</TableCell>
            <TableCell>{notification.subscribeTo}</TableCell>
            <TableCell>{notification.status ? <Badge className="bg-green-600 w-16">active</Badge> : <Badge className="bg-red-600 w-16">expired</Badge>}</TableCell>
            <TableCell>
              <NavLink to="/subscription/detail">
                <Button variant="outline">
                  <SearchCheck className="h-4 w-4" />
                </Button>
              </NavLink>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
