import MainLayout from "@/layouts/MainLayout"
import AdminAccountSection from "./AdminAccountSection";
export default function () {
  return (
    <MainLayout title={"Admin Accounts"}>
      <AdminAccountSection/>
    </MainLayout>
  );
}
