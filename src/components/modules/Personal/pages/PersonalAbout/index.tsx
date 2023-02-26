import { useUserContext } from "../../../../context/userContext";
import { PageWrapper } from "../../../../ui/PageWrapper";

const PersonalAbout = () => {
  const { selectedUser } = useUserContext();
  return (
    <PageWrapper title="Обо мне">
      {selectedUser?.autobiography || "Пользователь не указал информацию"}
    </PageWrapper>
  );
};

export default PersonalAbout;
