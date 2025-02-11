"use client";

import Image from "next/image";
import TodayWidget from "./components/TodayWidget";
import TodayDetailsWidget from "./components/TodayDetailsWidget";

export default function Home() {
  return (
    <main className="h-screen flex flex-col p-4">
      <div className="flex justify-between items-center px-16 mt-8">
        <div>
          <TodayWidget />
        </div>
        <div className="">
          <Image src={"/ipark.PNG"} width={250} height={250} alt="ipark logo" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <TodayDetailsWidget />
      </div>
    </main>
  );
}
