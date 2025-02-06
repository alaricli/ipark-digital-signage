"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Clock from "./components/Clock";

export default function Home() {
  return (
    <main className="p-4">
      <div className="">
        <Image
          src={"/ipark.PNG"}
          width={250}
          height={250}
          alt="ipark logo"
          className=""
        />
      </div>
      <div>
        <Clock />
      </div>
      <div>
        <div>
          <p>today's weather section</p>
          <ul className="list-disc list-inside">
            <li>temperature</li>
            <li>precipitation</li>
            <li>air quality</li>
            <li>humidity</li>
          </ul>
        </div>
      </div>
      <div>
        <p>next 5 day forecast</p>
      </div>
    </main>
  );
}
