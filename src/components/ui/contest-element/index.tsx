//TODO: responsive mobile version
import React from "react";
import { PrimaryButton } from "../primary-button";
import { SecondaryButton } from "../secodary-button";
import { FaTrophy } from "react-icons/fa";
import { RiCalendarEventFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

type ContestElementProps = {
  title: string;
  prize: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  resultsDate: Date;
  booksAmount?: number;
};

function formatDate(date: Date) {
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
}

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
            <div className="flex shrink-0 grow-0 basis-2/5">
              <FaTrophy className="grow-1 mr-1 shrink-0 lg:mr-3" size="20px" />
              <div>
                <p className="mb-2 text-xs uppercase text-slate-500">Приз</p>
                <p className="text-sm">{prize}</p>
              </div>
            </div>

            <div className="flex flex-1">
              <RiCalendarEventFill
                className="grow-1 mr-1 shrink-0 lg:mr-3"
                size="20px"
              />
              <div>
                <p className="mb-2 text-xs uppercase text-slate-500">
                  Срок приема работ
                </p>
                <p className="text-sm">
                  {formatDate(startDate)} - {formatDate(endDate)}
                </p>
              </div>
            </div>

            <div className="flex flex-1">
              <AiOutlineClockCircle
                className="grow-1 mr-1 shrink-0 lg:mr-3"
                size="20px"
              />
              <div>
                <p className="mb-2 text-xs uppercase text-slate-500">
                  Оглашение результатов
                </p>
                <p className="text-sm">До {formatDate(endDate)}</p>
              </div>
            </div>
          </div>
          <div className="mt-auto flex gap-4">
            <PrimaryButton className="text-sm lg:text-sm">
              Перейти к работам
            </PrimaryButton>
            <SecondaryButton className="text-sm lg:text-sm">
              Правила конкурса
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-slate-300"></div>
    </div>
  );
};

export default ContestElement;
