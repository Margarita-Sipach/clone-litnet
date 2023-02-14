import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Info from "../pages/Info";
import Terms from "../pages/Info/Terms";
import Payment from "../pages/Info/Payment";
import Contests from "../pages/Contests";
import BookPage from "../pages/Book";
import { PersonalAbout } from "../modules/personal-about";
import NotFound from "../pages/NotFound";
import AccountLibrary from "../pages/Account/AccountLibrary";
import AccountEdit from "../pages/Account/AccountEdit";
import { AccountEditPassword } from "../pages/Account/AccountEditPassword";
import ContestPage from "../pages/ContestPage";
import { RegistrationPage } from "../pages/registration";
import { AuthorizationPage } from "../pages/authorization";
import { PersonalPage, loader as personalPageLoader } from "../pages/personal";
import { PersonalBlog } from "../modules/personal-blog";
import {
  PersonalBook,
  loader as personalBookLoader,
} from "../modules/personal-book";
import Account from "../pages/Account";
import { UserContextProvider, useUserContext } from "../context/userContext";
import { ProtectedRoute } from "../context/userProtectRoute";
import { useEffect, useState } from "react";
import { LocalStorage } from "../storage";
import { API } from "../../api/api";
import { checkAuth } from "../../utils/utils";
import { UserStateType } from "../../types/types";

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
        element: <PersonalPage />,
        loader: personalPageLoader,
        children: [
          {
            index: true,
            element: <PersonalAbout />,
          },
          {
            path: "about",
            element: <PersonalAbout />,
          },
          {
            path: "blogs",
            element: <PersonalBlog />,
          },
          {
            path: "books",
            element: <PersonalBook />,
            loader: personalBookLoader,
          },
        ],
      },
      {
        path: "/account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
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
          {
            path: "edit-password",
            element: <AccountEditPassword />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState<UserStateType>(undefined);

  useEffect(() => {
    checkAuth(setUser);
  }, []);

  if (user === undefined) return <h1>Loading...</h1>;

  return (
    <UserContextProvider defaultUser={user}>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
