import { signOutAction } from "@/app/(auth)/sign-in/actions";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button type="submit" className="text-orange-800 hover:underline">
        Sign Out
      </button>
    </form>
  );
}
