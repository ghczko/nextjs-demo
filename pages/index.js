import Head from "next/head";

import Layout from "../components/layout";

import Link from "next/link";
import Chart from "chart.js/auto";

export default function Home() {
  return (
    <Layout home>
      <div className="flex justify-center">
        <div className="grow grid place-items-around lg:grid-cols-3 md:grid-cols-2 max-w-7xl my-5">
          <div className="lg:col-span-2 bg-gradient-to-r shadow-xl transform transition duration-500 hover:scale-[1.01] from-stone-300/10 to-stone-300/20 hover:from-stone-300/30 hover:to-stone-300/30 m-3 p-3 rounded-xl h-96">
            <p className=" text-gray-800 hover:text-gray-800">
              Top gainers in week
            </p>
            {/* <div className="w-80 h-60 bg-blue-900 m-10" /> */}
          </div>
          <div className="bg-gradient-to-r shadow-xl transform transition duration-500 hover:scale-[1.01] from-stone-300/10 to-stone-300/20 hover:from-stone-300/30 hover:to-stone-300/30  m-3 p-3 rounded-xl h-96">
            <p className=" text-gray-800 hover:text-gray-800">
              Top loosers in week
            </p>
          </div>
          <div className="bg-gradient-to-r shadow-xl transform transition duration-500 hover:scale-[1.01] from-stone-300/10 to-stone-300/20 hover:from-stone-300/30 hover:to-stone-300/30  m-3 p-3 rounded-xl h-96">
            <p className=" text-gray-800 hover:text-gray-800">News</p>
          </div>
          <div className="lg:col-span-2 bg-gradient-to-r shadow-xl transform transition duration-500 hover:scale-[1.01] from-stone-300/10 to-stone-300/20 hover:from-stone-300/30 hover:to-stone-300/30  m-3 p-3 rounded-xl h-96">
            <p className=" text-gray-800 hover:text-gray-800">
              Top gainers in week
            </p>
            {/* <div className="w-80 h-60 bg-blue-900 m-10" /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
