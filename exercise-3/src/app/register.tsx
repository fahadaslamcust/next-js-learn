"use client";
import { registerUser } from "./actions";

export default function RegisterForm() {
  async function handleSubmit(formData: FormData) {
    const result = await registerUser(formData);

    if (result.success) {
      console.log("User created:", result.data);
      // redirect or show success message
    } else {
      console.error(result.error);
      // show error to the user
    }
  }

  return (
    <form action={handleSubmit}>
      <input name="username" placeholder="Username" />
      <input name="email" type="email" placeholder="Email" />
      <button type="submit">Register</button>
    </form>
  );
}