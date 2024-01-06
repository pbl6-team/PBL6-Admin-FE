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
import getAdmins from "../../api/adminManagement/getAdmins";
import { useEffect, useState } from "react";
import { Paginate } from "../../components/Paginate";
import updateAdmin from "../../api/adminManagement/updateAdmin";
import { GanttChartSquare } from "lucide-react";
import searchAdmin from "../../api/adminManagement/searchAdmin";

export default function AdminAccountTable({
    loadData,
    data,
    setData,
    isSearch,
    page,
    setPage,
    totalPages,
    setTotalPages,
    status,
    search,
}) {
    useEffect(() => {
        const fetchData = async () => {
            const response = await getAdmins(page, 10);
            console.log("admin table: ", response);
            setData(response.data.items);
            setTotalPages(response.data.totalPages);
        };
        fetchData();
    }, [loadData]);

    async function fetchPreviousData() {
        if (isSearch) {
            const response = await searchAdmin(search, page - 1, 10, status);
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
        const response = await searchAdmin(search, page + 1, 10, status);
        setData(response.data.items);
        setPage(page + 1);
        return;
      }
      const response = await getAdmins(page + 1, 10, status);
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
                        <TableHead className="min-w-[100px]">
                            Username
                        </TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((admin, index) => (
                        <TableRow key={admin.id}>
                            <TableCell className="font-medium">
                                {(page - 1) * 10 + index + 1}
                            </TableCell>
                            <TableCell className="font-medium">
                                {admin.username}
                            </TableCell>
                            <TableCell>{admin.phone}</TableCell>
                            <TableCell className="underline">
                                {admin.email}
                            </TableCell>
                            <TableCell>
                                {admin.firstName + " " + admin.lastName}
                            </TableCell>
                            <TableCell>
                                {admin.status === 2 ? (
                                    <Badge className="bg-red-600 hover:bg-red-700 w-12">
                                        locked
                                    </Badge>
                                ) : (
                                    <Badge className="bg-green-600 hover:bg-green-700 w-12">
                                        active
                                    </Badge>
                                )}
                            </TableCell>

                            <TableCell>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="w-6">
                                                {/* <GanttChartSquare className="w-4 h-4 cursor-pointer" /> */}
                                                <AdminInformation
                                                    admin={admin}
                                                />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Information</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>

                            <TableCell>
                                {admin.id !==
                                    "5bd1119a-d7c0-4e0d-e7c5-08dbfe6cf64e" && (
                                    <LockUnlockDialog
                                        id={admin.id}
                                        status={admin.status}
                                        name={admin.name}
                                        setDataTable={setData}
                                        handleUpdate={(id, status) =>
                                            updateAdmin(id, status)
                                        }
                                    />
                                )}
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
