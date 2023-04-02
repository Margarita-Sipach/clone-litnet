import { AuthorizationForm } from "../../modules/forms/AuthorizationForm";
import { PageWrapper } from "../../ui/wrappers/PageWrapper";
import { Wrapper } from "../../ui/wrappers/Wrapper";

export const AuthorizationPage = () => {
  return (
    <Wrapper>
      <PageWrapper title="Авторизация" isTop={true}>
        <AuthorizationForm />
      </PageWrapper>
    </Wrapper>
  );
};
