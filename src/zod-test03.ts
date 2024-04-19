import { z } from 'zod';

enum Hobbies {
  Programming,
  WeightLifting,
  Guitar
}

enum SecondHobbies {
  Singing = 'Singing',
  Dancing = 'Dancing',
  Reading = 'Reading'
}

const thirdHobbies = ["Kayaking", "Boxing", "Hicking"] as const;

const UserSchema = z.object({
  username: z.string(),
  age: z.number().default(Math.random),
  birthday: z.date(),
  isProgrammer: z.boolean(),
  hobby: z.nativeEnum(Hobbies),
  secondHobby: z.nativeEnum(SecondHobbies),
  thirdHobbies: z.enum(thirdHobbies)
});

type User = z.infer<typeof UserSchema>;

const correctUser = {
  username: 'Wds',
  birthday: new Date(),
  isProgrammer: true,
  hobby: Hobbies.Programming,
  secondHobby: SecondHobbies.Singing 
};

const anotherCorrectUser = {
  username: 'Wds',
};


console.log(UserSchema.shape.age) // will print 'number'
console.log(UserSchema.shape.username) // will print 'string'

console.log(UserSchema.partial().parse(correctUser)) // will print '{ username: 'Wds', birthday: 2021-08-25T14:00:00.000Z, isProgrammer: true, hobby: 0, secondHobby: 'Singing' }'

console.log(UserSchema.parse(anotherCorrectUser)) // will print '{ username: 'Wds' }
console.log(UserSchema.safeParse(anotherCorrectUser)) // will print '{ success: true, data: { username: 'Wds' }
