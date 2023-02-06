import { PrimaryButton } from "../../ui/primary-button";
import { PrimaryInput } from "../../ui/primary-input";

interface authorizationProps {}

export const AuthorizationForm = ({}: authorizationProps) => {
  return (
    <form action="" className="max-w-[500px] flex flex-col items-left gap-y-5 ">
      <PrimaryInput
        attributes={{ required: true, placeholder: "E-mail", type: "email" }}
      />
      <PrimaryInput
        attributes={{ required: true, placeholder: "Пароль", type: "password" }}
      />
      <PrimaryButton>Войти</PrimaryButton>
    </form>
  );
};
