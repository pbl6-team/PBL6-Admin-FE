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
import TextEditor from "../../components/textEditor";

export default function CreateNotification() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create Notification</DialogTitle>
          <DialogDescription>
            Create a new notification. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-10">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Title</Label>
            <Input type="text" id="title" className="w-full" placeholder="title of notification" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Content</Label>
            <TextEditor />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
