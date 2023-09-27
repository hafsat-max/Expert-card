import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { ICreateAddress } from "@/types";

export const builder = createBuilder({
  account: {},
  card: {
    company_address: {
      create: (data: ICreateAddress) =>
        API.post<ICreateAddress>("card/company_address/create/", data),
    },
  },
});
4;
