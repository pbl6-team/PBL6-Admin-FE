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
import getWorkspaces from "../../api/workspace/getWorkspaces";
import { useEffect, useState } from "react";
import convertDateTime from "../../utils/convertDateTime";
import updateWorkspace from "../../api/workspace/updateWorkspace";
import { Paginate } from "../../components/Paginate";
import searchWorkspace from "../../api/workspace/searchWorkspace";

export default function WorkspaceTable({ data, setData, isSearch, page, setPage, totalPages, setTotalPages, status, search }) {

  useEffect(() => {
    async function fetchData() {
      const result = await getWorkspaces(1, 10);
      setData(result.data.items);
      setTotalPages(result.data.totalPages);
    }
    fetchData();
  }, []);

  async function fetchPreviousData() {
    if (isSearch) {
      const response = await searchWorkspace(search, page - 1, 10, status);
      setData(response.data.items);
      setPage(page - 1);
      return;
    }
    const response = await getWorkspaces(page - 1, 10, status);
    setData(response.data.items);
    setPage(page - 1);
  }
  async function fetchNextData() {
    if (isSearch) {
      const response = await searchWorkspace(search, page + 1, 10, status);
      setData(response.data.items);
      setPage(page + 1);
      return;
    }
    const response = await getWorkspaces(page + 1, 10, status);
    setData(response.data.items);
    console.log(response.data.items);
    setPage(page + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[70px]">Number</TableHead>
            <TableHead className="min-w-[100px]">Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((workspace, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {(page - 1) * 10 + index + 1}
              </TableCell>
              <TableCell className="font-medium">{workspace.name}</TableCell>
              <TableCell>{workspace.ownerName}</TableCell>
              <TableCell>{convertDateTime(workspace.createdAt)}</TableCell>
              <TableCell>
                {workspace.status === 2 ? (
                  <Badge className="bg-red-600 hover:bg-red-700">locked</Badge>
                ) : (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    active
                  </Badge>
                )}
              </TableCell>

              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to={workspace.id}>
                        <GanttChartSquare className="w-4 h-4 cursor-pointer" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Information</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>

              <TableCell>
                <LockUnlockDialog
                  id={workspace.id}
                  status={workspace.status}
                  name={workspace.name}
                  setDataTable={setData}
                  handleUpdate={(id, status) => updateWorkspace(id, status)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Paginate
        className="flex justify-end"
        page={page}
        totalPages={totalPages}
        fetchPreviousData={fetchPreviousData}
        fetchNextData={fetchNextData}
        isSearch={isSearch}
      />
    </div>
  );
}
