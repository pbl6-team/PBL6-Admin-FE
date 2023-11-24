import Login from "./pages/Login";
import Notification from "./pages/Notification";
import UserManagement from "./pages/UserManagement";
import Subscription from "./pages/subscription";
import Subscriber from "./pages/Subscription/Subscriber";
import DetailSubscription from "./pages/Subscription/DetailSubscription";
import Dashboard from "./pages/Dashboard";
import ActivityHistory from "./pages/ActivityHistory";
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
    path: "/user-management",
    element: <UserManagement />,
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
