import React, { useState } from "react";
import { checkUserPassword } from "../../../../../api/service";
import { useEditPassword } from "../../../../../hooks";
import { useUserContext } from "../../../../context/userContext";
import { Button } from "../../../../ui/Button";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { Input } from "../../../../ui/Input";
import { Wrapper } from "../../../../ui/Wrapper";
import { Spinner } from "../../../../ui/Spinner";

export const AccountEditPassword = () => {
  const { user } = useUserContext();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { editPassword, isLoading } = useEditPassword();

  const createFormData = () => {
    if (!user) return;
    const formData = new FormData();
    formData.append("password", password);
    formData.append("email", user.email);
    return formData;
  };

  const handleSubmitForm = async () => {
    await checkUserPassword(createFormData());
    editPassword(
      JSON.stringify({
        id: user?.id,
        password: newPassword,
      })
    );
  };

  return (
    <Wrapper className="flex flex-col items-start">
      <PageWrapper title="Изменение пароля" isTop={true}>
        <Input
          value={password}
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e?.target.value || "")}
        />
        <Input
          placeholder="Новый пароль"
          value={newPassword}
          type="password"
          onChange={(e) => setNewPassword(e?.target.value || "")}
        />
        {isLoading ? (
          <Spinner className="flex w-full justify-center" />
        ) : (
          <Button onClick={handleSubmitForm}>Сохранить</Button>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
