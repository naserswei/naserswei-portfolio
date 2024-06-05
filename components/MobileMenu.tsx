import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./Toggle";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="dark:stroke-black" color="white" strokeWidth={2} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center mt-10 gap-10 ">
          <li>
            <Link className=" text-[#F44336]" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">About</Link>
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
