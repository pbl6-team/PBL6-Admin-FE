import { Button, buttonVariants } from "@/components/ui/button";
import {
  AreaChart,
  User,
  Users,
  Presentation,
  Bell,
  FileClock,
  UserCheck,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export function UtilityBar() {
  return (
    <div className="fixed w-60 h-full z-10 shadow-2xl md:shadow-none bg-white">
      <div className="space-y-4 py-4">
        <h2 className="pb-3 px-4 text-lg font-semibold tracking-tight border-b">
          Fira
        </h2>

        <div className="space-y-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <AreaChart className="mr-2 h-4 w-4" />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin-account"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <User className="mr-2 h-4 w-4" />
            Admin Accounts
          </NavLink>

          <NavLink
            to="/user-management"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <Users className="mr-2 h-4 w-4" /> User Management
          </NavLink>

          <NavLink
            to="/workspace"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <Presentation className="mr-2 h-4 w-4" />
            Workspaces
          </NavLink>

          <NavLink
            to="/notification"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </NavLink>

          <NavLink
            to="/activity-history"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <FileClock className="mr-2 h-4 w-4" />
            Activity History
          </NavLink>

          <NavLink
            to="/subscription"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <UserCheck className="mr-2 h-4 w-4" />
            Subcriptions
          </NavLink>

          <NavLink
            to="/role-management"
            className={({ isActive }) =>
              (isActive
                ? buttonVariants({ variant: "secondary" })
                : buttonVariants({ variant: "ghost" })
              ).replace("justify-center", "") + " w-full justify-start"
            }
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            Roles
          </NavLink>
          
          {/* <Button variant="ghost" className="w-full justify-start">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button> */}
        </div>
      </div>
    </div>
  );
}
