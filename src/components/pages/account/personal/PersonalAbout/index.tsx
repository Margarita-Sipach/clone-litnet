import { useUserContext } from "../../../../context/userContext";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";

export const PersonalAbout = () => {
  const { selectedUser } = useUserContext();
  return (
    <PageWrapper title="Обо мне">
      {selectedUser?.autobiography || "Пользователь не указал информацию"}
    </PageWrapper>
  );
};
