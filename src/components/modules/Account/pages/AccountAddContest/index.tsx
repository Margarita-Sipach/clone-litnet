import React, { useState, ChangeEvent, useEffect } from "react";
import Button from "../../../../ui/Button";
import { FileInput } from "../../../../ui/FileInput";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { Input } from "../../../../ui/Input";
import { Textarea } from "../../../../ui/Textarea";
import useGenres from "../../../Genres/api/useGenres";
import { useUserContext } from "../../../../context/userContext";
import useCreateContest from "../../api/useCreateContest";
import { notifyError, notifySuccess } from "../../../../../hooks";
import Spinner from "../../../../ui/Spinner";

export const AccountAddContest = () => {
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [genres, setGenres] = useState("");
  const [prize, setPrize] = useState<number | string>("");
  const [date, setDate] = useState("");
  const [countCharacters, setCountCharacters] = useState("");

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) {
      setImg(files[0]);
    }
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("genres", genres);
    formData.append("userId", user!.id.toString());
    formData.append("countCharacters", countCharacters);
    formData.append("date", date);
    formData.append("prize", prize.toString());
    if (img) formData.append("img", img);
    return formData;
  };

  const { data: genresData, isLoading: genresLoading } = useGenres();

  const { mutate, status, isLoading, error, isSuccess, isError } =
    useCreateContest(createFormData());
  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Contest created!");
    } else if (isError) {
      notifyError(error.response!.data.message);
    }
  }, [status]);
  return (
    <PageWrapper title="Новый конкурс" className="gap-y-10">
      <div className="flex flex-col sm:flex-row gap-x-5">
        <FileInput className="h-72 w-52 mb-5 sm:mb-0" onChange={handleSetFile} />
        <div className="flex flex-grow flex-col gap-y-5">
          <Input
            value={title}
            onChange={(e) => setTitle(e!.target.value)}
            placeholder="Название конкурса"
          />
          {genresData ? (
            <div className="flex flex-col">
              <span className="mb-3 text-xl">Жанр</span>
              <select
                onChange={(e) => setGenres(e!.target.value)}
                multiple
                className="border px-2"
              >
                {genresData.map((item) => (
                  <option key={item.id} value={item.name} className="py-1">
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          ) : genresLoading ? (
            <p>loading genres...</p>
          ) : (
            <p>error loading genres</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mb-3 text-xl">Работы принимаются</span>
        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-5">
            до
            <Input
              value={date}
              onChange={(e) => setDate(e!.target.value)}
              type="date"
            />
          </div>
        </div>
      </div>
      <Textarea
        value={description}
        onChange={(e) => setDescription(e!.target.value)}
        placeholder="Описание конкурса"
      />
      <Input
        type="number"
        value={prize.toString()}
        onChange={(e) => setPrize(e!.target.value)}
        placeholder="Приз"
      />
      <Input
        type="number"
        value={countCharacters}
        onChange={(e) => setCountCharacters(e!.target.value)}
        placeholder="Количество символов"
      />
      {isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <Button onClick={() => mutate()}>Сохранить</Button>
      )}
    </PageWrapper>
  );
};
