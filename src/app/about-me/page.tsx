"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Linkedin, Mail } from "lucide-react";

import { Card } from "@components/card";
import { Navigation } from "@components/nav";
import Particles from "@components/particles";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/in/giordano-prato-28b429263",
    label: "LinkedIn",
    handle: "Giordano Prato",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:gio.prato1@gmail.com",
    label: "Email",
    handle: "Gmail",
  },
  {
    icon: <FileText size={20} />,
    href: "/cv.pdf",
    label: "Curriculum",
    handle: "CV",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-8 lg:gap-16">
          <Card>
            <div className="flex flex-col gap-12 p-8">
              <div className="relative flex flex-col items-center justify-center gap-8">
                <div className="h-[180px] w-[180px] overflow-hidden rounded-full">
                  <Image
                    src="/images/user.jpeg"
                    className="object-cover"
                    alt="placeholder image"
                    width={180}
                    height={180}
                  />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Giordano Prato
                </h2>
                <p className="text-zinc-400">
                  <span className="text-lg font-bold">Hello,</span>
                  <br />
                  welcome to my portfolio where I’ve been collecting my main
                  works done during my last 2+ years of academy. I decided to
                  take the path of the level designer because I needed to
                  express my fantasies and being able to create worlds that I
                  would play in the first place. I’m really proud of how I’m
                  growing through the years and I recognise how much I can still
                  learn and for that my key sentence will always be “Team work
                  is the dream work”.
                  <br />
                  <br />
                  Cheers and thank you very much for taking the time to read!
                </p>
              </div>
              <div className="container mx-auto flex items-center justify-center">
                <div className="mx-auto grid w-full grid-cols-3 gap-8 sm:mt-0">
                  {socials.map((s, idx) => (
                    <Link
                      key={idx}
                      href={s.href}
                      target="_blank"
                      className="group relative flex flex-col items-center gap-4 duration-700 md:gap-8"
                    >
                      <span
                        className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                        aria-hidden="true"
                      />
                      <span className="drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white">
                        {s.icon}
                      </span>{" "}
                      <div className="z-10 flex flex-col items-center">
                        <span className="font-display text-lg font-medium text-zinc-200 duration-150 group-hover:text-white">
                          {s.handle}
                        </span>
                        <span className="mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
                          {s.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
