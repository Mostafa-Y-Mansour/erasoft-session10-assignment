import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Homepage from "./../pages/Homepage";
import BookDetails from "./../pages/BookDetails";
import AdminLayout from "../layouts/AdminLayout";
import BooksList from "../pages/Admin/BooksList";
import BookDashBoard from "../pages/Admin/BookDashBoard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <h1 className="text-center">404 Page Not Found</h1>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: "hello about page",
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <BooksList />,
      },
      {
        path: "add-book",
        element: <BookDashBoard />,
      },
      {
        path: "edit-book/:id",
        element: <BookDashBoard />,
      },
    ],
  },
]);
