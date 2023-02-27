import React from "react";
import { TiSortAlphabetically } from "react-icons/ti";
import { RiCalendarEventFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import CommentSection from "../../../../Comments/components/CommentSection";
import Button from "../../../../../ui/Button";
import DetailsElement from "../../../components/DetailsElement";
import { useParams } from "react-router-dom";
import useContest from "../../../api/useContest";
import { createDate } from "../../../../../../utils/utils";
import useComments from "../../../../Comments/api/useComments";

const mockRules = {
  genres: ["ЛитРПГ", "РеалРПГ", "Постапокалипсис"],
};

const ContestRules = () => {
  const { id } = useParams();
  const { data: contest, isLoading: contestLoading } = useContest(id!);
  const { data: comments, isLoading: commentsLoading } = useComments(
    "contest",
    id!,
    contest
  );
  return (
    <div>
      {contest ? (
        <>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
            <div className="flex-1">
              <p className="mb-4 text-lg font-medium">Сроки проведения</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
                <DetailsElement
                  title="Срок приема работ"
                  description={`${createDate(contest.createdAt)} - ${createDate(
                    contest.date
                  )}`}
                  icon={RiCalendarEventFill}
                />
                <DetailsElement
                  title="Оглашение результатов"
                  description={createDate(contest.date)}
                  icon={AiOutlineClockCircle}
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="mb-4 text-lg font-medium">Детали</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
                <DetailsElement
                  title="Размер"
                  description={`От ${contest.countCharacters} символов`}
                  icon={RiCalendarEventFill}
                />
                <DetailsElement
                  title="Жанры"
                  description={mockRules.genres.join(", ")}
                  icon={TiSortAlphabetically}
                />
              </div>
            </div>
          </div>

          <hr className="mt-4 mb-12" />

          <div>
            <p className="mb-2 text-lg font-medium lg:text-xl">О конкурсе</p>
            <p className="mb-8 text-sm lg:text-base">{contest.description}</p>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-lg font-medium lg:text-xl">
              Как принять участие
            </p>
            <ol className="flex list-inside list-decimal flex-col gap-4 text-sm lg:text-base">
              <li>Зарегистрируйтесь на платформе Литнет</li>
              <li>
                Разместите уже написанную часть своего произведения объемом не
                меньше {contest.countCharacters} знаков с пробелами либо
                произведение целиком.
              </li>
              <li>
                Зайдите на страницу конкурса и добавьте свое произведение, нажав
                на кнопку “Участвовать в конкурсе”. Напоминаем, что один автор
                может подать на конкурс не больше двух произведений.
              </li>
              <li>
                Ожидайте прохождения модерации. После этого ваша книга появится
                на странице конкурса.
              </li>
            </ol>
          </div>

          <Button className="mb-6">Участвовать в конкурсе</Button>
          {comments ? (
            <CommentSection comments={comments} type="contest" id={id!} />
          ) : commentsLoading ? (
            <p>loading comments...</p>
          ) : (
            <p>error loading comments</p>
          )}
        </>
      ) : (
        <p>loading contest data...</p>
      )}
    </div>
  );
};

export default ContestRules;
