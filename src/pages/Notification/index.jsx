import { UtilityBar } from "../../components/utilityBar";
import { NotificationSection } from "./NotificationSection";
import { useOpenUtilityBarStore } from "@/stores/useOpenUtilityBar";
import { Toaster } from "@/components/ui/toaster"
import MainLayout from "@/layouts/MainLayout"

export default function () {
  return (
    <MainLayout title={"Notifications"}>
      <NotificationSection/>
    </MainLayout>
  );
}