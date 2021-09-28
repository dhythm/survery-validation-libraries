import { createSchema, _ } from "tiny-schema-validator";

const User = createSchema({
  metadata: _.record({
    date_created: _.number(),
    id: _.string(),
  }),
  profile: _.record({
    name: _.string({
      maxLength: [100, "too-long"],
      minLength: [2, "too-short"],
    }),
    age: _.number({
      max: [150, "too-old"],
      min: [13, "too-young"],
    }),
    email: _.string({
      pattern: [/^[^@]+@[^@]+\.[^@]+$/, "invalid-email"],
    }),
  }),
  payment_status: _.union(
    _.constant("pending"),
    _.constant("failed"),
    _.constant("success"),
    _.constant("canceled")
  ),
});
export type UserType = ReturnType<typeof User.produce>;

const UserGroup = createSchema({
  users: _.listof(User.embed()),
});

export type UserGroupType = ReturnType<typeof UserGroup.produce>;
