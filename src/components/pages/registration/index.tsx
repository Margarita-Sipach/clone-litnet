import { RegistrationForm } from "../../modules/registration-form";
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
