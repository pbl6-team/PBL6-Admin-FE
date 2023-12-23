import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export default function ToolBar(props) {
  return (
    <div className="flex justify-between px-4 py-2 items-center">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="search" />
        <Button variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả</SelectItem>
          <SelectItem value="light">Đã kích hoạt</SelectItem>
          <SelectItem value="dark">Chưa kích hoạt</SelectItem>
        </SelectContent>
      </Select>

      <Link to="/role-management/create">
        <Button>Create</Button>
      </Link>
    </div>
  );
}
