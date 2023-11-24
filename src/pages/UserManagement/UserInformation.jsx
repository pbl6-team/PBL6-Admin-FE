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
import { Pencil, UnlockKeyhole, LockKeyhole } from "lucide-react";

export default function UserInformation(props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil className="w-6 h-6 p-1 cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[512px]">
        <DialogHeader>
          <DialogTitle className="text-center">Information</DialogTitle>
        </DialogHeader>

        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 grid grid-rows-3 gap-y-1">
            <div className="grid grid-cols-1 row-span-2">
              <div className="flex flex-col items-center gap-y-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Label>username</Label>
              </div>
            </div>
            {props.status === "locked" ? (
              <>
                <div className="flex items-center justify-center text-[13px] text-red-600 font-medium">
                  <LockKeyhole className="w-3.5 h-3.5 mr-1" /> Account is lock
                </div>
                <Button
                  variant="outline"
                  className="text-[13px] h-7 text-green-700 mx-4 hover:bg-green-50 hover:text-green-900"
                >
                  <UnlockKeyhole className="w-3.5 h-3.5 mr-1" />
                  Unlock
                </Button>
              </>
            ) : (
              <Button
                  variant="outline"
                  className="text-[13px] h-7 text-red-600 mx-4 hover:bg-red-50 hover:text-red-900"
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
                <span>Nguyen Van A</span>
              </div>
              <div className="flex items-center justify-start space-x-2 text-sm">
                <span className="w-14">Phone:</span>
                <span>0911381918</span>
              </div>
              <div className="flex items-center justify-start space-x-2 text-sm">
                <span className="w-14">Email:</span>
                <span>example@mail.com</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
