interface MyUser {
  name: string;
  id: string;
  email?: string;
}

interface MyUserOptionals {
  name?: string;
  id?: string;
  email?: string;
  phone?: string;
}

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Miskiat",
      id: "girlllll",
      email: "miskybadmus@gmail.com",
    },
    { email: "miskybadmus@gmail.com" }
  )
);

///Required
type RequiredMyUser = Required<MyUser>;

///Pick
type JustEmailAndName = Pick<MyUser, "email" | "name">;

///Record
const mapById = (users: MyUser[]): Record<string, MyUser> {
  return users.reduce((a, v ) => {
    return {
      ...a,[v.id]: v,
    }
  }, {});
}
console.log(mapById([
  {
    id: "girlllll",
    name: "Miskiat"
  },
  { id: "girl",
   name: "Misky"

  }
]))
