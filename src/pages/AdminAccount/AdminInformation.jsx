import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Combobox } from "../../components/comboboxRole";
import { GanttChartSquare, Pencil } from "lucide-react";

export default function AdminInformation({admin}) {

  return (
    <Dialog>
      <DialogTrigger asChild>
      <GanttChartSquare className="w-4 h-4 cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>View Admin Account</DialogTitle>
          <DialogDescription>
            
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={admin.email}
              disabled
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="username"
                value={admin.username}
                disabled
              />
            </div>
            <div className="grid w-full items-center gap-1.5 select-none">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                placeholder="phone"
                value={admin.phone}
                disabled
              />
            </div>
          </div>
          <div className="flex flex-row space-x-4 z-50">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Join"
                value={admin.firstName}
                disabled
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                value={admin.lastName}
                disabled
              />
            </div>
          </div>
          {/* <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Combobox className="z-0" />
          </div> */}
        </div>

        <DialogFooter>
          {/* <Button type="submit">Back</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
