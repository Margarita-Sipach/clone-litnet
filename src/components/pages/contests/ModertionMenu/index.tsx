import { ChangeEvent } from "react";
import { Input } from "../../../ui/inputs/Input";
import { FC, useState, useEffect } from "react";
import { useUsers } from "../../../../hooks/user/useUsers";
import { Button } from "../../../ui/buttons/Button";
import { useUserContext } from "../../../context/userContext";

interface ModerationMenuProps {
  onClick: (id: number) => void;
}

export const ModerationMenu: FC<ModerationMenuProps> = ({ onClick }) => {
  const { user } = useUserContext();
  const [search, setSearch] = useState<string>("");
  const { users, refetch } = useUsers({ search: `${search}` }, 1000);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(`${e.target.value}`);
  };

  useEffect(() => {
    refetch();
  }, [search]);

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
      </div>
    </div>
  );
};
