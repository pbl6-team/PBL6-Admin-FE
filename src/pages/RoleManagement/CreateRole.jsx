import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const functions = [
  {
    name: "Xem danh sách người dùng",
    selected: true,
  },
  {
    name: "Chặn người dùng",
    selected: true,
  },
  {
    name: "Xem danh sách quản trị viên",
    selected: false,
  },
  {
    name: "Chỉnh sửa thông tin quản trị viên",
    selected: false,
  },
  {
    name: "Xem danh sách vai trò",
    selected: false,
  },
];
export default function CreateRole() {
  const [switchStates, setSwitchStates] = useState(functions);
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");

  const handleSwitchChange = (index) => (checked) => {
    setSwitchStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].selected = checked;
      return newStates;
    });
    console.log("Switch at index", index, "is now", checked ? "On" : "Off");
  };

  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <div className="px-4 py-2 space-y-7 rounded-md bg-white">
        <header className="text-sm flex items-center gap-1">
          <Link className="text-[#0055B4]" to={"/"}>
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-700" />
          <Link className="text-[#0055B4]" to={"/role-management"}>
            Role Management
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-700" />
          <span>Create Role</span>
        </header>

        <div className="flex flex-col gap-5 max-w-xl xl:max-w-2xl">
          <h3 className="font-semibold text-gray-800">Create Role</h3>
          <Separator />
          <div className="grid grid-cols-2 gap-y-4">
            <div className="col-span-2 space-y-2">
              <Label className="font-semibold">Role Name</Label>
              <Input type="text" placeholder="Role Name" onChange={(e) => setRoleName(e.target.value)}/>
            </div>
            <div className="col-span-2">
              <Label className="font-semibold">Role Description</Label>
              <Textarea placeholder="Role Description" />
            </div>
            <div className="col-span-1 space-x-8 flex items-center">
              <Label className="font-semibold"> Allow Active</Label>
              <Switch />
            </div>
          </div>
          <div className="mt-2">
            <Separator />
            <Label className="font-semibold">This role can:</Label>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-5/6">Function</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {functions.map((functionItem, index) => (
                  <TableRow key={functionItem.name}>
                    <TableCell className="font-medium">
                      {functionItem.name}
                    </TableCell>
                    <TableCell>
                      <Switch
                        key={index}
                        checked={functionItem.selected}
                        onCheckedChange={handleSwitchChange(index)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-end">
            <Button className="mr-2">Save</Button>
            </div>
        </div>
      </div>
    </div>
  );
}
