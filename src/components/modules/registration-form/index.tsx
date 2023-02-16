import { ChangeEvent, useState } from "react";
import { PrimaryInput } from "../../ui/primary-input";
import { FileInput } from "../../ui/file-input";
import { Link } from "react-router-dom";
import { Router } from "../../router";
import FormButton from "../../ui/form-button";
import { useRegistration } from "../../../hooks";
export const RegistrationForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const { register, isLoading, isError } = useRegistration();

  const createFormData = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", login);
    if (file) formData.append("img", file);
    return formData;
  };

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const handleSubmitForm = () => {
    register(createFormData());
  };

  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <FileInput className="h-32 w-32" onChange={handleSetFile} />
      {isLoading && <p>Sending data...</p>}
      <PrimaryInput
        attributes={{ placeholder: "Логин", required: true }}
        onChange={(e) => setLogin(e?.target.value || "")}
      />
      <PrimaryInput
        attributes={{
          placeholder: "E-mail",
          required: true,
          type: "email",
          invalid: isError,
        }}
        onChange={(e) => setEmail(e?.target.value || "")}
      />
      <PrimaryInput
        attributes={{ placeholder: "Пароль", required: true, type: "password" }}
        onChange={(e) => setPassword(e?.target.value || "")}
      />
      <FormButton onSubmit={handleSubmitForm}>Зарегистрироваться</FormButton>
      <Link className="text-center hover:text-blue-500" to={Router.login}>
        Уже есть аккаунт? Войти!
      </Link>
    </form>
  );
};
