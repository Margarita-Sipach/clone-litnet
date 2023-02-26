import { ChangeEvent, useState } from "react";
import { useEditUserPage } from "../../../../../hooks";
import { useUserContext } from "../../../../context/userContext";
import Button from "../../../../ui/Button";
import { FileInput } from "../../../../ui/FileInput";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { Input } from "../../../../ui/Input";
import { Textarea } from "../../../../ui/Textarea";
import { Wrapper } from "../../../../ui/Wrapper";

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
    <PageWrapper title="Редактирование профиля">
      <FileInput className="h-32 w-32" onChange={handleSetFile}></FileInput>
      <Input
        placeholder="Логин"
        value={name}
        onChange={(e) => setName(e?.target.value || "")}
      />
      <Input
        invalid={isError}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e?.target.value || "")}
      />
      <Textarea
        placeholder="О себе"
        value={autobiography}
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
      <Button onClick={handleSubmitForm}>Сохранить</Button>
    </PageWrapper>
  );
};

export default AccountEdit;
