import { AuthorizationForm } from "../../components/AuthorizationForm";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { Wrapper } from "../../../../ui/Wrapper";

export const AuthorizationPage = () => {
  return (
    <Wrapper>
      <PageWrapper title="Авторизация" isTop={true}>
        <AuthorizationForm />
      </PageWrapper>
    </Wrapper>
  );
};
