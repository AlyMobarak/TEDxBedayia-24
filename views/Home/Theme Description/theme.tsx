"use client";
import Image from "next/image";
import "./theme.css";

export default function Theme() {
  return (
    <section
      id="theme"
      className="relative mx-0 mb-[4.5rem] mt-16 w-[100%] max-w-[100vw]"
    >
      <Image
        src="/theme-star.png"
        alt=""
        width="120"
        height="120"
        className="absolute left-[16rem] top-4 max-phone:hidden"
      ></Image>
      <Image
        src="/theme-moon.png"
        alt=""
        width="129"
        height="120"
        className="absolute right-[22rem] top-[20rem] rotate-12 max-phone:hidden"
      ></Image>
      <div>
        <Image
          width="1440"
          height="540"
          src="/theme-title.png"
          alt=""
          className="w-[40rem] max-phone:w-[95vw]"
        ></Image>
        <p
          className="mt-4 w-[40rem] text-center font-body text-white max-tablet:mt-2 max-phone:mt-3 max-phone:w-[85vw]"
          style={{ lineHeight: "2rem" }}
        >
          Time, like a vast and endless chamber, carries the echoes of voices,
          dreams, and actions that ripple throughout generations. The{" "}
          <span
            className="align-start m-0 inline-flex w-max justify-start rounded-[0.75rem] bg-accent py-1 pl-4 pr-2 font-bold"
            style={{ lineHeight: "1rem" }}
          >
            <span>Echoes of Time</span>
            <Image
              className="h-4 w-4"
              src="/mini-stars-dreamscape.png"
              height={28}
              width={25}
              alt=""
            ></Image>
          </span>{" "}
          remind us that each idea shared and every story told reverberates
          through history, shaping the present and inspiring the future. These
          echoes are not merely remnants of the past; they are calls to action,
          urging us to embrace their lessons and create a legacy that resonates
          for years to come.
        </p>
      </div>
    </section>
  );
}
