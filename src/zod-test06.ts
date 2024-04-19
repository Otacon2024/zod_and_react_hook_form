import { z } from "zod";

const UserSchema = z
  .object({
    id: z.union([z.string(), z.number()]), // Union allows defining multiple possible types for a field.
    id2: z.string().or(z.number()), // The or() method is a shortcut for union().
    username: z.string(),
    friends: z.array(z.string()).nonempty().min(1).max(10),
    coords: z.tuple([z.number(), z.number(), z.number()]), // A tuple can be considered as a stricter and safer version of an array, with a fixed number of items and predefined types for each position.
  })
  .strict(); // Strict mode indicates that only the fields defined in the schema are allowed.

type User = z.infer<typeof UserSchema>;

const user: User = {
  id: 1,
  id2: "test",

  username: "Wds",
  friends: ["Kyle", "Julie"],
  coords: [1, 2, 3],
};

console.log(UserSchema.safeParse(user));
