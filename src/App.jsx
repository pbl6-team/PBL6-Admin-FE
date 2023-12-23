import Login from "./pages/Login";
import Notification from "./pages/Notification";
import AdminAccount from "./pages/AdminAccount";
import UserManagement from "./pages/UserManagement";
import Subscription from "./pages/subscription";
import Subscriber from "./pages/Subscription/Subscriber";
import DetailSubscription from "./pages/Subscription/DetailSubscription";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import WorkspaceSection from "./pages/Workspace/WorkspaceSection";
import WorkspaceDetail from "./pages/Workspace/WorkspaceDetail";
import ActivityHistory from "./pages/ActivityHistory";
import RoleManagement from "./pages/RoleManagement";
import RoleSection from "./pages/RoleManagement/RoleSection";
import CreateRole from "./pages/RoleManagement/CreateRole";
import { Toaster } from "@/components/ui/toaster";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/activity-history",
    element: <ActivityHistory />,
  },
  {
    path: "/admin-account",
    element: <AdminAccount />,
  },
  {
    path: "/user-management",
    element: <UserManagement />,
  },
  {
    path: "/workspace",
    element: <Workspace />,
    children: [
      {
        index: true,
        element: <WorkspaceSection />,
      },
      {
        path: "detail",
        element: <WorkspaceDetail />,
      },
    ],
  },
  {
    path: "/subscription",
    element: <Subscription />,
    children: [
      {
        index: true,
        element: <Subscriber />,
      },
      {
        path: "detail",
        element: <DetailSubscription />,
      },
    ],
  },
  {
    path: "/role-management",
    element: <RoleManagement />,
    children: [
      {
        index: true,
        element: <RoleSection />,
      },
      {
        path: "create",
        element: <CreateRole />,
      },
    ]
  },
]);

import FakeJson from "./pages/FakeJson";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
