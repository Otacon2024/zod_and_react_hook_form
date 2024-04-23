import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
});

// type User = {
//   username: string;
// };

type User = z.infer<typeof UserSchema>;

const correctUser: User = { username: "John Doe" };
const wrongUser: User = { username: 1 }; // Should throw an error because username is not a strings

// console.log(UserSchema.parse(correctUser));
// console.log(UserSchema.parse(wrongUser));

// try {
//   console.log(UserSchema.parse(correctUser));  // Should work
//   console.log(UserSchema.parse(wrongUser));    // Should throw an error
// } catch (error) {
//   console.error("Validation failed:", error); // Should print the error and let the program continue
// }

// 1. this solution from WDS, works fine:
console.log(UserSchema.safeParse(correctUser)); // Should work
console.log(UserSchema.safeParse(wrongUser)); // Should return an error object and let the program continue

// 2. this solution works too + provide more readability and "more flexibility to handle it in various ways, making the code easier to maintain and extend. For example, you might want to add additional logic that only runs when parsing is successful."
const result = UserSchema.safeParse(correctUser);
if (result.success) {
  console.log("Parsed data:", result.data);
} else {
  console.error("Validation failed:", result.error);
}
