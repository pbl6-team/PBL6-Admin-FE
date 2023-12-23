import MainLayout from "@/layouts/MainLayout"
import Box1 from "./Box1";
import Box2 from "./Box2";
import Chart1 from "./Chart1";
export default function () {
  return (
    <MainLayout title={"Dashboard"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
            <Box1 />
            <Box1 />
            <Box2 />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Chart1 className="md:col-span-2 pt-5 px-5 rounded-md"/>
          <Chart1 className="pt-5 px-5"/>
        </div>
    </MainLayout>
  );
}
