import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Separator from "../components/Separator";

export default function privacy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Twitter thread reader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-6">
        <Header />
        <Separator />
        <div className="mt-6">
          <h1 className="text-base underline">Privacy Policy</h1>
          <div className="mt-5 text-sm">
            <div>
              <ul className="list-disc">
                Twitter thread reader extension does not collect any data of any
                kind.
                <li className="ml-8 mt-2">It has no home server</li>
                <li className="ml-8 mt-2">
                  Does not embed any kind of analytic or telemetry hooks in its
                  code.
                </li>
                <li className="ml-8 mt-2">
                  Does not accept donations or any other form of financing.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Separator />
        <div className="text-sm">
          <Footer />
        </div>
        <Separator />
      </div>
    </div>
  );
}
