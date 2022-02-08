import Head from "next/head";
import Title from "../components/Title";

export default function privacy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Twitter thread reader chrome extension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-3">
        <div className="flex justify-center">
          <Title />
        </div>
        <div className="mt-12">
          <h1 className="text-xl font-bold">Privacy Policy</h1>
          <div className="mt-5 text-base">
            <div>
              <ul className="list-disc">
                Twitter thread reader extension does not collect any data of any
                kind.
                <li className="ml-8">It has no home server</li>
                <li className="ml-8">
                  Does not embed any kind of analytic or telemetry hooks in its
                  code.
                </li>
                <li className="ml-8">
                  Does not accept donations or any other form of financing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
