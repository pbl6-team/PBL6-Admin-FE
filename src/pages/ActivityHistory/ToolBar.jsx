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
          <SelectValue placeholder="Action" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="light">Tạo workspace</SelectItem>
          <SelectItem value="dark">Xóa workspace</SelectItem>
          <SelectItem value="dark">Xóa user</SelectItem>
        </SelectContent>
      </Select>

      <CreateDialog />
    </div>
  );
}
