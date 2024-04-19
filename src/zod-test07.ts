import { z } from "zod";

const UserMap = z.record(z.string(), z.number()); // this will create a schema for a map with string keys and number values
const UserMapTest2 = z.map(z.string(), z.number()); //

const user = {
  sfdsfzr: 2,
  efnef: 12,
};

const userTest2 = new Map([
  ["id-john", { name: "John" }],
  ["id-kyle", { name: "Kyle" }],
]); // Using new Map(...) is about choosing the right data structure for your needs, especially when you need more control over the keys and their order than what plain objects can provide.

console.log(UserMap.safeParse(user));
console.log(UserMapTest2.safeParse(userTest2));
