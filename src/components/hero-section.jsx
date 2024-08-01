"use client";

import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
import { AnimateBtn } from "@/components/animate-btn";
import { useRive, Layout, Fit } from "@rive-app/react-canvas";

export default function HeroSection() {
  const { rive, RiveComponent } = useRive({
    src: "/control.riv",
    stateMachines: "defaultState",
    layout: new Layout({ fit: Fit.FitHeight }),
    autoplay: true,
  });

  useEffect(() => {
    const aniItems = document.querySelectorAll(".animate-01");
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    aniItems.forEach((item, index) => {
      const el = item.firstChild;
      const delay = index * 0.05;

      gsap.set(el, { rotate: 9, y: 110, opacity: 0 });
      tl.to(
        el,
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          ease: "power2",
        },
        delay
      );
    });

    gsap.set(".canvas-containe", { x: 150, opacity: 0 });
    gsap.set(".paper-1", { x: -200, opacity: 0 });
    gsap.set(".paper-2", { x: -400, opacity: 0 });
    const tlPaper = gsap.timeline({ delay: 0.5 });
    tlPaper
      .to(".canvas-containe", {
        opacity: 1,
        x: 100,
        duration: 0.5,
        ease: "power1.out",
      })
      .to(
        ".paper-1",
        {
          opacity: 1,
          duration: 0.3,
        },
        "<"
      )
      .to(
        ".paper-1",
        {
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".paper-2",
        {
          opacity: 1,
          duration: 0.3,
        },
        "<"
      )
      .to(
        ".paper-2",
        {
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "<"
      );
  }, []);

  return (
    <main className="min-w-screen min-h-screen flex justify-start items-end">
      <div className="canvas-containe opacity-0 absolute flex justify-start items-end w-full h-full max-w-full max-h-full right-0 top-0 overflow-hidden">
        <RiveComponent />
        <div className="w-80 absolute right-[50dvw] bottom-[12dvh] self-end">
          <svg
            className="paper-1 w-80 -mb-32 ml-28"
            viewBox="0 0 158 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93 1L1 21.5L67.5 96.5L157 77.5L93 1Z"
              fill="black"
              stroke="black"
            />
            <path
              d="M93 1L1 21.5L67.5 95L157 77.5L93 1Z"
              fill="#F9EDDB"
              stroke="black"
            />
          </svg>

          <svg
            className="paper-2 w-80"
            viewBox="0 0 159 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M158 23L65.5 1L2 78L95 99L158 23Z"
              fill="black"
              stroke="black"
            />
            <path
              d="M158 23L65 1L1 76C1 76 31 82 65.5 87.368C100 92.736 100 87 105.5 82.5C111 78 158 23 158 23Z"
              fill="#F9EBD5"
              stroke="black"
            />
            <path
              d="M95.001 89.5C98.1738 89.8966 80.5848 88.4058 72.6748 88.5207C70.3028 89.1612 68.691 89.465 69.001 89C69.2078 88.6898 70.6123 88.5506 72.6748 88.5207C77.9547 87.0948 87.001 84 87.001 84C87.001 84 91.001 89 95.001 89.5Z"
              fill="#F9EBD5"
            />
            <path
              d="M95.001 89.5C99.001 90 70.001 87.5 69.001 89C68.001 90.5 87.001 84 87.001 84C87.001 84 91.001 89 95.001 89.5Z"
              stroke="black"
            />
          </svg>
        </div>
      </div>
      <div className="container lg:px-8 mx-auto relative">
        <div className="flex flex-col gap-8 pb-24">
          <h1 className="text-[4rem] font-semibold flex flex-col">
            <span className="animate-01">
              <span>Take Control</span>
            </span>{" "}
            <span className="animate-01">
              <span>of ➔ Your Debt</span>
            </span>
          </h1>
          <div className="animate-01">
            <p className="text-lg">
              Our certified credit counselors are here to help.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="animate-01">
              <Link
                href={"#"}
                className="block rounded-lg px-7 py-3 bg-black text-white/80 cursor-pointer hover:bg-black/90 hover:text-white hover:shadow-lg transition-all duration-300"
              >
                <AnimateBtn>Get Started</AnimateBtn>
              </Link>
            </span>
            <span className="animate-01">
              <Link
                href={"#"}
                className="block rounded-lg px-7 py-3 border border-foreground/20 cursor-pointer hover:border-foreground hover:shadow-lg transition-all duration-300"
              >
                <AnimateBtn>Learn More</AnimateBtn>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
