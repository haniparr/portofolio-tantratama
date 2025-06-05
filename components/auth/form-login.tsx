"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { signInCredentials } from "@/lib/action";
import { LoginButton } from "@/components/button";

// Define the type for your form state - note that error fields are arrays
interface FormState {
  message?: string;
  error?: {
    email?: string[];
    password?: string[];
  };
}

const FormLogin = () => {
  const [state, formAction] = useFormState<FormState, FormData>(
    signInCredentials,
    null
  );

  return (
    <form action={formAction} className="space-y-4 md:space-y-6">
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-50"
          role="alert"
        >
          <span className="font-medium">{state.message}</span>
        </div>
      ) : null}

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="youremail@mail.com"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.email?.[0]}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.password?.[0]}
          </span>
        </div>
      </div>

      <LoginButton />
      <p className="text-sm font-light text-gray-500 ">
        Dont you have an account yet?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline "
        >
          Sign up here!
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
