import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { DatePicker } from "../../components/datePicker";
import { DatePickerWithRange } from "../../components/dateRangePicker"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export default function ToolBar(props) {
  return (
    <div className="flex gap-y-2 items-start flex-col sm:flex-row sm:justify-between px-4 py-2">
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
      <DatePickerWithRange />
    </div>
  );
}
