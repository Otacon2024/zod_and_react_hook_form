import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(3).max(20),
  age: z.number().gt(0).optional(), // this field expects a number greater than 0 and is optional
  ageOfBrain : z.number().gt(0).default(Math.random).optional(), // this field expects a number greater than 0 and if not present, it will be set by default to a random number
  birthday: z.date().optional(),
  isProgrammer: z.boolean().nullable().optional(), // this field expects a boolean value, can be 'null' and is optional
  isFunny : z.boolean().nullish().optional(), // this field expects a boolean value, can be 'null' or 'undefined' and is optional
  isSad : z.boolean().default(false).optional(), // this field expects a boolean value, if not present, it will be set by default to 'false'
  isPolite : z.literal(true).optional(), // this field expects a boolean value and can only be 'true'
  test01: z.undefined().optional(), // this field is optional and can only be 'undefined'
  test02: z.null().optional(), // this field is optional and can only be 'null'
  test03: z.void().optional(), // this field is optional and can only be 'undefined' or 'null'
  test04: z.any().optional(), // this field is optional and can be any type
  test05: z.unknown().optional(), // this field is optional and can be any type
  test06: z.never().optional(), // this field is optional and can never be present
  hobby: z.enum(["Programming", "Weight Lifting", "Guitar"]).optional() // this field expects a value from the enum list and is optional
});

type User = z.infer<typeof UserSchema>;


const correctUser: User = {
  username: 'Wds',
  hobby: 'Programming',
};

const anotherCorrectUser: User = {
    username: 'Wds',
    age: 20,
    birthday: new Date(),
    isProgrammer: null,
    isPolite: true,
    hobby: 'Programming',
};

const wrongUser: User = {
    username: 'Wds',
    age: 20,
    birthday: new Date(),
    isProgrammer: null,
    isPolite: true,
    hobby: 'Progrmmming'
  };

console.log(UserSchema.safeParse(correctUser).success); // will print 'true' because the 'age', 'birthday' and 'isProgrammer',... fields are optional and isSad is set by default to 'false'
console.log(UserSchema.safeParse(anotherCorrectUser).success); // will print 'true"
console.log(UserSchema.safeParse(wrongUser).success); // will print 'false'
