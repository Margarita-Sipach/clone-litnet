import { PrimaryButton } from "../../ui/primary-button";
import { PrimaryInput } from "../../ui/primary-input";
import { ChangeEvent, useState } from "react";
import avatar from "../../../common/assets/images/avatar.png";
import { FileInput } from "../../ui/file-input";

interface registrationProps {}

export const RegistrationForm = ({}: registrationProps) => {
  const [preview, setPreview] = useState(avatar);

  return (
    <form action="" className="max-w-[500px] flex flex-col items-left gap-y-5 ">
      <img
        src={preview}
        alt="avatar"
        className="w-32 h-32 object-cover rounded border-zinc-200 border-2"
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
      <PrimaryButton>Зарегистрироваться</PrimaryButton>
    </form>
  );
};
