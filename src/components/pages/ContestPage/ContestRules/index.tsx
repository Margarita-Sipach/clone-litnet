import React from "react";
import { TiSortAlphabetically } from "react-icons/ti";
import { RiCalendarEventFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CommentType } from "../../../../types/types";
import CommentSection from "../../../modules/comment-section";
import Button from "../../../ui/button";
import DetailsElement from "../../../ui/details-element";

const mockRules = {
  symbolAmount: 25000,
  deadlineDate: "04 февр. 2023 - 04 июн. 2023",
  resultsDate: "До 04 июл. 2023",
  genres: ["ЛитРПГ", "РеалРПГ", "Постапокалипсис"],
  about:
    "Друзья, «Литнет» объявляет новый литературный конкурс на лучший  роман в жанре ЛитРПГ в постапокалиптическом сеттинге. Основная цель главного героя выжить в этом непростом мире. Врагами могут быть как тяжелые жизненные условия на планете, так и представители других рас/родов/фракций/кланов/государств/племен и т.д. Действия романа могут происходить как в наше время, так и в будущем, или в недалеком прошлом, или в параллельном мире. Персонажи могут быть как людьми, так и выдуманными существами. Главный герой обязательно должен обладать уникальной положительной особенностью, которая даст ему преимущества в выживании в постапоклипсисе. Эта особенность может быть как приобретенной (например, бионическая рука, способная трансформироваться в оружие), так и врожденной (например, способность силой мысли передвигать предметы).",
  comments: [
    {
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. optio eligendi cupiditate, et aperiam ut quidem ipsum corporis harum labore veritatis sunt repellendus. dolore quis dolorem iste repellendus sint! sint, id!",
      name: "John Doe",
      date: "07.02.2023",
      image: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi cupiditate, et aperiam ut quidem ipsum corporis harum labore veritatis sunt repellendus. Dolore quis dolorem iste repellendus sint! Sint, id!",
      name: "John Doe",
      date: "07.02.2023",
      image: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi cupiditate, et aperiam ut quidem ipsum corporis harum labore veritatis sunt repellendus. Dolore quis dolorem iste repellendus sint! Sint, id!",
      name: "John Doe",
      date: "07.02.2023",
      image: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
    },
  ] as CommentType[],
};

const ContestRules = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
        <div className="flex-1">
          <p className="mb-4 text-lg font-medium">Сроки проведения</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
            <DetailsElement
              title="Срок приема работ"
              description={mockRules.deadlineDate}
              icon={RiCalendarEventFill}
            />
            <DetailsElement
              title="Оглашение результатов"
              description={mockRules.resultsDate}
              icon={AiOutlineClockCircle}
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-4 text-lg font-medium">Детали</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
            <DetailsElement
              title="Размер"
              description={`От ${mockRules.symbolAmount.toString()} символов`}
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
        <p className="mb-8 text-sm lg:text-base">{mockRules.about}</p>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-lg font-medium lg:text-xl">
          Как принять участие
        </p>
        <ol className="flex list-inside list-decimal flex-col gap-4 text-sm lg:text-base">
          <li>Зарегистрируйтесь на платформе Литнет</li>
          <li>
            Разместите уже написанную часть своего произведения объемом не
            меньше {mockRules.symbolAmount} знаков с пробелами либо произведение
            целиком.
          </li>
          <li>
            Зайдите на страницу конкурса и добавьте свое произведение, нажав на
            кнопку “Участвовать в конкурсе”. Напоминаем, что один автор может
            подать на конкурс не больше двух произведений.
          </li>
          <li>
            Ожидайте прохождения модерации. После этого ваша книга появится на
            странице конкурса.
          </li>
        </ol>
      </div>

      <Button className="mb-6">Участвовать в конкурсе</Button>

      <CommentSection comments={mockRules.comments} />
    </div>
  );
};

export default ContestRules;
