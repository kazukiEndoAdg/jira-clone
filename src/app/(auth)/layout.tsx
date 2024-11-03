type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className=" Ibg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center bg-orange-400 mb-4">
          <div className="flex items-center gap-2">
            <div className="text-lg font-medium leading-6 p-2">logo</div>
          </div>
        </nav>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
