import { useEffect, useState } from "react";
import { BookType } from "../../../../types/types";
import { useUserContext } from "../../../context/userContext";
import { useRating } from "../../../../hooks/books/useRating";
import { notifyError } from "../../../../hooks";
import {
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
} from "../../../../utils/formUtils";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { StarRating } from "../StarRating";

interface RatingFormProps {
  book: BookType;
  refetchBook: () => void;
}

export const RatingForm: React.FC<RatingFormProps> = ({
  book,
  refetchBook,
}) => {
  const { user } = useUserContext();
  const { createRating, isError, isLoading, error } = useRating(
    book.id,
    refetchBook
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm({ mode: "onBlur" });

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
    <div>
      {/* <Rating
        rating={Number(book.rating)}
        statistic={book.ratings!.map((item) => item.rating)}
      /> */}
      <StarRating
        precision={0.5}
        rating={Number(book.rating)}
        totalStars={5}
        onClick={handleSubmitForm}
      />
      {/* {user && (
        // <form className="mb-4 mt-2 flex items-center gap-2">
        //   <label>
        //     <input
        //       className="w-40 self-start border p-1"
        //       type="number"
        //       placeholder="Оценка"
        //       {...register(InputNames.RATING, {
        //         required: ErrorInputMessages.REQUIRED,
        //       })}
        //     />
        //     <Button size="sm" onClick={handleSubmit(handleSubmitForm)}>
        //       Оценить
        //     </Button>
        //     <div className="ml-2 text-sm font-semibold text-red-500">
        //       <ErrorMessage errors={errors} name={InputNames.RATING} />
        //     </div>
        //   </label>
        // </form>
      )} */}
    </div>
  );
};
