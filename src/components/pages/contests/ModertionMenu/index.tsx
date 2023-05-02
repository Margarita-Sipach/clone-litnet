import { ChangeEvent } from "react";
import { Input } from "../../../ui/inputs/Input";
import { FC, useState, useEffect, useMemo } from "react";
import { useUsers } from "../../../../hooks/user/useUsers";
import { Button } from "../../../ui/buttons/Button";
import { useUserContext } from "../../../context/userContext";
import { PaginationPanel } from "../../../ui/PaginationPanel";
import {
  PageConfig,
  getOffset,
  getPageCount,
} from "../../../../utils/pageUtils";

interface ModerationMenuProps {
  onClick: (id: number) => void;
}

export const ModerationMenu: FC<ModerationMenuProps> = ({ onClick }) => {
  const { user } = useUserContext();
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);
  const params = useMemo(
    () => ({
      limit: PageConfig.LIMIT,
      offset: getOffset(currentPage, PageConfig.LIMIT),
    }),
    [currentPage]
  );
  const { users, count, refetch } = useUsers(
    { search: `${search}`, ...params },
    1000
  );

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(`${e.target.value}`);
  };

  useEffect(() => {
    refetch();
  }, [search, params]);

  return (
    <div>
      <h2 className="mb-5 text-xl">Введите имя пользователя</h2>
      <Input
        type="text"
        placeholder="Forrest Gump"
        onChange={handleSearch}
      ></Input>
      <div className="mb-2 mt-2 flex flex-col gap-2">
        {users &&
          users
            .filter((u) => u.id !== user!.id)
            .map((u, i) => (
              <div
                className="flex w-full justify-between border-b-2 p-1"
                key={i}
              >
                <span className=" flex flex-col justify-center overflow-hidden text-ellipsis whitespace-nowrap">
                  {u.name}
                </span>{" "}
                <Button className="" onClick={() => onClick(Number(u.id))}>
                  Добавить
                </Button>
              </div>
            ))}
        <PaginationPanel
          pageCount={getPageCount(Number(count), PageConfig.LIMIT)}
          onClick={handlePageClick}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
