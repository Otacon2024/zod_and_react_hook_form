import { z } from "zod";

const brandEmail = z
  .string()
  .email()
  .refine((val) => val.endsWith("@webdevsimplified.com"), {
    message: "Email must end with @webdevsimplified.com",
  });

const email = "test@webdevsimplified.com";

console.log(brandEmail.safeParse(email)); // it will return the email if it is valid (test@webdevsimplified.com), otherwise it will return an error object
