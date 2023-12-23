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
import LockUnlockDialog from "../../components/LockUnLockDialog";
import AdminInformation from "./AdminInformation";


const data = [
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "active",
    role: "General Manager",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "active",
    role: "Workspace Manager",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "locked",
    role: "General Manager",
  },
  {
    name: "Name 1",
    phone: "0123456789",
    email: "abc@gmail.com",
    username: "abc",
    status: "active",
    role: "User Manager",
  },
];

export default function AdminAccountTable(props) {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px]">Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>username</TableHead>
          <TableHead>Role</TableHead>
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
            <TableCell className="underline">{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>
              <span>{user.role}</span>
            </TableCell>
            <TableCell>
              {user.status === "active" ? (
                <Badge className="bg-green-600 hover:bg-green-700 w-12">
                  active
                </Badge>
              ) : (
                <Badge className="bg-red-600 hover:bg-red-700 w-12">locked</Badge>
              )}
            </TableCell>

            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-6">
                      <AdminInformation status={user.status} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Information</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>

            <TableCell>
              <LockUnlockDialog status={user.status} name="Account"/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
