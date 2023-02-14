import { Suspense } from "react";
import { PersonalHeader } from "../../modules/personal-header";
import { Wrapper } from "../../ui/wrapper";
import {
  Await,
  defer,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { API } from "../../../api/api";
import { AccountType } from "../../../types/types";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) throw new Error("User id not found");
  return defer({
    response: await (await API.getUserById(id)).json(),
  });
};

export const PersonalPage = () => {
  const { response } = useLoaderData() as any;
  return (
    <Wrapper>
      <Suspense fallback={<h3>Wait...</h3>}>
        <Await resolve={response}>
          {(user: AccountType) => <PersonalHeader account={user} />}
        </Await>
      </Suspense>
      <Outlet />
    </Wrapper>
  );
};
