import { Wrapper } from "../../../../ui/wrappers/Wrapper";
import { Outlet, useParams } from "react-router-dom";
import PersonalHeader from "../../../../modules/personal/PersonalHeader";
import { useFetchUser } from "../../../../../hooks/user/useFetchUser";

export const PersonalPage = () => {
  const { id } = useParams();
  const { account } = useFetchUser(id as string);
  return account ? (
    <Wrapper>
      <PersonalHeader account={account} />
      <Outlet />
    </Wrapper>
  ) : (
    <h1>Loading</h1>
  );
};
