"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const {data:users} = useQuery(trpc.getUsers.queryOptions());
  const something = true;

  return (
    <div className={cn("text-red-500 font-extrabold", something === true && "text-green-500")}>
      <Button>
        click me
      </Button>
    </div>
  );
};

export default Page;