import Login from "./pages/Auth/Login";
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
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        path: ":id",
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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
