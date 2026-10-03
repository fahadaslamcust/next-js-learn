"use server";

type Result<T, E = string> =
  | { success: true; data: T }
  | { success: false; error: E };

interface RegisterData {
  id: string;
  username: string;
  email: string;
}

export async function registerUser(
  formData: FormData
): Promise<Result<RegisterData>> {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;

  if (!username || username.length < 3) {
    return {
      success: false,
      error: "Username must be at least 3 characters long",
    };
  }

  if (username.length > 20) {
    return {
      success: false,
      error: "Username must be at most 20 characters long",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      error: "Please provide a valid email address",
    };
  }

  const user: RegisterData = {
    id: crypto.randomUUID(),
    username,
    email,
  };

  return {
    success: true,
    data: user,
  };
}