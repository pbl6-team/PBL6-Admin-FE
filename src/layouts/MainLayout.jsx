import { UtilityBar } from "../components/utilityBar";
import { TitleMenu } from "../components/titleMenu";
import { useOpenUtilityBarStore } from "@/stores/useOpenUtilityBar";

export default function ({ title, children }) {
  const { isOpen, setUtilityBar } = useOpenUtilityBarStore();
  return (
    <div className="flex flex-row font-roboto">
      <div
        className={`fixed w-60 h-full z-10 shadow lg:shadow-none bg-white transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <UtilityBar />
      </div>

      {/* Nội dung trang bên phải */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          isOpen && "lg:ml-60"
        } h-screen`}
      >
        <TitleMenu title={title} />
        <div className="bg-[rgb(238,242,246)] mt-14 px-3 py-3 mr-2 rounded-md space-y-4 min-h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
