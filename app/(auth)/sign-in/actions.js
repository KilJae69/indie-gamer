"use server";

import { deleteSessionCookie, setSessionCookie } from "@/lib/auth";
import { authenticateUser } from "@/lib/users";
import { redirect } from "next/navigation";


export async function signInAction(formData) {
  console.log("formData", formData);
  const email = formData.get("email");
  const password = formData.get("password");
  const user = await authenticateUser(email, password);

  if (!user) return { isError: true, message: "Invalid email or password" };

 await setSessionCookie(user)
  redirect("/")
 
}



export async function signOutAction() {
  await deleteSessionCookie();
  redirect("/");
}
