//TODO: responsive mobile version
import React from "react";
import { FaTrophy } from "react-icons/fa";
import { RiCalendarEventFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import Button from "../button";
import { Link } from "react-router-dom";
import DetailsElement from "../details-element";

type ContestElementProps = {
  title: string;
  prize: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  resultsDate: string;
  booksAmount?: number;
};

const ContestElement: React.FC<ContestElementProps> = ({
  title,
  prize,
  imageUrl,
  startDate,
  endDate,
  resultsDate,
  booksAmount = 0,
}) => {
  return (
    <div>
      <div className="flex w-full gap-6 pb-6">
        <img
          className="aspect-[6.5/10] max-w-[175px]"
          src={imageUrl}
          alt="contest image"
        />
        <div className="flex flex-1 flex-col">
          <div className="mb-2 flex justify-between lg:mb-6 ">
            <p className="text-xl font-medium">{title}</p>
            <p className="font-medium">{booksAmount} книг</p>
          </div>

          <div className="flex justify-between rounded-md border border-slate-300 p-2 lg:gap-12 lg:p-6">
            <DetailsElement
              title="Приз"
              description={prize}
              icon={FaTrophy}
              className="flex shrink-0 grow-0 basis-2/5"
            />

            <DetailsElement
              title="Срок приема работ"
              description={`${startDate} - ${endDate}`}
              icon={RiCalendarEventFill}
            />

            <DetailsElement
              title="Оглашение результатов"
              description={`До ${resultsDate}`}
              icon={AiOutlineClockCircle}
            />
          </div>
          <div className="mt-auto flex gap-4">
            <Link to="/contests/1">
              <Button>Перейти к работам</Button>
            </Link>
            <Button>Правила конкурса</Button>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-slate-300"></div>
    </div>
  );
};

export default ContestElement;
