import ToolBar from "./ToolBar";
import UserTable from "./UserTable";

export default function UserSection() {
  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <div className="px-2 py-2 space-y-2 rounded-md bg-white">
        <ToolBar />
        <UserTable />
      </div>
    </div>
  );
}
