import Heading from "@/components/Heading";
import SignInForm from "@/components/SignInForm";
import Link from "next/link";

export const metadata = {
    title: "Sign In",
    
}

export default function SignIn() {
  return (
    <>
    <Heading>Sign In</Heading>
    <SignInForm />
    <div className="py-3">
            Don&apos;t have an account?{" "}
            <Link className="text-orange-800 hover:underline" href="/sign-up"> Sign Up</Link> 
            {" "}
            first.
        </div>
    </>
  );
  
}