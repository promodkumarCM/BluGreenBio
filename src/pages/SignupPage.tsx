import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Brand } from "../components/Brand";
import { FormField } from "../components/FormField";
import { useAuth } from "../state/AuthContext";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(80, "Name must be 80 characters or fewer."),
  email: z.email("Enter a valid email address."),
  password: z.string().min(8, "Use at least 8 characters.").max(128, "Password must be 128 characters or fewer."),
  confirmPassword: z.string(),
}).refine((values) => values.password === values.confirmPassword, {
  message: "Your passwords don't match.",
  path: ["confirmPassword"],
});
type FormValues = z.infer<typeof schema>;

export function SignupPage() {
  const { isAuthenticated, isLoading, signUpWithDetails } = useAuth();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const onSubmit = async ({ confirmPassword: _confirmPassword, ...values }: FormValues) => {
    setSubmitError("");
    try {
      await signUpWithDetails(values);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We couldn't create your account. Please try again.");
    }
  };

  return (
    <main className="auth-page">
      <Link className="auth-back" to="/">← <span>Back home</span></Link>
      <section className="auth-card">
        <Brand />
        <div className="auth-heading">
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <h1>Let's begin.</h1>
          <p>Create an account and make room for what matters.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormField
            label="Your name"
            type="text"
            autoComplete="name"
            placeholder="How should we call you?"
            error={errors.name?.message}
            {...register("name")}
          />
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
            autoComplete="new-password"
            placeholder="At least 8 characters"
            error={errors.password?.message}
            {...register("password")}
          />
          <FormField
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            placeholder="Enter your password again"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
          {submitError && <p className="form-error" role="alert">{submitError}</p>}
          <button className="button button-submit" disabled={isLoading} type="submit">
            {isLoading ? "Creating your account..." : "Create account"} <span aria-hidden="true">→</span>
          </button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </section>
      <p className="auth-footer">A fresh start, whenever you need one.</p>
    </main>
  );
}
