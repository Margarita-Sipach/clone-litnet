import { RegistrationForm } from "../../modules/forms/RegistrationForm";
import { PageWrapper } from "../../ui/wrappers/PageWrapper";
import { Wrapper } from "../../ui/wrappers/Wrapper";

export const RegistrationPage = () => {
  return (
    <Wrapper>
      <PageWrapper title="Регистрация" isTop={true}>
        <RegistrationForm />
      </PageWrapper>
    </Wrapper>
  );
};
