import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-6">
      <div>Code will soon be available GitHub(once it is out of beta).</div>
      <div className="mt-2">
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/thevarunraja"
          target="_blank"
          className="text-blue-700 dark:text-blue-500"
        >
          DM me on twitter
        </a>
        <span className="ml-2">if you have any questions or issues.</span>
      </div>
      <div className="mt-2 text-blue-700 dark:text-blue-500">
        <Link href={"/privacy"}>privacy policy</Link>
      </div>
      <div className="mt-2 flex items-center">
        &copy; {new Date().getFullYear()}{" "}
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/thevarunraja"
          target="_blank"
          className="ml-2 text-blue-700 dark:text-blue-500"
        >
          @thevarunraja
        </a>
      </div>
    </div>
  );
}
