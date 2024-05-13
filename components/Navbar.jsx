
import NavLink from "./NavLink";
import { getUserFromSessionToken } from "@/lib/auth";
import SignOutButton from "./SignOutButton";

export default async function Navbar() {
  const user = await getUserFromSessionToken();
  console.log("[Navbar] user:", user);
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="font-orbitron  font-bold">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
        {user ? (
          <SignOutButton />
        ) : (
          <li>
            <NavLink href="/sign-in">Sign In</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
