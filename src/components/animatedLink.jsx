"use client"

import useAnimatedRouter from "@/hook/useAnimatedRouter";
import Link from "next/link";
import React from "react";

export default function AnimatedLink({ href, children }) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      onClick={() => {        
        animatedRoute(href);
      }}
      passHref      
    >
      {children}
    </Link>
  );
}