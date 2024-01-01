import Login from "./pages/Auth/Login";
import Notification from "./pages/Notification";
import AdminAccount from "./pages/AdminAccount";
import UserManagement from "./pages/UserManagement";
import Subscription from "./pages/Subscription";
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
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import checkTokenTimeOut from './utils/checkTokenTimeOut';


function loaderLogin() {
  const token = localStorage.getItem("token");
  if (token) {
    if (checkTokenTimeOut()) {
      return redirect("/login");
    }
  }
  return null;
}

function loaderHomePage() {
  const token = localStorage.getItem("token");
  if (token) {
    if (!checkTokenTimeOut()) {
      return redirect("/dashboard");
    }
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // loader: loaderLogin,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // loader: loaderLogin,
  },
  {
    path: "/login",
    element: <Login />,
    loader: loaderHomePage,
  },
  {
    path: "/notification",
    element: <Notification />,
    // loader: loaderLogin,
  },
  {
    path: "/activity-history",
    element: <ActivityHistory />,
  },
  {
    path: "/admin-account",
    element: <AdminAccount />,
    // loader: loaderLogin,
  },
  {
    path: "/user-management",
    element: <UserManagement />,
    // loader: loaderLogin,

  },
  {
    path: "/workspace",
    element: <Workspace />,
    // loader: loaderLogin,
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
