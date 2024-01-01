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
import LockUnlockDialog from "../../components/LockUnLockDialog";
import getUsers from "../../api/userManagement/getUsers";
import { useEffect, useState } from "react";
import updateUser from "../../api/userManagement/updateUser";
import { Paginate } from "../../components/Paginate";
import searchUser from "../../api/userManagement/searchUser";

export default function UserTable({ data, setData, isSearch, page, setPage, totalPages, setTotalPages, status, search }) {
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers(page, 10);
      console.log("user table: ", response);
      setData(response.data.items);
      setTotalPages(response.data.totalPages);
    };
    fetchData();
  }, []);

  async function fetchPreviousData() {
    if (isSearch) {
      const response = await searchUser(search, page - 1, 10, status);
      setData(response.data.items);
      setPage(page - 1);
      return;
    }
    const response = await getUsers(page - 1, 10, status);
    setData(response.data.items);
    setPage(page - 1);
  }
  async function fetchNextData() {
    if (isSearch) {
      const response = await searchUser(search, page + 1, 10, status);
      setData(response.data.items);
      setPage(page + 1);
      return;
    }
    const response = await getUsers(page + 1, 10, status);
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
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>username</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                {(page - 1) * 10 + index + 1}
              </TableCell>
              <TableCell className="font-medium">
                {user.firstName + " " + (user.lastName ? user.lastName : "")}
              </TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="underline">{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>
                {user.status === 1 || user.status === 0 ? (
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
                      <div className="w-6">
                        <UserInformation userId={user.id} setData={setData} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Information</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>

              <TableCell>
                <LockUnlockDialog
                  id={user.id}
                  status={user.status}
                  name={user.firstName + " " + (user.lastName ? user.lastName : "")}
                  setDataTable={setData}
                  handleUpdate={(id, status) => updateUser(id, status)}
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
