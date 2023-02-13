import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../api/api";
// import { API } from "../../../../api/api";
import { useUserContext } from "../../../context/userContext";
import { Router } from "../../../router";
import { LocalStorage } from "../../../storage";
import FormButton from "../../../ui/form-button";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { Wrapper } from "../../../ui/wrapper";

export const AccountEditPassword = () => {
  const { user, setUser } = useUserContext();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleUpdatePassword = async () => {
    const body = JSON.stringify({
      id: user?.id,
      password: newPassword,
    });
    const response = (await API.updateUserPassword(body)) as Response;
    if (response.ok) {
      const { token, user } = await response.json();
      setUser(user);
      LocalStorage.setUserToken(token);
      navigate(`${Router.users}/${user.id}`);
    } else {
      console.log(response);
      throw new Error("It's impossible to change password");
    }
  };

  const handleCheckPassword = async () => {
    if (!user) throw new Error("User not found");
    const formData = new FormData();
    formData.append("password", password);
    formData.append("email", user.email);
    const response = (await API.loginUser(formData)) as Response;
    if (!response.ok) throw new Error("Password is incorrect");
  };

  const handleSubmitForm = async () => {
    try {
      await handleCheckPassword();
      await handleUpdatePassword();
    } catch (error: any) {
      alert(error.message);
      return;
    }
  };

  return (
    <Wrapper className="flex flex-col items-start">
      <PageWrapper title="Изменение пароля" isTop={true}>
        <PrimaryInput
          attributes={{
            placeholder: "Пароль",
            initialValue: password,
            type: "password",
          }}
          onChange={(e) => setPassword(e?.target.value || "")}
        />
        <PrimaryInput
          attributes={{
            placeholder: "Новый пароль",
            initialValue: newPassword,
            type: "password",
          }}
          onChange={(e) => setNewPassword(e?.target.value || "")}
        />
        <FormButton onSubmit={handleSubmitForm}>Сохранить</FormButton>
      </PageWrapper>
    </Wrapper>
  );
};
