export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthSession {
  token: string;
  user: User;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface Registration extends Credentials {
  name: string;
}
