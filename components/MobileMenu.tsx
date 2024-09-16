import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import { cn } from "@/lib/utils";
type MenuProps = {
  className?: string;
};

function MobileMenu({ className }: MenuProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          className={cn("dark:stroke-black", className)}
          color="white"
          strokeWidth={2}
        />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Welcome to my portfolio 😁</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center mt-10 gap-10 ">
          <li>
            <Link className=" text-[#F44336]" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="#">Skill</Link>
          </li>
          <li>
            <Link href="#">Works</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <ModeToggle />
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
