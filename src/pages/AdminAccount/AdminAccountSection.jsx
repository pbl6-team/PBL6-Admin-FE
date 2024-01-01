import { useState } from "react";
import AdminAccountTable from "./AdminAccountTable";
import ToolBar from "./ToolBar";

export default function AdminAccountSection() {
  const [loadData, setLoadData] = useState(false);

  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <div className="px-2 py-2 space-y-2 rounded-md bg-white">
        <ToolBar setLoadData={setLoadData}/>
        <AdminAccountTable loadData={loadData}/>
      </div>
    </div>
  );
}
