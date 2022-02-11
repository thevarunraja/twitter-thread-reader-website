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
      <div className="ml-3 sm:ml-4">
        <div
          className="absolute top-1/4 left-1/3 hidden h-32 w-32 dark:block"
          style={{
            filter: "blur(150px)",
            background:
              "linear-gradient(125.07deg, rgb(129, 102, 196) 10.56%, rgba(147, 110, 177, 0.92) 22.71%, rgba(160, 116, 163, 0.863) 31.62%, rgba(171, 121, 151, 0.82) 38.91%, rgba(186, 127, 136, 0.757) 48.63%, rgba(204, 135, 116, 0.675) 61.18%, rgba(215, 140, 105, 0.63) 68.07%, rgba(227, 145, 92, 0.576) 76.17%, rgba(235, 149, 84, 0.545) 81.43%, rgba(245, 153, 73, 0.5) 88.32%)",
          }}
        />
        <div>
          <div className="text-base font-bold uppercase tracking-widest sm:text-lg sm:tracking-widest">
            Twitter Thread Reader
          </div>
          <div className="mt-1 text-sm leading-5 text-gray-600 dark:text-gray-400   md:text-base">
            Browser extension which enhances thread reading experience
          </div>
        </div>
      </div>
    </div>
  );
}
