import { createBrowserRouter } from "react-router-dom";
import AppPage from './pages'
export default createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
  },
]);
