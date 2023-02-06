import { AuthorizationForm } from "../../modules/authorization-form";
import { RegistrationForm } from "../../modules/registration-form";
import { BlogElement } from "../../ui/blog-element";
import { PageWrapper } from "../../ui/page-wrapper";
import { Wrapper } from "../../ui/wrapper";

export const RegistrationPage = () => {
  return (
    <Wrapper>
      <PageWrapper title="Регистрация" isTop={true}>
        <RegistrationForm />
      </PageWrapper>
    </Wrapper>
  );
};
