import { FC } from "react";
import { Button } from "../../../ui/buttons/Button";
import { useApplications } from "../../../../hooks/contests/useApplications";
import { useContestWinner } from "../../../../hooks/contests/useContestWinner";
import { useNavigate } from "react-router-dom";
import { Router } from "../../../router";

interface SelectWinnerProps {
  contestId: string;
}

export const SelectWinner: FC<SelectWinnerProps> = ({ contestId }) => {
  const { applications } = useApplications(contestId);
  const { addWinner } = useContestWinner();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="mb-5 text-xl">Выберите книгу - победителя</h2>
      <div className="mb-2 mt-2 flex flex-col gap-2">
        {applications &&
          applications.map(({ book }, i) => (
            <div className="flex w-full justify-between border-b-2 p-1" key={i}>
              <span className=" flex flex-col justify-center overflow-hidden text-ellipsis whitespace-nowrap">
                {book.title}
              </span>{" "}
              <Button
                className=""
                onClick={() => {
                  addWinner({
                    contestId: Number(contestId),
                    bookId: Number(book.id),
                  });
                  navigate(`${Router.absoluteBooks}/${book.id}`);
                }}
              >
                Выбрать
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};
