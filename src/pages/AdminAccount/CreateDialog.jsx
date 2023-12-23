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

export default function CreateDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Create Admin Account</DialogTitle>
          <DialogDescription>
            Create to the admin account here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="username" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type="text" id="phone" placeholder="phone" />
            </div>
          </div>
          <div className="flex flex-row space-x-4 z-50">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input type="text" id="firstName" placeholder="Join" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input type="text" id="lastName" placeholder="Nguyen" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Combobox className="z-0"/>
            </div>
        </div>

        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
