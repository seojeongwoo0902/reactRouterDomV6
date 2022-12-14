import { createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import Notfound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Info from "./screens/users/Info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "info",
            element: <Info />,
          },
        ],
      },
    ],
    errorElement: <Notfound />,
  },
]);

export default router;
