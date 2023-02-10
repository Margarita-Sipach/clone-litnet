import { PrimaryButton } from "../../ui/primary-button";
import { PrimaryInput } from "../../ui/primary-input";
import { ChangeEvent, useState } from "react";

import { FileInput } from "../../ui/file-input";

interface registrationProps {}

export const RegistrationForm = ({}: registrationProps) => {
  // const [preview, setPreview] = useState(avatar);

  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <FileInput className="h-32 w-32" />
      <PrimaryInput attributes={{ placeholder: "Логин", required: true }} />
      <PrimaryInput
        attributes={{ placeholder: "E-mail", required: true, type: "email" }}
      />
      <PrimaryInput
        attributes={{ placeholder: "Пароль", required: true, type: "password" }}
      />
      <PrimaryButton>Зарегистрироваться</PrimaryButton>
    </form>
  );
};
