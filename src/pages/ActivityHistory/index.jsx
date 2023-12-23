import MainLayout from "../../layouts/MainLayout";
import ActivityHistorySection from "./ActivityHistorySection";
export default function () {
  return (
    <MainLayout title={"Activity History"}>
      <ActivityHistorySection />
    </MainLayout>
  );
}
