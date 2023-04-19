export type Signup = {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  degree: string;
  birthdate: string;
  interest: Array<string>;
};

export type Login = {
  email: string;
  password: string;
};
