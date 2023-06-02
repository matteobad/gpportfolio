"use client";

import React from "react";
import Image from "next/image";

import { Card } from "@components/card";
import { Navigation } from "@components/nav";

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-8 sm:mt-0 lg:gap-16">
          <Card>
            <div className="flex flex-col justify-center gap-8 p-8">
              <div className="h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src="/images/user.jpeg"
                  className="object-cover"
                  alt="placeholder image"
                  width={80}
                  height={80}
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Giordano Prato
              </h2>
              <p className="text-zinc-400">
                Welcome to my portfolio. I am thrilled you’ve come to visit my
                showcase of work that I’ve compiled over the years, which
                includes a combination of collaborations and personal projects.
                <br />
                <br />
                Take a look and feel free to get in touch if you’d like to
                discuss potential opportunities to work together.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
