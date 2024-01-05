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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, UnlockKeyhole, LockKeyhole, GanttChartSquare } from "lucide-react";
import getUserById from "../../api/userManagement/getUserById";
import { useEffect, useState } from "react";
import updateUser from "../../api/userManagement/updateUser";
import { toast } from "react-toastify";
export default function UserInformation(props) {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open === false) return;
    console.log(props.userId);
    getUserById(props.userId).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, [open]);
  async function handleLock() {
    const res = await updateUser(props.userId, 2);
    if (!res.ok) {
      return toast.error("Lock failed", {
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
    props.setData((data) => {
      const newData = [...data]
      const index = data.findIndex((user) => user.id === props.userId);
      newData[index].status = 2;
      return [...newData];

    });
    toast.success("Lock successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setUser({ ...user, status: 2 });
  }
  function handleUnlock() {
    updateUser(props.userId, 1).then((res) => {
      console.log(res);
    });
    props.setData((data) => {
      // const newData = [...data]
      // const index = data.findIndex((user) => user.id === props.userId);
      // newData[index].status = 1;
      // return [...newData];
      const updateData = data.find((user) => user.id === props.userId);
      updateData.status = 1;
      return [...data]

    });
    toast.success("Unlock successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setUser({ ...user, status: 1 });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <GanttChartSquare className="w-4 h-4 cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[512px]">
        <DialogHeader>
          <DialogTitle className="text-center">Information</DialogTitle>
        </DialogHeader>

        <div className="grid grid-rows-3 grid-cols-1 sm:grid-flow-col gap-4">
          <div className="row-span-3 grid grid-rows-3 gap-y-1">
            <div className="grid grid-cols-1 row-span-2">
              <div className="flex flex-col items-center gap-y-2">
                <Avatar>
                  <AvatarImage src={user?.picture} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Label>username</Label>
              </div>
            </div>
            {user?.status === 2 ? (
              <>
                <div className="flex items-center justify-center text-[13px] text-red-600 font-medium">
                  <LockKeyhole className="w-3.5 h-3.5 mr-1" /> Account is lock
                </div>
                <Button
                  variant="outline"
                  className="text-[13px] h-7 text-green-700 mx-4 hover:bg-green-50 hover:text-green-900"
                  onClick={handleUnlock}
                >
                  <UnlockKeyhole className="w-3.5 h-3.5 mr-1" />
                  Unlock
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="text-[13px] h-7 text-red-600 mx-4 hover:bg-red-50 hover:text-red-900"
                onClick={handleLock}
              >
                <UnlockKeyhole className="w-3.5 h-3.5 mr-1" />
                Lock
              </Button>
            )}
          </div>

          <Card className="col-span-2 row-span-3">
            <CardContent className="grid gap-6 -space-y-3">
              <div className="flex items-center mt-4 justify-start space-x-2 text-sm">
                <span className="w-14">Name:</span>
                <span>
                  {user?.firstName +
                    " " +
                    (user?.lastName ? user.lastName : "")}
                </span>
              </div>
              <div className="flex items-center justify-start space-x-2 text-sm">
                <span className="w-14">Phone:</span>
                <span>{user?.phone}</span>
              </div>
              <div className="flex items-center justify-start space-x-2 text-sm">
                <span className="w-14">Email:</span>
                <span>{user?.email}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
