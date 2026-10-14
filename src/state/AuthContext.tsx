import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { signIn, signUp } from "../lib/api";
import type { AuthSession, Credentials, Registration, User } from "../types/auth";

const STORAGE_KEY = "verde.session";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signInWithCredentials: (credentials: Credentials) => Promise<void>;
  signUpWithDetails: (registration: Registration) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readSession(): AuthSession | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    const parsed: unknown = JSON.parse(stored);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "token" in parsed &&
      typeof parsed.token === "string" &&
      "user" in parsed &&
      typeof parsed.user === "object" &&
      parsed.user !== null &&
      "id" in parsed.user &&
      typeof parsed.user.id === "string" &&
      "name" in parsed.user &&
      typeof parsed.user.name === "string" &&
      "email" in parsed.user &&
      typeof parsed.user.email === "string"
    ) {
      return parsed as AuthSession;
    }
  } catch (error) {
    console.warn("Could not read the saved session; signing out.", error);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(readSession);
  const [isLoading, setIsLoading] = useState(false);

  const persistSession = useCallback((nextSession: AuthSession) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));
    setSession(nextSession);
  }, []);

  const signInWithCredentials = useCallback(
    async (credentials: Credentials) => {
      setIsLoading(true);
      try {
        persistSession(await signIn(credentials));
      } finally {
        setIsLoading(false);
      }
    },
    [persistSession],
  );

  const signUpWithDetails = useCallback(
    async (registration: Registration) => {
      setIsLoading(true);
      try {
        persistSession(await signUp(registration));
      } finally {
        setIsLoading(false);
      }
    },
    [persistSession],
  );

  const signOut = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setSession(null);
  }, []);

  const value = useMemo(
    () => ({
      user: session?.user ?? null,
      isAuthenticated: session !== null,
      isLoading,
      signInWithCredentials,
      signUpWithDetails,
      signOut,
    }),
    [session, isLoading, signInWithCredentials, signUpWithDetails, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return context;
}
