import { PersonalHeader } from "../../modules/personal-header";
import { Wrapper } from "../../ui/wrapper";
import { Outlet } from "react-router-dom";

export const PersonalPage = () => {
  return (
    <Wrapper>
      <PersonalHeader />
      <Outlet />
    </Wrapper>
  );
};
