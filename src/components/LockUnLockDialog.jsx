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
import { useToast } from "@/components/ui/use-toast";

export default function LockUnlockDialog(props) { // props = { status: "locked" } || { status: "unlocked" }
  const { toast } = useToast();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="">
                {props.status === "locked" ? (
                  <UnlockKeyhole className="w-6 h-6 p-1 text-green-800" />
                ) : (
                  <LockKeyhole className="w-6 h-6 p-1 text-red-800" />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {props.status === "locked" ? "Unlock " : "Lock "} this {props.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure {props.status === "locked" ? "unlock" : "lock"} this
            {props.name}?
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
              toast({
                title: (
                  <div className="flex items-center">
                    <Check className="w-6 h-6 mr-2 text-green-500" />
                    <span className="text-green-500">
                      {props.name} has been
                      {props.status === "locked" ? " unlocked" : " locked"}
                    </span>
                  </div>
                ),
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
