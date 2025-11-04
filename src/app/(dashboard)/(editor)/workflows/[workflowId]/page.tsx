import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();
  const { workflowId } = await params;
  return <p>WorkflowId Id : {workflowId}</p>;
};
export default Page;
