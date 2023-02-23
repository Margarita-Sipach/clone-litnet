import RegistrationForm from "../../components/RegistrationForm";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { Wrapper } from "../../../../ui/Wrapper";

export const RegistrationPage = () => {
  return (
    <Wrapper>
      <PageWrapper title="Регистрация" isTop={true}>
        <RegistrationForm />
      </PageWrapper>
    </Wrapper>
  );
};
