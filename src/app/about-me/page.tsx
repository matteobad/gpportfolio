"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Linkedin, Mail } from "lucide-react";

import { Card } from "@components/card";
import { Navigation } from "@components/nav";

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
                  Welcome to my portfolio. I am thrilled you’ve come to visit my
                  showcase of work that I’ve compiled over the years, which
                  includes a combination of collaborations and personal
                  projects.
                  <br />
                  <br />
                  Take a look and feel free to get in touch if you’d like to
                  discuss potential opportunities to work together.
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
