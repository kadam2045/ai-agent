import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const page = async () => {
  await requireAuth();

  const data = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      Protected server components
      {JSON.stringify(data)}
    </div>
  );
};
1;

export default page;
