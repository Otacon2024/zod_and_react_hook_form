import { z } from "zod";

const Hobbies = ["Kayaking", "Boxing", "Hicking"] as const;

const UserSchema01 = z.object({
  username: z.string(),
  age: z.number().default(Math.random),
  birthday: z.date(),
  isProgrammer: z.boolean(),
  hobby: z.enum(Hobbies),
});

const UserSchema02 = z
  .object({
    username: z.string(),
    age: z.number().default(Math.random),
    birthday: z.date(),
    isProgrammer: z.boolean(),
    hobby: z.enum(Hobbies),
  })
  .partial(); // this will make all fields optional

const UserSchema03 = z
  .object({
    username: z.string(),
    age: z.number().default(Math.random),
    birthday: z.date(),
    isProgrammer: z.boolean(),
    hobby: z.enum(Hobbies),
  })
  .pick({ username: true }); // this will make only the 'username' field required

const UserSchema04 = z
  .object({
    username: z.string(),
    age: z.number().default(Math.random),
    birthday: z.date(),
    isProgrammer: z.boolean(),
    hobby: z.enum(Hobbies),
  })
  .omit({ age: true }); // this will removes the 'age' field

const UserSchema05 = z
  .object({
    username: z.string(),
    age: z.number().default(Math.random),
    birthday: z.date(),
    isProgrammer: z.boolean(),
    hobby: z.enum(Hobbies),
  })
  .merge(z.object({ name: z.string() })); // this will add the 'name' field

// type User = z.infer<typeof UserSchema01>;

const someUser = {
  username: "Wds",
};

console.log(UserSchema01.partial().parse(someUser));
console.log(UserSchema02.parse(someUser));
console.log(UserSchema03.parse(someUser));
console.log(UserSchema04.parse(someUser));
console.log(UserSchema05.parse(someUser));
