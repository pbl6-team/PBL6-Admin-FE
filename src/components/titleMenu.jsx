import { Menu } from "lucide-react";
import { useOpenUtilityBarStore } from "@/stores/useOpenUtilityBar";

export function TitleMenu(props) {
  const { isOpen, setUtilityBar } = useOpenUtilityBarStore();
  const handleClick = () => {
      setUtilityBar(!isOpen);
      console.log(!isOpen);
  };
  return (
      <div className="fixed top-0 flex px-3 items-center z-10 w-full bg-white py-3.5">
          <Menu onClick={handleClick} className="w-7 h-7 p-1.5 rounded-lg bg-gray-200 transition duration-150 hover:bg-gray-600 hover:text-white" />
          <h2 className="px-4 text-lg font-semibold tracking-tight select-none">
              {props.title}
          </h2>
      </div>
  );
}