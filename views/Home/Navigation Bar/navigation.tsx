"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navigation.css";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <center
      className="fixed top-0 z-[9999999] w-[100%] backdrop-blur-[5px]"
      style={{ background: "rgba(16, 13, 38, 0.10)" }}
    >
      <section
        id="nav"
        className={`flex flex-row items-center max-phone:flex-col ${
          pathname == "/" ? "justify-between" : "justify-start gap-32"
        } h-[5.5rem] px-[11rem] max-tablet:px-[6rem] max-phone:h-[6.625rem] max-phone:w-[80vw] max-phone:min-w-[80vw] max-phone:max-w-[80vw] max-phone:justify-center max-phone:px-0 max-phone:py-3`}
      >
        <a href="#" className="cursor-pointer hover:opacity-75">
          <Image
            width="448"
            height="36"
            className="h-9 w-[28rem] max-phone:h-[1.6875rem] max-phone:w-[21rem]"
            src="/Nav Bar/main-logo.png"
            alt="Event's Logo"
          />
        </a>

        {/* Book a Ticket */}
        <button
          className={`flex flex-row items-center gap-2 bg-primary px-6 py-2 transition-all max-phone:mt-4 ${
            pathname != "/" ? "hidden" : ""
          }`}
          style={{ borderRadius: "0.5rem" }}
          onClick={() => router.push("/book")}
        >
          <div className="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: "100%", height: "100%" }}
            >
              <path
                d="M10 14H7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 17H7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="13"
                y="7"
                width="4"
                height="4"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            className="font-body"
            style={{
              fontWeight: 500,
              fontStyle: "normal",
              letterSpacing: "0.3px",
            }}
          >
            BOOK A TICKET
          </span>
        </button>
      </section>
    </center>
  );
}
