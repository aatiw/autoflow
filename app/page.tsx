import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();

  return (
    <div className="min-h-screen min-w-scren items-center justify-center">
      protected server component
    </div>
  );
};

export default Page;