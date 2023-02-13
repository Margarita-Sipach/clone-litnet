import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../api/api";
import { useUserContext } from "../../../context/userContext";
import { Router } from "../../../router";
import { FileInput } from "../../../ui/file-input";
import FormButton from "../../../ui/form-button";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { PrimaryTextarea } from "../../../ui/primary-textarea";
import { Wrapper } from "../../../ui/wrapper";

const AccountEdit = () => {
  const { user, setUser } = useUserContext();
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [readingView, setReadingView] = useState(user?.readingView || "");
  const [autobiography, setAutobiography] = useState(user?.autobiography || "");
  const navigate = useNavigate();

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const handleUpdate = async (formData: FormData) => {
    if (!user) return;
    const id = user.id;
    const response = (await API.updateUserById(`${id}`, formData)) as Response;
    if (response.ok) {
      const user = await response.json();
      setUser(user);
      navigate(`${Router.users}/${user.id}`);
    } else {
      const error = await response.json();
      alert(error.message);
    }
  };

  const handleSubmitForm = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("readingView", readingView);
    formData.append("autobiography", autobiography);
    if (file) formData.append("img", file);

    await handleUpdate(formData);
  };

  return (
    <Wrapper className="flex flex-col items-start">
      <PageWrapper title="Редактирование профиля" isTop={true}>
        <FileInput className="h-32 w-32" onChange={handleSetFile}></FileInput>
        <PrimaryInput
          attributes={{ placeholder: "Логин", initialValue: name }}
          onChange={(e) => setName(e?.target.value || "")}
        />
        <PrimaryInput
          attributes={{
            placeholder: "Email",
            initialValue: email,
            type: "email",
          }}
          onChange={(e) => setEmail(e?.target.value || "")}
        />
        <PrimaryTextarea
          attributes={{ placeholder: "О себе", initialValue: autobiography }}
          onChange={(e) => setAutobiography(e?.target.value || "")}
        />
        <FormButton onSubmit={handleSubmitForm}>Сохранить</FormButton>
      </PageWrapper>
      <PageWrapper title="Редактирование настроек для чтения" isTop={true}>
        <div className="flex flex-col">
          <p className="mb-2 text-lg">Разбить на страницы?</p>
          <div className="flex gap-x-2">
            <input
              type="radio"
              name="view"
              value="yes"
              id="yes"
              defaultChecked
              onClick={() => setReadingView("pages")}
            />
            <label htmlFor="yes">Да</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="radio"
              name="view"
              value="no"
              id="no"
              onClick={() => setReadingView("chapters")}
            />
            <label htmlFor="no">Нет</label>
          </div>
        </div>
      </PageWrapper>
    </Wrapper>
  );
};

export default AccountEdit;
