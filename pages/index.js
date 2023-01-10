/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ContextHeader from "../components/Home/ContextHeader";
import GainsTemplate from "../components/Home/GainsTemplate";
import GenerateReports from "../components/Home/GenerateReports";
import HighlightsKeys from "../components/Home/HighlightsKeys";
import Navbar from "../components/ui/Header";
import { selectUser } from "../redux/authentication/authslice";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";

export default function Home() {
  const router = useRouter();
  try {
    const user = useSelector(selectUser);
    console.log(user);
    const token = user.user.token;
    console.log(user.user);
  } catch (err) {
    const user = null;
    router.push("/authentication/signin");
  }

  // if (typeof window !== "undefined" && user == null)
  //   router.push("/authentication/signin");
  return (
    <div className="mx-auto pt-8 max-w-7xl">
    <Head>
        <title>Proxima | Home</title>
      </Head>
        <Navbar />
        <section className="p-2 pt-6">
          <ContextHeader />
        </section>
        <section className="py-8 pt-1 ">
      <div className='grid grid-cols-3 p-1 space-x-6 '>
            <GenerateReports />
            <GenerateReports />
            <GenerateReports />

          </div>
      </section>
      <section className="grid grid-cols-4 py-8 space-x-3">
            <HighlightsKeys />
            <HighlightsKeys />
            <HighlightsKeys />
            <HighlightsKeys />

      </section>
      <section className="py-8 grid grid-cols-2 space-x-4">
        <div>
          <h1>
            Top wins
            <ArrowUpIcon className="md:inline-flex h-8 bg-white rounded-full text-green-400 border border-green-400  p-2 cursor-pointer md: mx-2 " />

          </h1>
        <div className="pt-3 space-y-6">
            <GainsTemplate />
            <GainsTemplate />

        </div>
        </div>

        <div>
        <h1>
            Top losses
            <ArrowDownIcon className="md:inline-flex h-8 bg-white rounded-full text-red-400 border border-red-400  p-2 cursor-pointer md: mx-2 " />

          </h1>
        <div className="pt-3 space-y-6">
            <GainsTemplate />
            <GainsTemplate />

        </div>
        </div>
      </section>

    </div>
  );
}


// git remote add origin https://github.com/Proximaagent/ProximaCoolKids.git
// git branch -M main
// git push -u origin main