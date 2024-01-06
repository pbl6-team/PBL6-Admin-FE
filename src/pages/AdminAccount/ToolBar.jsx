import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";

import CreateDialog from "./CreateDialog";
import searchAdmin from "../../api/adminManagement/searchAdmin";
import getAdmins from "../../api/adminManagement/getAdmins";

export default function ToolBar({
    setLoadData,
    setData,
    search,
    setSearch,
    setIsSearch,
    setPage,
    setTotalPages,
    status,
    setStatus,
}) {
    const fetchData = async () => {
        if (search === "") {
            const response = await getAdmins(1, 10, status);
            setPage(1);
            setTotalPages(response.data.totalPages);
            setData(response.data.items);
            setIsSearch(false);
        } else {
            setIsSearch(true);
            const response = await searchAdmin(search, 1, 10, status);
            setPage(1);
            setTotalPages(response.data.totalPages);
            console.log(response);
            setData(response.data.items);
        }
    };

    const fetchDataByStatus = async (val) => {
        setStatus(val);
        if (search === "") {
            const response = await getAdmins(1, 10, val);
            console.log(response);
            setPage(1);
            setTotalPages(response.data.totalPages);
            setData(response.data.items);
            setIsSearch(false);
        } else {
            setIsSearch(true);
            const response = await searchAdmin(search, 1, 10, val);
            setPage(1);
            setTotalPages(response.data.totalPages);
            console.log(response);
            setData(response.data.items);
        }
    };

    return (
        <div className="flex justify-between px-4 py-2 items-center">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                    type="text"
                    placeholder="search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") fetchData();
                  }}
                />
                <Button
                    variant="outline"
                    onClick={() => fetchData()}
                    
                >
                    <Search className="h-4 w-4" />
                </Button>
            </div>

            <Select onValueChange={(val) => fetchDataByStatus(val)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="0">All</SelectItem>
                    <SelectItem value="1">Active</SelectItem>
                    <SelectItem value="2">Blocked</SelectItem>
                </SelectContent>
            </Select>
            <CreateDialog setLoadData={setLoadData} />
        </div>
    );
}
