import Chart from "react-apexcharts";
import wsCreatedDates from "../../api/dashboard/wsCreatedDates";
import { useEffect, useState } from "react";
import dashBoardMoth from "../../utils/dashBoardMonth";

export default function ChartWS({ className }) {
    const [data, setData] = useState([]);
    const [numberUsers, setNumberUsers] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const res = await wsCreatedDates();

            const result = dashBoardMoth(res.data);
            let totalValue = result.reduce((total, item) => total + item.value, 0);
            setNumberUsers(totalValue);
            setData(result);
        }
        fetchData();
    }, []);
    return (
        <div className={`flex flex-col bg-white ` + className}>
            <div className="flex justify-between">
                <div className="grid grid-cols-1">
                    <span className="text-sm font-normal text-gray-500">
                        Total workspaces
                    </span>
                    <span className="text-lg font-semibold text-gray-700">
                        {numberUsers}
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#1E88E5] rounded-full mr-2"></div>
                    <div className="text-sm font-semibold text-gray-500">
                        This year
                    </div>
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
