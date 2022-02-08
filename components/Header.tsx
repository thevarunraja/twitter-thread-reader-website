import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex items-start">
      <div>
        <Link href={"/"}>
          <a>
            <Logo width={48} height={48} />
          </a>
        </Link>
      </div>
      <div className="ml-2">
        <div>
          <div className="text-lg font-bold uppercase tracking-widest sm:text-xl md:text-2xl">
            Twitter Thread Reader
          </div>
          <div className="mt-1 text-sm leading-4 text-gray-600 dark:text-gray-400  md:text-base">
            Browser extension which enhances thread reading experience
          </div>
        </div>
      </div>
    </div>
  );
}
