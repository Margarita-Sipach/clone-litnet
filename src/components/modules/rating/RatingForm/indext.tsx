import { useEffect } from "react";
import { BookType } from "../../../../types/types";
import { useRating } from "../../../../hooks/books/useRating";
import { notifyError } from "../../../../hooks";
import {
  ErrorNotifies,
  InputNames,
} from "../../../../utils/formUtils";
import { useForm } from "react-hook-form";
import { StarRating } from "../StarRating";

interface RatingFormProps {
  book: BookType;
  refetchBook: () => void;
}

export const RatingForm: React.FC<RatingFormProps> = ({
  book,
  refetchBook,
}) => {
  const { createRating, isError, error } = useRating(book.id, refetchBook);
  const { resetField } = useForm();

  const handleSubmitForm = (rating: number) => {
    createRating({ rating });
    resetField(InputNames.RATING);
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.RATING_ERROR);
    }
  }, [error, isError]);

  return (
    <StarRating
      precision={0.5}
      rating={Number(book.rating)}
      ratings={book.ratings!}
      totalStars={5}
      onClick={handleSubmitForm}
    />
  );
};
