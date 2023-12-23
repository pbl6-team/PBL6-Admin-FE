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
import { Pencil } from "lucide-react";

export default function AdminInformation(props) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil className="w-6 h-6 p-1 cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Update Admin Account</DialogTitle>
          <DialogDescription>
            Update to the admin account here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value="admin1@email.com"
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
                value="admin1"
                disabled
              />
            </div>
            <div className="grid w-full items-center gap-1.5 select-none">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                placeholder="phone"
                value="0332837742"
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
                value="Tran"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Nguyen"
                value="Van"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Combobox className="z-0" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
