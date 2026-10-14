import type { AuthSession, Credentials, Registration } from "../types/auth";

const apiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, "") || "/api";
const apiKey = import.meta.env.VITE_API_KEY?.trim();

interface ApiErrorBody {
  message?: string;
  error?: string;
}

function isAuthSession(value: unknown): value is AuthSession {
  if (typeof value !== "object" || value === null) return false;
  const session = value as Record<string, unknown>;
  if (typeof session.token !== "string" || typeof session.user !== "object" || session.user === null) {
    return false;
  }
  const user = session.user as Record<string, unknown>;
  return (
    typeof user.id === "string" &&
    typeof user.name === "string" &&
    typeof user.email === "string"
  );
}

async function requestSession(
  path: string,
  payload: Credentials | Registration,
): Promise<AuthSession> {
  const response = await fetch(`${apiUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey ? { "X-API-Key": apiKey } : {}),
    },
    body: JSON.stringify(payload),
  });

  const body: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const errorBody = body as ApiErrorBody | null;
    throw new Error(
      errorBody?.message || errorBody?.error || `Request failed (${response.status}).`,
    );
  }
  if (!isAuthSession(body)) {
    throw new Error("The server returned an invalid session. Expected a token and user profile.");
  }
  return body;
}

export function signIn(credentials: Credentials): Promise<AuthSession> {
  return requestSession("/auth/login", credentials);
}

export function signUp(registration: Registration): Promise<AuthSession> {
  return requestSession("/auth/register", registration);
}
