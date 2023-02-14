import { useUserContext } from "../../context/userContext";
import { PageWrapper } from "../../ui/page-wrapper";

export const PersonalAbout = () => {
  const { selectedUser } = useUserContext();
  return (
    <PageWrapper title="Обо мне">
      {selectedUser?.autobiography || "Пользователь не указал информацию"}
    </PageWrapper>
  );
};
