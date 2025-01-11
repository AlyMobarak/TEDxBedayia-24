"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./hero.css";

function testimonial(
  avatar_url: string,
  role: string,
  name: string,
  quote: string,
  alt: boolean,
) {
  if (alt)
    return (
      <div
        className="flex h-[6.75rem] w-[38.5rem] flex-row items-center justify-start gap-4 rounded-[1rem] bg-secondary-400 px-10 py-4 max-phone:h-[5.0625rem] max-phone:min-w-[28.875rem] max-phone:gap-3 max-phone:rounded-[0.75rem] max-phone:px-[1.875rem] max-phone:py-3"
        style={{
          backgroundImage: 'url("/Hero Section/Vector Art Testimonial.png")',
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex h-full w-[37.75rem] flex-col items-start justify-start gap-0 py-1 text-start max-phone:w-[20rem]">
          <span className="mb-2 font-small max-phone:text-[0.75em]/[1.125rem]">
            {name}
          </span>
          <p className="font-body max-phone:text-[1em]/[1.5rem]">
            &quot;{quote}&quot;
          </p>
        </div>
      </div>
    );

  return (
    <div
      className="flex h-[6.75rem] w-[38.5rem] flex-row items-center justify-start gap-4 rounded-[1rem] bg-primary-400 px-10 py-4 max-phone:h-[5.0625rem] max-phone:min-w-[28.875rem] max-phone:gap-3 max-phone:rounded-[0.75rem] max-phone:px-[1.875rem] max-phone:py-3"
      style={{
        backgroundImage: 'url("/Hero Section/Vector Art Testimonial alt.png")',
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full w-[37.75rem] flex-col items-start justify-start gap-0 py-1 text-start max-phone:w-[20rem]">
        <span className="mb-2 font-small">{name}</span>
        <p className="font-body max-phone:text-[1.5em]">&quot;{quote}&quot;</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const router = useRouter();

  return (
    <center style={{ overflow: "hidden", maxWidth: "100vw" }}>
      <section
        id="hero"
        className="relative mx-0 mb-[4.5rem] w-[100%] max-w-[100vw] pt-[6.75rem] max-tablet:pt-[5rem] max-phone:bg-[length:80vh_100px] max-phone:pt-[10rem]"
      >
        <div>
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <Image
              width="1440"
              height="358"
              className="w-[45rem] max-phone:w-[95vw]"
              src="/Hero Section/main-heading.png"
              alt="Main Header"
            />
          </motion.div>
          <p className="w-[33.5rem] pt-4 text-center font-body text-text-gray-light max-tablet:mt-2 max-phone:mt-3 max-phone:w-[85vw]">
            Buckle up for a journey of inspiration and innovation at TEDx!
            Immerse yourself in a day filled with thought-provoking
            conversations, extraordinary performances, and enlightening
            experiences. Join us as we explore ideas worth spreading. Prepare to
            connect to a kaleidoscope of minds like your own &ndash; curious &
            hungry for change.{" "}
          </p>

          <div className="ml-2 mt-6 flex flex-row items-end justify-center gap-4 max-tablet:ml-0 max-phone:mt-[1.125rem] max-phone:flex-col max-phone:items-center max-phone:justify-center max-phone:gap-2">
            <motion.div
              initial={{ rotate: 30 }}
              animate={{ rotate: 0 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
            >
              <button
                className="primary w-[16.25rem] shrink-0 items-center justify-center rounded-2xl bg-primary py-6 text-center font-button max-phone:w-[16rem] max-phone:py-[1.125rem]"
                onClick={() => router.push("/book")}
              >
                Book a Ticket
              </button>
            </motion.div>

            <motion.div
              initial={{ rotate: -30 }}
              animate={{ rotate: 0 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
            >
              <div className="secondary-wrapper relative mt-4">
                <div className="absolute right-0 top-0 z-10 flex items-center justify-center rounded-full bg-secondary-400 px-4 py-[0.375rem] max-phone:right-[-1rem] max-phone:top-[-1rem]">
                  <span className="font-special">15% OFF!</span>
                </div>
                <button
                  className="max-phone:border-3 absolute bottom-0 left-0 w-[16.25rem] shrink-0 items-center justify-center rounded-2xl border-4 border-solid border-secondary-400 bg-transparent py-5 text-center font-button max-phone:w-[16rem] max-phone:py-[0.9375rem]"
                  onClick={() => router.push("/book/group")}
                >
                  Book a Group Ticket
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="flex max-w-[100vw] flex-row justify-start gap-4 overflow-hidden scroll-smooth max-phone:gap-3"
      >
        {testimonial(
          "/Avatars/kareem.png",
          "Graduate",
          "Kareem",
          "TEDx hosts a beautiful culmination of knowledge and entertainment, curated to ensure you have the best of times.",
          true,
        )}
        {testimonial(
          "/Avatars/ahmed.png",
          "Student",
          "Ahmed",
          "I really loved last year's event — mind-blowing and sparking curiosity. Can't wait for the next one!",
          false,
        )}
        {testimonial(
          "/Avatars/girl.png",
          "Student",
          "Yasmine",
          "Last year was my first year attending TEDx at Bedayia and it did not disappoint! 10/10; would definitely attend again!",
          true,
        )}
        {testimonial(
          "/Avatars/girl.png",
          "Team Member",
          "Jana",
          "Being part of TEDx Bedayia was an honor, witnessing ideas connect with the audience—fulfilling and fostering growth.",
          false,
        )}
        {testimonial(
          "/Avatars/mom.png",
          "Student",
          "Zeina",
          "The vendors offered a selection of hot delicious meals which tasted amazing. I hope TEDx this year will be as fun.",
          true,
        )}
        {testimonial(
          "/Avatars/dad.png",
          "Parent",
          "Someone's Dad",
          "Last year was more than talks: a transformative journey into knowledge and creativity. Well done!",
          false,
        )}
      </section>
    </center>
  );
}
