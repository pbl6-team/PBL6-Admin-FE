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
import { GanttChartSquare } from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "workspacename 1",
    owner: "Nguyen Van A",
    status: "active",
  },
  {
    name: "workspacename 2",
    owner: "Nguyen Van B",
    status: "active",
  },
  {
    name: "workspacename 3",
    owner: "Nguyen Van C",
    status: "locked",
  },
  {
    name: "workspacename 4",
    owner: "Nguyen Van A",
    status: "active",
  },
  {
    name: "workspacename 5",
    owner: "Nguyen Van A",
    status: "locked",
  },
];

export default function WorkspaceTable(props) {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px]">Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((workspace) => (
          <TableRow key={workspace.name}>
            <TableCell className="font-medium">{workspace.name}</TableCell>
            <TableCell>{workspace.owner}</TableCell>
            <TableCell>
              {workspace.status === "active" ? (
                <Badge className="bg-green-600 hover:bg-green-700">
                  active
                </Badge>
              ) : (
                <Badge className="bg-red-600 hover:bg-red-700">locked</Badge>
              )}
            </TableCell>

            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                  <Link to="detail"><GanttChartSquare className="w-4 h-4 cursor-pointer"/></Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Information</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>

            <TableCell>
              <LockUnlockDialog status={workspace.status} name="Workspace"/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
