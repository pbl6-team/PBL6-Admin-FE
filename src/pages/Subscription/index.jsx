import { Outlet } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
export default function Subscription() {
  return (
    <MainLayout title={"Subscriptions"}>
      <Outlet />
    </MainLayout>
  );
}
