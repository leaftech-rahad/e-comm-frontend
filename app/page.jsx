import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../utils/getQueryClient";
import CustomerList from "./CustomerList";
import { getCustomers } from "../api/index.js";
import Card from "../components/Card";

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["getCustomers"], () => getCustomers());
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Card>
        <CustomerList />
      </Card>
    </Hydrate>
  );
}
