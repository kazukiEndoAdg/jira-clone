import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className=" Ibg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={152} height={56} />
          </div>
        </nav>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
