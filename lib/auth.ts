import { User, AuthSession } from "./types";

const STORAGE_KEY = "ticketapp_session";

interface MockUser extends User {
  password: string;
}

// Simulated user database
const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password123",
  },
];

export const auth = {
  login: async (email: string, password: string): Promise<AuthSession> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = MOCK_USERS.find((u) => u.email === email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    if (user.password !== password) {
      throw new Error("Invalid credentials");
    }

    const session: AuthSession = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token: `mock-token-${Date.now()}`,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return session;
  },

  signup: async (
    name: string,
    email: string,
    password: string
  ): Promise<AuthSession> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    if (MOCK_USERS.some((u) => u.email === email)) {
      throw new Error("User already exists");
    }

    const newUser: MockUser = {
      id: (MOCK_USERS.length + 1).toString(),
      name,
      email,
      password,
    };

    MOCK_USERS.push(newUser);

    const session: AuthSession = {
      user: newUser,
      token: `mock-token-${Date.now()}`,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return session;
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
  },

  getSession: (): AuthSession | null => {
    const session = localStorage.getItem(STORAGE_KEY);
    return session ? JSON.parse(session) : null;
  },

  checkAuth: () => {
    const session = localStorage.getItem(STORAGE_KEY);
    return session !== null;
  },
};
