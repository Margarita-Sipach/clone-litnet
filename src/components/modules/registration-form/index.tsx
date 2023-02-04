import { PrimaryButton } from "../../ui/primary-button";
import { PrimaryInput } from "../../ui/primary-input";
import { ChangeEvent, useState } from "react";
import avatar from "../../../common/assets/images/avatar.png";

interface registrationProps {}

export const RegistrationForm = ({}: registrationProps) => {
  const [preview, setPreview] = useState(avatar);

  const onLoadFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const file = (e?.target as HTMLInputElement)?.files;
    if (file) {
      const objectUrl = URL.createObjectURL(file[0]);
      setPreview(objectUrl);
    }
  };

  return (
    <form action="" className="max-w-[500px] flex flex-col items-left gap-y-5 ">
      <img
        src={preview}
        alt="avatar"
        className="w-32 h-32 object-cover rounded border-zinc-200 border-2"
      />
      <PrimaryInput
        attributes={{ placeholder: "Аватарка", required: true, type: "file" }}
        onChange={onLoadFile}
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
