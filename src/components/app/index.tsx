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
import UserFollowing from "../pages/User/UserFollowing";
import UserComments from "../pages/User/UserComments";
import UserAbout from "../pages/User/UserAbout";
import BookPage from "../pages/Book";
import NotFound from "../pages/NotFound";
import AccountLibrary from "../pages/Account/AccountLibrary";
import AccountEdit from "../pages/Account/AccountEdit";
import ContestPage from "../pages/ContestPage";
function App() {
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
          path: "/blogs",
          element: <Blogs />,
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
          path: "/user/:slug",
          element: <User />,
          children: [
            {
              path: "about",
              element: <UserAbout />,
            },
            {
              path: "comments",
              element: <UserComments />,
            },
            {
              path: "following",
              element: <UserFollowing />,
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
