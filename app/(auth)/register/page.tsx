import React from "react";
import FormRegister from "@/components/auth/form-register";

const Register = () => {
  return (
    <>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Create Your Account
        </h1>
        <FormRegister />
      </div>
    </>
  );
};

export default Register;
