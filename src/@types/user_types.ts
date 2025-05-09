interface users {
  id: string;
  user_name: string;
  password: string;
  age: string;
  birth: string;
}

interface userForm {
  name: string;
  lastName: string;
  birth: string;
  email: string;
  password: string;
}

interface signUpUser extends userForm {
  id: string;
}

export type { users, userForm, signUpUser };
