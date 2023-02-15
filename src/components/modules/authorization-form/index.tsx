import Button from "../../ui/button";
import { PrimaryInput } from "../../ui/primary-input";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useMutation } from "react-query";
import { authenticateUser } from "../../../api/data";

export const AuthorizationForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authMutation = useMutation({
    mutationFn: () => authenticateUser(email, password),
    mutationKey: "auth",
  });
  if (authMutation.isSuccess) {
    console.log(authMutation.data);
    localStorage.setItem("token", authMutation.data.token);
    login();
  }
  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <PrimaryInput
        value={email}
        onChange={(event) => setEmail(event!.target.value)}
        attributes={{ required: true, placeholder: "E-mail", type: "email" }}
      />
      <PrimaryInput
        value={password}
        onChange={(event) => setPassword(event!.target.value)}
        attributes={{ required: true, placeholder: "Пароль", type: "password" }}
      />
      <Button
        onClick={(event) => {
          event!.preventDefault();
          authMutation.mutate();
        }}
        className="text-base"
      >
        Войти
      </Button>
      {authMutation.isLoading ? (
        <p>Authenticating user...</p>
      ) : authMutation.isError ? (
        <p>Could not authenticate user</p>
      ) : authMutation.isSuccess ? (
        <p>User authenticated!</p>
      ) : (
        ""
      )}
    </form>
  );
};
