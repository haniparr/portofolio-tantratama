"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { signUpCredentials } from "@/lib/action";
import { RegisterButton } from "@/components/button";

// Define interface for form state - note that error fields are arrays
interface FormState {
  message?: string;
  error?: {
    name?: string[];
    email?: string[];
    password?: string[];
    ConfirmPassword?: string[];
  };
}

const FormRegister = () => {
  const [state, formAction] = useFormState<FormState, FormData>(
    signUpCredentials, 
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
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Budi Pralon"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.name?.[0]}
          </span>
        </div>
      </div>

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
          placeholder="budipralon888@gmail.com"
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

      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          id="confirmPassword"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.ConfirmPassword?.[0]}
          </span>
        </div>
      </div>

      <RegisterButton />
      <p className="text-sm font-light text-gray-500 ">
        Do you have an account yet?{" "}
        <Link
          href="/login"
          className="font-medium text-primary-600 hover:underline "
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;