import { z } from "zod";

const PromiseSchema = z.promise(z.string());

const p = Promise.resolve("test");

console.log(PromiseSchema.parse(p));
