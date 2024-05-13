import Heading from "@/components/Heading";
import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

export const metadata = {
    title: 'Sign Up',
  };

export default function SignUpPage() {
    return (
        <>
        <Heading>Sign Up</Heading>
        <SignUpForm />
        <div className="py-3">
            Already have an account?{" "}
            <Link className="text-orange-800 hover:underline" href="/sign-in"> Sign in</Link> 
            {" "}
            instead.
        </div>
        </>
      );
}