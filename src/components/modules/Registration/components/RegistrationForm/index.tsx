import { ChangeEvent, useState } from "react";
import { Input } from "../../../../ui/Input";
import { FileInput } from "../../../../ui/FileInput";
import { Link } from "react-router-dom";
import { Router } from "../../../../router";
import useRegistration from "../../api/useRegistration";
import Button from "../../../../ui/Button";
const RegistrationForm = () => {
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
    <form
      action="src/components/modules/Registration/components/RegistrationForm/index"
      className="items-left flex max-w-[500px] flex-col gap-y-5 "
    >
      <FileInput className="h-32 w-32" onChange={handleSetFile} />
      {isLoading && <p>Sending data...</p>}
      <Input
        placeholder="Логин"
        required={true}
        onChange={(e) => setLogin(e?.target.value || "")}
      />
      <Input
        placeholder="E-mail"
        required={true}
        type="email"
        invalid={isError}
        onChange={(e) => setEmail(e?.target.value || "")}
      />
      <Input
        placeholder="Пароль"
        required={true}
        type="password"
        invalid={isError}
        onChange={(e) => setPassword(e?.target.value || "")}
      />
      <Button onClick={handleSubmitForm}>Зарегистрироваться</Button>
      <Link className="text-center hover:text-blue-500" to={Router.login}>
        Уже есть аккаунт? Войти!
      </Link>
    </form>
  );
};

export default RegistrationForm;
