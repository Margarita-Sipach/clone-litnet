import React, { useState } from "react";
import { checkUserPassword } from "../../../../api/service";
import { useEditPassword } from "../../../../hooks";
import { useUserContext } from "../../../context/userContext";
import Button from "../../../ui/button";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { Wrapper } from "../../../ui/wrapper";

export const AccountEditPassword = () => {
  const { user } = useUserContext();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { editPassword } = useEditPassword();

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
        <PrimaryInput
          value={password}
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e?.target.value || "")}
        />
        <PrimaryInput
          placeholder="Новый пароль"
          value={newPassword}
          type="password"
          onChange={(e) => setNewPassword(e?.target.value || "")}
        />
        <Button onClick={handleSubmitForm}>Сохранить</Button>
      </PageWrapper>
    </Wrapper>
  );
};
