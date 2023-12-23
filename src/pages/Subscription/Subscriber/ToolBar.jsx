import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

export default function ToolBar(props) {
  return (
    <div className="flex justify-between px-4 py-2 items-center">
      <div className="flex w-full space-x-16">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="search" />
          <Button variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Gói đăng ký" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="light">Gói 1</SelectItem>
            <SelectItem value="dark">Gói 2</SelectItem>
            <SelectItem value="system">Gói 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
