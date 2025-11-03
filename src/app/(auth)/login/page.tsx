import { LoginForm } from "@/feature/auth/components/login-form";
import { requireAuth, requireUnAuth } from "@/lib/auth-utils";

const page = async () => {
  await requireUnAuth();
  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default page;
