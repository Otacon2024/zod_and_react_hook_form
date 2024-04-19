import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
});

// we can make it strict so it will throw an error if we try to parse an object with additional fields
const UserSchema02 = z
  .object({
    username: z.string(),
  })
  .strict();

// We can use passthrough to allow additional fields in the input data that are not explicitly defined in the schema.
const UserSchema03 = z
  .object({
    username: z.string(),
  })
  .passthrough();

// type User = z.infer<typeof UserSchema>;

const user = {
  username: "Wds",
  name: "Kyle",
};

console.log(UserSchema.partial().parse(user));
console.log(UserSchema02.partial().parse(user));
console.log(UserSchema03.partial().parse(user));
