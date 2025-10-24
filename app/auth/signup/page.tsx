import { SignUpForm } from "@/components/auth/signup-form";
import { AuthRoute } from "@/components/auth/auth-route";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - TrackiT",
  description: "Create your TrackiT account",
};

export default function SignUpPage() {
  return (
    <AuthRoute>
      <SignUpForm />
    </AuthRoute>
  );
}
