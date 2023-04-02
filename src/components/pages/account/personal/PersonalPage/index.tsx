import { Wrapper } from "../../../../ui/wrappers/Wrapper";
import { Outlet, useParams } from "react-router-dom";
import { useFetchUser } from "../../../../../hooks";
import PersonalHeader from "../../../../modules/personal/PersonalHeader";

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
