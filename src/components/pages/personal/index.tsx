import { Suspense } from "react";
import { PersonalHeader } from "../../modules/personal-header";
import { Wrapper } from "../../ui/wrapper";
import {
  Await,
  defer,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { API } from "../../../api/api";
import { AccountType } from "../../../types/types";
import { getUserById } from "../../../api/service";
import { useQuery } from "@tanstack/react-query";

export const userQuery = (id: string) => ({
  queryKey: ["users", id],
  queryFn: async () => getUserById(id),
});

export const loader =
  (queryClient: any) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;
    if (!id) throw new Error("User id is not found");
    const query = userQuery(id);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export const PersonalPage = () => {
  // const { response } = useLoaderData() as any;
  const response = useLoaderData() as any;
  const { id } = useParams();
  const { data } = useQuery({
    ...userQuery(id as string),
    initialData: response,
  });
  return (
    <Wrapper>
      <Suspense fallback={<h3>Wait...</h3>}>
        <Await resolve={data}>
          {(user: AccountType) => <PersonalHeader account={user} />}
        </Await>
      </Suspense>
      <Outlet />
    </Wrapper>
  );
};
