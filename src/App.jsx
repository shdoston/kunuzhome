import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Ozbekiston from "./pages/Ozbekiston";
import Jahon from "./pages/Jahon";
import Iqtisodiyot from "./pages/Iqtisodiyot";
import Audio from "./pages/Audio";
import FanTexnika from "./pages/FanTexnika";
import Jamiyat from "./pages/Jamiyat";
import NuqtayiNazar from "./pages/NuqtayiNazar";
import Sport from "./pages/Sport";
import NotFound from "./pages/NotFound";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/ozbekiston", element: <Ozbekiston /> },
    {
      path: "/jahon",
      element: <Jahon />,
    },
    {
      path: "/iqtisodiyot",
      element: <Iqtisodiyot />,
    },
    {
      path: "/jamiyat",
      element: <Jamiyat />,
    },
    {
      path: "/sport",
      element: <Sport />,
    },
    {
      path: "/texnologiya",
      element: <FanTexnika />,
    },
    {
      path: "/nuqtayi-nazar",
      element: <NuqtayiNazar />,
    },
    {
      path: "/audio",
      element: <Audio />,
    },
    { path: "/*", element: <NotFound /> },
  ]);
  return <RouterProvider router={routes} />;
}
