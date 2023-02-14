import { PrimaryInput } from "../../ui/primary-input";
import { FileInput } from "../../ui/file-input";
import Button from "../../ui/button";
import { useState, useContext } from "react";
import { useMutation } from "react-query";
import { registerUser } from "../../../api/data";
import AuthContext from "../../context/AuthContext";

export const RegistrationForm = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registrationMutation = useMutation({
    mutationFn: () => registerUser(name, email, password),
    mutationKey: "registration",
  });
  if (registrationMutation.isSuccess) {
    console.log(registrationMutation.data);
    localStorage.setItem("token", registrationMutation.data.token);
    login();
  }
  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <FileInput className="h-32 w-32" />
      <PrimaryInput
        value={name}
        onChange={(event) => setName(event!.target.value)}
        attributes={{ placeholder: "Имя", required: true }}
      />
      <PrimaryInput
        value={email}
        onChange={(event) => setEmail(event!.target.value)}
        attributes={{ placeholder: "E-mail", required: true, type: "email" }}
      />
      <PrimaryInput
        value={password}
        onChange={(event) => setPassword(event!.target.value)}
        attributes={{ placeholder: "Пароль", required: true, type: "password" }}
      />
      <Button
        onClick={(event) => {
          event?.preventDefault();
          registrationMutation.mutate();
        }}
        className="text-base"
      >
        Зарегистрироваться
      </Button>
      {registrationMutation.isLoading ? (
        <p>Registering user...</p>
      ) : registrationMutation.isError ? (
        <p>Could not register user</p>
      ) : registrationMutation.isSuccess ? (
        <p>User registered!</p>
      ) : (
        ""
      )}
    </form>
  );
};
