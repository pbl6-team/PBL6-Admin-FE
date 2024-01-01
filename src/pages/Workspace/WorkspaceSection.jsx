import { useState } from "react";
import ToolBar from "./ToolBar";
import WorkspaceTable from "./WorkspaceTable";

export default function WorspaceSection() {
  const [data, setData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <div className="px-2 py-2 space-y-2 rounded-md bg-white">
        <ToolBar />
        <WorkspaceTable data={data} setData={setData} isSearch={isSearch}/>
      </div>
    </div>
  );
}
