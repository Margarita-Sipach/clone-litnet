import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Info from "../pages/Info";
import Terms from "../pages/Info/Terms";
import Payment from "../pages/Info/Payment";
import Contests from "../pages/Contests";
import Account from "../pages/Account";
import User from "../pages/User";
import UserAbout from "../pages/User/UserAbout";
import UserBlogs from "../pages/User/UserBlogs";
import BookPage from "../pages/Book";
import NotFound from "../pages/NotFound";
import AccountLibrary from "../pages/Account/AccountLibrary";
import AccountEdit from "../pages/Account/AccountEdit";
import ContestPage from "../pages/ContestPage";
import { RegistrationPage } from "../pages/registration";
import { AuthorizationPage } from "../pages/authorization";
import BlogPage from "../pages/BlogPage";
import { BooksPage } from "../pages/books";
import { books } from "../../common/data";
import UserBooks from "../pages/User/UserBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all",
        element: <BooksPage title="Все жанры" books={books} />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogPage />,
      },
      {
        path: "/info",
        element: <Info />,
        children: [
          {
            path: "terms",
            element: <Terms />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
        ],
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/authorization",
        element: <AuthorizationPage />,
      },
      {
        path: "/contests",
        element: <Contests />,
      },
      {
        path: "/contests/:slug",
        element: <ContestPage />,
      },
      {
        path: "/book/:slug",
        element: <BookPage />,
      },
      {
        path: "/users/:id",
        element: <User />,
        children: [
          {
            path: "about",
            element: <UserAbout />,
          },
          {
            path: "blogs",
            element: <UserBlogs />,
          },
          {
            path: "books",
            element: <UserBooks />,
          },
        ],
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          {
            index: true,
            element: <AccountLibrary />,
          },
          {
            path: "library",
            element: <AccountLibrary />,
          },
          {
            path: "edit",
            element: <AccountEdit />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
