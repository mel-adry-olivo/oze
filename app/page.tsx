import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-mono)]">
      <div className="flex flex-col gap-3">
        <div className="flex md:items-center flex-col md:flex-row md:gap-4">
          <h1 className="text-4xl md:text-7xl font-semibold">oze</h1>
          <h1 className="text-xs md:text-sm text-muted-foreground ">
            or `one-zero-eight`
          </h1>
        </div>
        <p className="text-xs md:text-sm">IT 108 - Advanced Database</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-xs md:text-sm md:mt-4 cursor-pointer">
              See content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-fit md:max-w-fit [&>button:last-child]:hidden">
            <DialogHeader className="text-left">
              <DialogTitle>Kalma wala pa</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
