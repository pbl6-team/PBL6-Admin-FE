import ToolBar from "./ToolBar";
import RoleTable from "./RoleTable";

export default function RoleSection() {
  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <div className="px-2 py-2 space-y-2 rounded-md bg-white">
        <ToolBar />
        <RoleTable />
      </div>
    </div>
  );
}
