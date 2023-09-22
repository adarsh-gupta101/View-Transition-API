import Link from "next/link";
import React from "react";
import AnimatedLink from "./animatedLink";

export default function Header() {
  return (
    <div>
      <div className=" bg-slate-50 ">
        <AnimatedLink href="/">mm hhhhhhhhhn </AnimatedLink>
        <AnimatedLink href="/about">About</AnimatedLink>
        <AnimatedLink href="/contact">Contact</AnimatedLink>
      </div>
    </div>
  );
}
