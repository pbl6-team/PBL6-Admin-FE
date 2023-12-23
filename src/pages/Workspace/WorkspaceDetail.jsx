import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function WorkspaceDetail() {
  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <div className="px-4 py-2 space-y-7 rounded-md bg-white">
        <header className="text-sm flex items-center gap-1">
          <Link className="text-[#0055B4]" to={"/"}>
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-700" />
          <Link className="text-[#0055B4]" to={"/workspace"}>
            Workspace
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-700" />
          <span>Workspace detail</span>
        </header>

        <div className="flex flex-col gap-6 max-w-2xl xl:max-w-3xl">
          <h3 className="font-semibold text-lg text-gray-800">
            Workspace Detail
          </h3>
          <div className="grid grid-cols-3 gap-y-7">
            <div className="col-span-1">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-2 space-y-2">
              <Label className="font-semibold">Workspace Name</Label>
              <Input
                type="text"
                value="Workspace Name"
                onChange={(e) => setRoleName(e.target.value)}
              />
            </div>
            <div className="col-span-3 space-y-2">
              <Label className="font-semibold">Workspace Description</Label>
              <Textarea value="Workspace Description" />
            </div>
            <div className="col-span-1 space-x-8 flex items-center">
              <Label className="font-semibold"> Allow Active</Label>
              <Switch />
            </div>
          </div>
          <Separator />
        
          <div className="flex justify-end">
            <Link to="/workspace"><Button className="mr-2">Back</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
