import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState, useEffect } from "react";

async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}
const columns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "title",
    header: "Title",
    // header: ({ column }) => {
    //   return (
    //     <button
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       lhugvvvvvt
    //     </button>
    //   );
    // },
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "completed",
    header: "Completed",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];
const DATA = [
  {
    id: 1,
    title: "Todo 1",
    completed: true,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: true,
  },
  {
    id: 4,
    title: "Todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "Todo 5",
    completed: true,
  },
];
export default function FakeJson() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTodos().then((data) => setData(data));
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  console.log(table.getHeaderGroups());

  return (
    <table>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              {header.column.getCanSort() ? (
                <button
                  onClick={() =>
                    header.column.toggleSorting(
                      header.column.getIsSorted() === "asc"
                    )
                  }
                >
                  lhugvvvvvt
                </button>
              ) : null}
              {
                {
                  asc: "👇",
                  desc: "👆",
                }[header.column.getIsSorted()]
              }
            </th>
          ))}
        </tr>
      ))}

      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
