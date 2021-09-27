import { z } from "zod";

const User = z.object({
  username: z.string(),
});

export type UserType = z.infer<typeof User>;
