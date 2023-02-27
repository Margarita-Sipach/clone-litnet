import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../modules/Home/pages/HomePage";
import Blogs from "../modules/Blogs/pages/BlogsPage";
import Contests from "../modules/Contests/pages/ContestsPage";
import BookPage from "../modules/Books/pages/Book";
import NotFound from "../pages/NotFoundPage";
import AccountLibrary from "../modules/Account/pages/AccountLibrary";
import AccountEdit from "../modules/Account/pages/AccountEdit";
import { AccountEditPassword } from "../modules/Account/pages/AccountEditPassword";
import ContestPage from "../modules/Contests/pages/ContestPage";
import { RegistrationPage } from "../modules/Registration/pages/RegistrationPage";
import { AuthorizationPage } from "../modules/Authorization/pages/AuthorizationPage";
import { PersonalPage } from "../modules/Personal/pages/PersonalPage";
import PersonalAbout from "../modules/Personal/pages/PersonalAbout/";
import PersonalBlogs from "../modules/Personal/pages/PersonalBlogs/";
import PersonalBooks from "../modules/Personal/pages/PersonalBooks/";
import Account from "../modules/Account/pages";
import { Game } from "../pages/Game";
import { AccountAddBlog } from "../modules/Account/pages/AccountAddBlog";
import BlogPage from "../modules/Blogs/pages/BlogPage";
import ContestRules from "../modules/Contests/pages/ContestPage/ContestRules";
import ContestBooks from "../modules/Contests/pages/ContestPage/ContestBooks";
import { AccountEditBook } from "../modules/Account/pages/AccountEditBook";
import { AccountAddChapter } from "../modules/Account/pages/AccountEditBook/AccountAddChapter";
import { AccountBook } from "../modules/Account/pages/AccountBook";
import { AccountAddBook } from "../modules/Account/pages/AccountAddBook";
import { AccountEditBookInfo } from "../modules/Account/pages/AccountEditBook/AccountEditBookInfo";
import { AccountAddContest } from "../modules/Account/pages/AccountAddContest";
import { UserContextProvider } from "../context/userContext";
import { ProtectedRoute } from "../context/userProtectRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCheckingAuth } from "../../hooks";
import { AccountEditChapter } from "../modules/Account/pages/AccountEditBook/AccountEditChapter";
import { BooksPage } from "../modules/Books/pages/Books";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReaderPage } from "../modules/Reader/pages";
import ContestParticipate from "../modules/Contests/pages/ContestPage/ContestParticipate";

const client = new QueryClient({
  logger: {
    error: () => {},
    warn: console.warn,
    log: console.log,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/blogs/:id",
        element: <BlogPage />,
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
        path: "/contests/:id",
        element: <ContestPage />,
        children: [
          {
            index: true,
            element: <ContestBooks />,
          },
          {
            path: "rules",
            element: <ContestRules />,
          },
          {
            path: "participate",
            element: <ContestParticipate />,
          },
        ],
      },
      {
        path: "/books/:id",
        element: <BookPage />,
      },
      {
        path: "/reader/:id",
        element: <ReaderPage />,
      },
      {
        path: "/users/:id",
        element: <PersonalPage />,
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
            element: <PersonalBlogs />,
          },
          {
            path: "books",
            element: <PersonalBooks />,
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
          {
            path: "add-blog",
            element: <AccountAddBlog />,
          },
          {
            path: "add-book",
            element: <AccountAddBook />,
          },
          {
            path: "add-contest",
            element: <AccountAddContest />,
          },
          {
            path: "book/:bookId",
            element: <AccountBook />,
            children: [
              {
                path: "edit-book",
                element: <AccountEditBook />,
              },
              {
                path: "book-info",
                element: <AccountEditBookInfo />,
              },
              {
                path: "chapter",
                element: <AccountAddChapter />,
              },
              {
                path: "chapter/:chapterId",
                element: <AccountEditChapter />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  const user = useCheckingAuth();

  return user !== undefined ? (
    <QueryClientProvider client={client}>
      <UserContextProvider defaultUser={user}>
        <ToastContainer />
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
