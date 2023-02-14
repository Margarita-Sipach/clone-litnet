import { Suspense } from "react";
import {
  Await,
  defer,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import { API } from "../../../api/api";
import { BookElement } from "../../ui/book-element";
import { PageWrapper } from "../../ui/page-wrapper";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) throw new Error("User id not found");
  return defer({
    response: await (await API.getBooksByUserId(id)).json(),
  });
};

export const PersonalBook = () => {
  const { response } = useLoaderData() as any;
  return (
    <PageWrapper title="Книги">
      <Suspense fallback={<h1>Books are loading...</h1>}>
        <Await resolve={response}>
          {({ rows }: any) => {
            return rows.map((book: any) => {
              return (
                <BookElement
                  img={book.img}
                  title={book.title}
                  author={book.user.name}
                  annotation={book.description}
                  rating={book.rating}
                  categories={book.genre}
                ></BookElement>
              );
            });
          }}
        </Await>
      </Suspense>
      {/* <BookElement
        img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"
        title="wwwwwwwwwww"
        author="wwwwwww wwwwww"
        annotation="ddddddddd dddddddddddddd ddddddddddddddddd dddddddddddddddddddddd ddddddddddddddddddddddddddd ddddddddddddddddddddddd dddddddddddddddddddddddd ddddddddddd"
        rating={5}
        categories={["gasgasd"]}
        commentAmount={5}
        readAmount={5}
      ></BookElement> */}
    </PageWrapper>
  );
};
