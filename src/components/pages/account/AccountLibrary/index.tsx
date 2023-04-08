import { useUserContext } from "../../../context/userContext";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Spinner } from "../../../ui/Spinner";
import { BookElement } from "../../../modules/elements/BookElement";
import { useLibrary } from "../../../../hooks/account/useLibrary";
import { Button } from "../../../ui/buttons/Button";
import { useDeleteBookmark } from "../../../../hooks/reader/useDeleteBookmark";

export const AccountLibrary = () => {
  const { user } = useUserContext();
  const { books, refetch } = useLibrary(user!.id);
  const { mutate: deleteBookmark } = useDeleteBookmark();

  return books ? (
    <PageWrapper title="Библиотека пользователя">
      {books.map((book, i) => (
        <div key={i} className="grid grid-cols-[16fr_0.1fr_1fr]">
          <BookElement
            key={book.id}
            author={book.user.name}
            categories={book.genres.map((genre) => genre.name)}
            annotation={book.description}
            {...book}
            authorId={book.userId}
          />
          <div></div>
          <Button
            onClick={() => {
              deleteBookmark(
                `${user?.bookmarks.find((b) => b.bookId === book.id)!.id}`,
                { onSuccess: () => refetch() }
              );
            }}
          >
            ╳
          </Button>
        </div>
      ))}
    </PageWrapper>
  ) : (
    <Spinner />
  );
};
