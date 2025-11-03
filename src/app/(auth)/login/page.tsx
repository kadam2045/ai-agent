import { LoginForm } from "@/feature/auth/components/login-form";
import { requireAuth, requireUnAuth } from "@/lib/auth-utils";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  await requireUnAuth();
  return <LoginForm />;
};
export default page;
