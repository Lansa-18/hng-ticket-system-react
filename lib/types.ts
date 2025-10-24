export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthSession {
  user: User | null;
  token: string | null;
}
