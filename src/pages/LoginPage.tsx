import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Brand } from "../components/Brand";
import { FormField } from "../components/FormField";
import { useAuth } from "../state/AuthContext";

const schema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(8, "Your password must be at least 8 characters."),
});
type FormValues = z.infer<typeof schema>;

export function LoginPage() {
  const { isAuthenticated, isLoading, signInWithCredentials } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });
  const destination = location.state?.from?.pathname ?? "/dashboard";

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const onSubmit = async (values: FormValues) => {
    setSubmitError("");
    try {
      await signInWithCredentials(values);
      navigate(destination, { replace: true });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We couldn't sign you in. Please try again.");
    }
  };

  return (
    <main className="auth-page">
      <Link className="auth-back" to="/">← <span>Back home</span></Link>
      <section className="auth-card">
        <Brand />
        <div className="auth-heading">
          <span className="eyebrow">WELCOME BACK</span>
          <h1>Good to see you.</h1>
          <p>Pick up right where you left off.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormField
            label="Email address"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <FormField
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="At least 8 characters"
            error={errors.password?.message}
            {...register("password")}
          />
          {submitError && <p className="form-error" role="alert">{submitError}</p>}
          <button className="button button-submit" disabled={isLoading} type="submit">
            {isLoading ? "Signing you in..." : "Sign in"} <span aria-hidden="true">→</span>
          </button>
        </form>
        <p className="auth-switch">New to Verde? <Link to="/signup">Create an account</Link></p>
      </section>
      <p className="auth-footer">A fresh start, whenever you need one.</p>
    </main>
  );
}
