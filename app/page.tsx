import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = () => {
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