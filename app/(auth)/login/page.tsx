import React from "react";
import FormLogin from "@/components/auth/form-login";

const Login = () => {
  return (
    <>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign In to Your Account
        </h1>
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
