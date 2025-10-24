import { LoginForm } from "@/components/auth/login-form";
import { AuthRoute } from "@/components/auth/auth-route";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - TrackiT",
  description: "Login to your TrackiT account",
};

export default function LoginPage() {
  return (
    <AuthRoute>
      <LoginForm />
    </AuthRoute>
  );
}
