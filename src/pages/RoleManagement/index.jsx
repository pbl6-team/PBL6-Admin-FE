import RoleSection from "./RoleSection";
import MainLayout from "@/layouts/MainLayout";
import { Outlet } from "react-router-dom";
export default function () {
  return (
    <MainLayout title={"Roles"}>
      <Outlet />
    </MainLayout>
  );
}
