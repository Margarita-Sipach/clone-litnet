import { ChangeEvent, useState } from "react";
import { useEditUserPage } from "../../../../hooks";
import { useUserContext } from "../../../context/userContext";
import { FileInput } from "../../../ui/file-input";
import FormButton from "../../../ui/form-button";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { PrimaryTextarea } from "../../../ui/primary-textarea";
import { Wrapper } from "../../../ui/wrapper";

const AccountEdit = () => {
  const { user } = useUserContext();
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [readingView, setReadingView] = useState(user?.readingView || "");
  const [autobiography, setAutobiography] = useState(user?.autobiography || "");
  const { edit, isError } = useEditUserPage();

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("readingView", readingView);
    formData.append("autobiography", autobiography);
    if (file) formData.append("img", file);
    return formData;
  };

  const handleSubmitForm = async () => {
    edit(createFormData());
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
            invalid: isError,
          }}
          onChange={(e) => setEmail(e?.target.value || "")}
        />
        <PrimaryTextarea
          attributes={{ placeholder: "О себе", initialValue: autobiography }}
          onChange={(e) => setAutobiography(e?.target.value || "")}
        />
        <div className="flex flex-col">
          <p className="mb-2 text-lg">Вид чтения: разбить на страницы?</p>
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
        <FormButton onSubmit={handleSubmitForm}>Сохранить</FormButton>
      </PageWrapper>
    </Wrapper>
  );
};

export default AccountEdit;
