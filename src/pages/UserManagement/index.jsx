import UserSection from "./UserSection";
import MainLayout from "@/layouts/MainLayout"
export default function () {
  return (
    <MainLayout title={"User Accounts"}>
      <UserSection/>
    </MainLayout>
  );
}
