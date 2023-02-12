import { AuthorizationForm } from "../../modules/authorization-form";
import { PageWrapper } from "../../ui/page-wrapper";
import { Wrapper } from "../../ui/wrapper";

export const AuthorizationPage = () => {
  return (
    <Wrapper>
      <PageWrapper title="Авторизация" isTop={true}>
        <AuthorizationForm />
      </PageWrapper>
    </Wrapper>
  );
};
