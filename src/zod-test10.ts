import { z } from "zod";

// Install the validation library , using npm i zod-validation-error
import { fromZodError } from "zod-validation-error";

const UserSchema = z
  .object({
    username: z.string(), // The username field is required and must be a string otherway it will return you a complex error object
    username2: z.string().min(3, "min lenght mus be 3"),
    coords: z.tuple([z.string(), z.date()]).rest(z.number()), // The .rest method is used to specify that after the defined elements of the tuple, any number of additional elements can follow, as long as they match the type specified in .rest(). Here, .rest(z.number()) means that after the first string and the second date in the tuple, any subsequent elements must be numbers.
  })
  .strict();

// type User = z.infer<typeof UserSchema>;

const user = {
  username: "Wds",
  coords: ["test", new Date(), 1, 4, 2, 9, 3],
};

// console.log(UserSchema.safeParse(user));
const results = UserSchema.safeParse(user);
if (!results.success) {
  console.log(fromZodError(results.error)); // it will return the error object in a simple format
}
