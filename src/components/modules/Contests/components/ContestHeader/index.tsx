import React from "react";
import { FaTrophy } from "react-icons/fa";
import Button from "../../../../ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { handleImageError } from "../../../../../utils/utils";
import useContest from "../../api/useContest";
import contestBackground from "../../../../../common/assets/images/contestBackground1.png";

type ContestHeaderProps = {
  id: string;
  isRulesPage?: boolean;
};

const ContestHeader: React.FC<ContestHeaderProps> = ({ id, isRulesPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/");
  if (path[path.length - 1] === "rules") {
    isRulesPage = true;
  }
  const { data: contest, isLoading } = useContest(id);
  return (
    <>
      {contest ? (
        <div
          className="flex aspect-[3.8/1] w-full items-center bg-cover bg-no-repeat py-6 px-8"
          style={{
            background: `linear-gradient(rgba(51,51,51,.6), rgba(51,51,51,.6)), url(${contestBackground}) center`,
          }}
          onError={handleImageError}
        >
          <div className="flex h-32 flex-1 flex-col sm:h-28  lg:h-32">
            <h3 className="mb-2 text-xl font-medium text-white lg:text-2xl">
              {contest.title}
            </h3>
            <p className="mb-2 text-sm text-white md:mb-0 lg:text-base">
              {contest.description}
            </p>
            <div className="mt-auto flex gap-4">
              {isRulesPage ? (
                <Button onClick={() => navigate(-1)}>Назад</Button>
              ) : (
                <>
                  {" "}
                  <Link to="rules">
                    <Button onClick={() => navigate("rules")}>
                      Правила конкурса
                    </Button>
                  </Link>
                  <Button
                    type="secondary"
                    className="border-white text-[#ffffff] hover:text-white"
                  >
                    Участвовать в конкурсе
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="hidden h-32 flex-1 items-start justify-between rounded border border-white p-6 lg:flex">
            <FaTrophy
              className="grow-1 mr-1 shrink-0 lg:mr-3"
              size="20px"
              color="white"
            />
            <div>
              <p className="mb-2 text-xs uppercase text-white">Приз</p>
              <p className="text-sm text-white">{`3 победителя получат: выплаты от ${contest.prize} руб.; шанс на экранизацию`}</p>
            </div>
          </div>
        </div>
      ) : isLoading ? (
        <p>loading contest data</p>
      ) : (
        <p>error loading data</p>
      )}
    </>
  );
};

export default ContestHeader;
