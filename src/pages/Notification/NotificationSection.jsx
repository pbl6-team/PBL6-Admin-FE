import { TitleMenu } from "../../components/titleMenu";
import { NotificationTable } from "./NotificationTable";
import { Paginate } from "../../components/Paginate";
import { useState } from "react";
import { useOpenUtilityBarStore } from "@/stores/useOpenUtilityBar";

export function NotificationSection() {
  const { isOpen, setUtilityBar } = useOpenUtilityBarStore();

  return (
    <div className="bg-[rgb(238,242,246)] rounded-md">
      <NotificationTable />
    </div>
  );
}
