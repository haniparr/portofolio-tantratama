const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
