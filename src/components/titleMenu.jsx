import { LogOut, Menu } from "lucide-react";
import { useOpenUtilityBarStore } from "@/stores/useOpenUtilityBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
export function TitleMenu(props) {
  const navigate = useNavigate();
  const { isOpen, setUtilityBar } = useOpenUtilityBarStore();

  const handleClick = () => {
    setUtilityBar(!isOpen);
    console.log(!isOpen);
  };

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenTimeOut");
    localStorage.removeItem("refreshTokenTimeOut");
    navigate("/login");
  }
  return (
    <div className="fixed top-0 flex px-3 w-full items-center z-10 bg-white py-3.5">
      <div className="flex">
        <Menu
          onClick={handleClick}
          className="w-7 h-7 p-1.5 rounded-lg bg-gray-200 transition duration-150 hover:bg-gray-600 hover:text-white"
        />
        <h2 className="px-4 text-lg font-semibold tracking-tight select-none">
          {props.title}
        </h2>
      </div>
      <div className="fixed top-3 right-7 h-8 w-8 cursor:pointer">
        <Popover className="rounded-md ">
          <PopoverTrigger >
            <Avatar className="h-8 w-8 ring-offset-1 transition-all duration-300 hover:ring-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-40 shadow flex flex-col m-0 p-0">
            <div className="w-full py-2 pl-3 hover:bg-slate-100 cursor-pointer text-sm gap-1 font-medium justify-start flex items-center" onClick={() => logout()}><LogOut className="relative top-[1px] w-3.5 h-3.5"/> <span>Logout</span></div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
