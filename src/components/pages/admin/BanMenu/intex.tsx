import { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "../../../ui/Textarea";
import { Spinner } from "../../../ui/Spinner";
import { Button } from "../../../ui/buttons/Button";
import { ErrorInputMessages, InputNames } from "../../../../utils/formUtils";

interface BanMenuProps {
  onClick: SubmitHandler<FieldValues>;
  isLoading: boolean;
}

export const BanMenu: FC<BanMenuProps> = ({ onClick, isLoading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  return (
    <div>
      <h1 className="mb-5 text-xl">Укажите причину бана пользователя</h1>
      <div className="flex flex-col">
        <Textarea
          placeholder="Причина бана"
          name={InputNames.BAN_REASON}
          properties={{
            ...register(InputNames.BAN_REASON, {
              required: ErrorInputMessages.REQUIRED,
              maxLength: {
                value: 1000,
                message: ErrorInputMessages.TEXT_LENGTH,
              },
            }),
          }}
          errors={errors}
        />
        {isLoading ? (
          <Spinner className="flex w-full justify-center" />
        ) : (
          <Button className="mt-5" onClick={handleSubmit(onClick)}>
            Сохранить
          </Button>
        )}
      </div>
    </div>
  );
};
