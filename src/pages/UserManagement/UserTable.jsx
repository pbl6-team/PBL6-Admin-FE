import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../../components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UserInformation from "./UserInformation";
import LockUnlockDialog from "./LockUnLockDialog";

const data = [
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "online",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "offline",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "locked",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "online",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "offline",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "locked",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "online",
  },
];

export default function UserTable(props) {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px]">Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>username</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.name}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>
              {user.status === "online" ? (
                <Badge className="bg-green-600 hover:bg-green-700">online</Badge>
              ) : user.status === "offline" ? (
                <Badge className="bg-gray-600">offline</Badge>
              ) : (
                <Badge className="bg-red-600 hover:bg-red-700">locked</Badge>
              )}
            </TableCell>

            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-6">
                      <UserInformation status={user.status}/>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Information</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>

            <TableCell>
              <LockUnlockDialog status={user.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
