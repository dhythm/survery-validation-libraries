import { FC } from "react";
import { UserType as TsvUserType } from "../tiny-schema-validator/schemas";
import { UserType as zodUserType } from "../zod/schemas";

type Props = {
  tsvUser: TsvUserType;
  zodUser: zodUserType;
};
export const User: FC<Props> = ({ tsvUser, zodUser }) => {
  console.log(tsvUser.profile);
  console.log(zodUser.username);

  return <></>;
};
