import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: 1,
    executor: "Nguyen Van A",
    action: "Tạo workspace sfodfzoidfufdufudiuifduifduifduidfuifd",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
  {
    id: 2,
    executor: "Người 1",
    action: "Xóa workspace",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
  {
    id: 3,
    executor: "Người 1",
    action: "Hành động A",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
  {
    id: 4,
    executor: "Người 1",
    action: "Hành động A",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
  {
    id: 5,
    executor: "Người 1",
    action: "Hành động A",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
  {
    id: 6,
    executor: "Người 1",
    action: "Hành động A",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
  {
    id: 7,
    executor: "Người 1",
    action: "Hành động A",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
  {
    id: 8,
    executor: "Người 1ggg",
    action: "Hành động A",
    target: "Đối tượng X",
    time: "2023-01-01 10:00:00",
  },
];

export default function ActivityHistoryTable(props) {
  return (
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Executor</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((activityHistory) => (
            <TableRow key={activityHistory.id}>
              <TableCell className="font-medium">
                {activityHistory.executor}
              </TableCell>
              <TableCell>{activityHistory.action}</TableCell>
              <TableCell>{activityHistory.target}</TableCell>
              <TableCell>{activityHistory.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}
