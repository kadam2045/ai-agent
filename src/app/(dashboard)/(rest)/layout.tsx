import { AppHeader } from "@/components/app-header";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  //   await requireUnAuth();
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
};
export default Layout;
