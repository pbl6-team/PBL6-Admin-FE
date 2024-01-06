import { useState } from "react";
import AdminAccountTable from "./AdminAccountTable";
import ToolBar from "./ToolBar";

export default function AdminAccountSection() {
  const [loadData, setLoadData] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState(0);

  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <div className="px-2 py-2 space-y-2 rounded-md bg-white">
        <ToolBar setLoadData={setLoadData} setData={setData} search={search} setSearch={setSearch} setIsSearch={setIsSearch} setPage={setPage} setTotalPages={setTotalPages} status={status} setStatus={setStatus}/>
        <AdminAccountTable loadData={loadData} data={data} setData={setData} isSearch={isSearch} page={page} setPage={setPage} totalPages={totalPages} setTotalPages={setTotalPages} status={status} search={search}/>
      </div>
    </div>
  );
}
