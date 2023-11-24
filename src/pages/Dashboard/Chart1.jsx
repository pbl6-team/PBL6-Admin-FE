import Chart from "react-apexcharts";

const data = [
  {
    name: "Jan",
    value: 100,
  },
  {
    name: "Feb",
    value: 120,
  },
  {
    name: "Mar",
    value: 90,
  },
  {
    name: "Apr",
    value: 150,
  },
  {
    name: "May",
    value: 80,
  },
  {
    name: "Jun",
    value: 200,
  },
  {
    name: "Jul",
    value: 100,
  },
  {
    name: "Aug",
    value: 120,
  },
  {
    name: "Sep",
    value: 90,
  },
  {
    name: "Oct",
    value: 150,
  },
  {
    name: "Nov",
    value: 80,
  },
  {
    name: "Dec",
    value: 190,
  },
];
export default function Chart1({ className }) {
  return (
    <div className={`flex flex-col bg-white ` + className}>
      <div className="flex justify-between">
        <div className="grid grid-cols-1">
          <span className="text-sm font-normal text-gray-500">
            Total Workspace
          </span>
          <span className="text-lg font-semibold text-gray-700">20</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#1E88E5] rounded-full mr-2"></div>
          <div className="text-sm font-semibold text-gray-500">This year</div>
        </div>
      </div>

      <div className="overflow-hidden">
        <Chart
          options={{
            chart: {
              id: "basic-bar",
              toolbar: {
                show: true,
              },
            },
            xaxis: {
              categories: data.map((item) => item.name),
              labels: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: true,
              },
            },
            yaxis: {
              tickAmount: 5,
              labels: {
                show: true,
              },
            },
            grid: {
              show: true,
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false, // disable labels on bars
            },
          }}
          series={[
            {
              name: "series-1",
              data: data.map((item) => item.value),
            },
          ]}
          type="bar"
          height={400}
        />
      </div>
    </div>
  );
}
