import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
interface LinksProps {
  className?: string;
  fill?: string;
}

function Links({ className, fill }: LinksProps) {
  return (
    <div className="flex gap-3">
      <Link
        href="https://github.com/naserswei/naserswei-portfolio"
        className={cn("footer-links", className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className={fill} fill="black" strokeWidth={0} />
      </Link>
      <div className={cn("footer-links cursor-not-allowed", className)}>
        <Twitter className={fill} fill="black" strokeWidth={0} />
      </div>
      <Link
        href="https://www.linkedin.com/in/naser-swei-86b510228/"
        className={cn("footer-links", className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className={fill} fill="black" strokeWidth={0} />
      </Link>
      <Link
        href="https://www.instagram.com/naserswei/?hl=en"
        className={cn("footer-links", className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className={fill} color="black" strokeWidth={1} />
      </Link>
    </div>
  );
}

export default Links;
