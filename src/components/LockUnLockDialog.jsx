import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { UnlockKeyhole, LockKeyhole, Check } from "lucide-react";
import { toast } from "react-toastify";

export default function LockUnlockDialog({ id, status, name, setDataTable, handleUpdate }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="">
                {status === 2 ? (
                  <UnlockKeyhole className="w-6 h-6 p-1 text-green-800" />
                ) : (
                  <LockKeyhole className="w-6 h-6 p-1 text-red-800" />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {status === 2 ? "Unlock " : "Lock "} this {name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure {status === 2 ? "unlock" : "lock"} this{" "}
            {name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              async function update() {
                const result = await handleUpdate(id, (status === 2 ? 1 : 2));
                console.log(result);
              }
              update();
              
              setDataTable((prev) => {
                const dataUpdate = prev.find((data) => data.id === id);
                dataUpdate.status  === 2 ? (dataUpdate.status = 1) : (dataUpdate.status = 2);
                return [...prev];
              });
              toast.success(`${name} has been ${status === "locked" ? " unlocked" : " locked"}`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
