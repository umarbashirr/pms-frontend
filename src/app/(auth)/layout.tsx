const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-screen p-6">
      {children}
    </div>
  );
};

export default AuthLayout;
