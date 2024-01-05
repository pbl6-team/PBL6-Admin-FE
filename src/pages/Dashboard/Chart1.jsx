import Chart from "react-apexcharts";

const data = [
  {
    name: "Jan",
    value: 7,
  },
  {
    name: "Feb",
    value: 12,
  },
  {
    name: "Mar",
    value: 5,
  },
  {
    name: "Apr",
    value: 4,
  },
  {
    name: "May",
    value: 8,
  },
  {
    name: "Jun",
    value: 2,
  },
  {
    name: "Jul",
    value: 1,
  },
  {
    name: "Aug",
    value: 6,
  },
  {
    name: "Sep",
    value: 3,
  },
  {
    name: "Oct",
    value: 6,
  },
  {
    name: "Nov",
    value: 7,
  },
  {
    name: "Dec",
    value: 4,
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
          <span className="text-lg font-semibold text-gray-700">52</span>
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
