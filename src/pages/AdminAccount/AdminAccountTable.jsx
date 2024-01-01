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

export default function AdminAccountTable(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    async function fetchData() {
      const result = await getAdmins(page, 10);
      setData(result.data.items);
      setTotalPages(result.data.totalPages);

    }
    fetchData();
  }, [props.loadData]);

  async function fetchPreviousData() {
    const response = await getAdmins(page - 1, 10);
    setData(response.data);
    setPage(page - 1);
  }

  async function fetchNextData() {
    const response = await getAdmins(page + 1, 10);
    setData(response.data);
    setPage(page + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[70px]">Number</TableHead>
            <TableHead className="min-w-[100px]">Username</TableHead>
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
            <TableRow key={admin.name}>
              <TableCell className="font-medium">
                {(page - 1) * 10 + index + 1}
              </TableCell>
              <TableCell className="font-medium">{admin.username}</TableCell>
              <TableCell>{admin.phone}</TableCell>
              <TableCell className="underline">{admin.email}</TableCell>
              <TableCell>{admin.firstName + " " + admin.lastName}</TableCell>
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
                        <AdminInformation status={admin.status} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Information</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>

              <TableCell>
                {(admin.id !== "5bd1119a-d7c0-4e0d-e7c5-08dbfe6cf64e") && <LockUnlockDialog
                  id={admin.id}
                  status={admin.status}
                  name={admin.name}
                  setDataTable={setData}
                  handleUpdate={(id, status) => updateAdmin(id, status)}
                />}
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
      />
    </div>
  );
}
