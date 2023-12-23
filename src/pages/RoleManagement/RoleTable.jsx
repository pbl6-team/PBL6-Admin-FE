import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    name: "Admin",
    description: "fuh tủehreuhguerhguhu4uuhuhfjsdfiou",
    createAt: "Admin",
    status: "true",
  },
  {
    name: "name 1",
    description: "fuh tủehreuhguerhguhu4uuhuhfjsdfiou",
    createAt: "Admin",
    status: "false",
  },
];

export default function RoleTable() {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px]">Name</TableHead>
          <TableHead className="w-1/2">Description</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((role) => (
          <TableRow key={role.title}>
            <TableCell className="font-medium">{role.name}</TableCell>
            <TableCell>{role.description}</TableCell>
            <TableCell>{role.createAt}</TableCell>
            <TableCell>{role.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
