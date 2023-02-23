import PersonalHeader from "../../components/PersonalHeader";
import { Wrapper } from "../../../../ui/Wrapper";
import { Outlet, useParams } from "react-router-dom";
import { useFetchUser } from "../../../../../hooks";

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
