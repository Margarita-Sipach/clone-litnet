import { PrimaryInput } from "../../ui/primary-input";
import { useState } from "react";
import avatar from "../../../common/assets/images/avatar.png";
import { FileInput } from "../../ui/file-input";
import Button from "../../ui/button";

interface registrationProps {}

export const RegistrationForm = ({}: registrationProps) => {
  const [preview, setPreview] = useState(avatar);

  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <img
        src={preview}
        alt="avatar"
        className="h-32 w-32 rounded border-2 border-zinc-200 object-cover"
      />
      <FileInput
        attributes={{ placeholder: "Аватарка", required: true, type: "file" }}
        onChangeImage={setPreview}
      />
      <PrimaryInput attributes={{ placeholder: "Логин", required: true }} />
      <PrimaryInput
        attributes={{ placeholder: "E-mail", required: true, type: "email" }}
      />
      <PrimaryInput
        attributes={{ placeholder: "Пароль", required: true, type: "password" }}
      />
      <Button className="text-base">Зарегистрироваться</Button>
    </form>
  );
};
