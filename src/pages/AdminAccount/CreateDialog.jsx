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
import { useEffect, useState } from "react";
import createAdmin from "../../api/adminManagement/createAdmin";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

export default function CreateDialog(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      username: username,
    };
    const response = await createAdmin(data);
    if (response.status === 200) {
      toast.success("Create account successlly", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setOpen(false);
      props.setLoadData(loadData => !loadData);
    }
    else {
      toast.error('An error occurred', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    setLoading(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <Input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type="text" id="phone" placeholder="phone" onChange={(e) => setPhone(e.target.value)}/>
            </div>
          </div>
          <div className="flex flex-row space-x-4 z-50">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input type="text" id="firstName" placeholder="Join" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input type="text" id="lastName" placeholder="Nguyen" onChange={(e) => setLastName(e.target.value)}/>
            </div>
          </div>
          {/* <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Combobox className="z-0" />
          </div> */}
        </div>

        <DialogFooter>
          
          {loading ? (
            <Button disabled>
              <div className="flex justify-center items-center space-x-2">
                <Loader2 className="animate-spin" />
                <span>Create</span>
              </div>
            </Button>
          ) : (
            <Button type="submit" onClick={(e) => handleSubmit(e)}>Create</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
