"use client"

import { motion } from "framer-motion"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import './hero.css'

function testimonial(avatar_url: string, role: string, name: string, quote: string, alt: boolean) {
  if (alt) return (<div className="w-[38.5rem] h-[6.75rem] max-phone:min-w-[28.875rem] max-phone:h-[5.0625rem] px-10 max-phone:px-[1.875rem] py-4 max-phone:py-3 bg-secondary-400 rounded-[1rem] max-phone:rounded-[0.75rem] flex flex-row gap-4 max-phone:gap-3 justify-start items-center" style={{backgroundImage: "url(\"/Hero Section/Vector Art Testimonial.png\")", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
          <div className="rounded-full bg-text-gray-light w-[4.75rem] h-[4.75rem] max-phone:w-[3.0625rem] max-phone:h-[3.0625rem]">
            <Image width="100" height="100" src={avatar_url} className="h-full rounded-full" alt="Avatar" />
          </div>
          <div className="flex flex-col gap-0 items-start justify-start w-[27.75rem] max-phone:w-[13.875rem] text-start h-full py-1">
            <span className="font-small max-phone:text-[0.75em]/[1.125rem]"><span style={{fontWeight: 700}}>{role}</span>: {name}</span>
            <p className="font-body max-phone:text-[1em]/[1.5rem]">&quot;{quote}&quot;</p>
          </div>
  </div>)

  return (<div className="w-[38.5rem] h-[6.75rem] max-phone:min-w-[28.875rem] max-phone:h-[5.0625rem] px-10 max-phone:px-[1.875rem] py-4 max-phone:py-3 bg-primary-400 rounded-[1rem] max-phone:rounded-[0.75rem] flex flex-row gap-4 max-phone:gap-3 justify-start items-center" style={{backgroundImage: "url(\"/Hero Section/Vector Art Testimonial alt.png\")", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
            <div className="rounded-full bg-text-gray-light w-[4.75rem] h-[4.75rem] max-phone:w-[3.0625rem] max-phone:h-[3.0625rem]">
              <Image width="100" height="100" src={avatar_url} className="h-full rounded-full" alt="Avatar" />
            </div>
            <div className="flex flex-col gap-0 items-start justify-start w-[27.75rem] max-phone:w-[13.875rem] text-start h-full py-1">
              <span className="font-small"><span style={{fontWeight: 700}}>{role}</span>: {name}</span>
              <p className="font-body">&quot;{quote}&quot;</p>
            </div>
  </div>)
}

function blurredCircles() {
  return (<div className='overflow-hidden width-screen max-w-full min-h-0 max-phone:hidden max-tablet:hidden'>
    <div className="w-[22rem] h-[22rem] max-phone:w-[10.5rem] max-phone:hidden max-tablet:hidden max-phone:h-[10.5rem] flex-shrink-0 rounded-full bg-[#8F837C] blur-[200px] absolute left-[-11rem] top-[25rem] max-phone:left-[-5.25rem]" />
    <div className="w-[22rem] h-[22rem] hidden max-phone:w-[10.5rem] max-phone:hidden max-tablet:hidden max-phone:h-[10.5rem] flex-shrink-0 rounded-full bg-[#8F837C] blur-[200px] absolute right-[-11rem] max-phone:right-[-5.25rem] top-[25rem]" />
  </div>)
}

export default function HeroSection() {
  const router = useRouter();

  return (
    <center style={{overflow: "hidden", maxWidth: "100vw"}}>
      {blurredCircles()}
      {/* 1200px Nav Bar needs to be condensed a bit and font further lowered. 1350px font lowers and nav bar stays same. */}
      <section id="hero" className="mx-0 w-[100%] max-w-[100vw] pt-[6.75rem] max-phone:pt-[10rem] max-tablet:pt-[5rem] mb-[4.5rem] relative max-phone:bg-[length:80vh_100px]" style={{background: "url(\"/Hero Section/hero-image.png\") no-repeat top center", backgroundSize: "100%"}}>
        <div>
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
          >
            <Image width="1440" height="358" className="w-[45rem] max-phone:w-[95vw]" src="/Hero Section/main-heading.png" alt="Main Header" />
          </motion.div>
          <p className="text-text-gray-light text-center font-body w-[33.5rem] max-phone:w-[85vw] max-phone:mt-3 max-tablet:mt-2">Buckle up for a journey of inspiration and innovation at TEDx! Immerse yourself in a day filled with thought-provoking conversations, extraordinary performances, and enlightening experiences. Join us as we explore ideas worth spreading. Prepare to connect to a kaleidoscope of minds like your own &ndash; curious & hungry for change. </p>

          <div className="ml-2 max-tablet:ml-0 mt-6 max-phone:mt-[1.125rem] flex gap-4 max-phone:gap-2 flex-row max-phone:flex-col items-end max-phone:items-center max-phone:justify-center justify-center">
            <motion.div
              initial={{ rotate: 30 }}
              animate={{ rotate: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.75 }}
            >
              <button className="primary py-6 max-phone:py-[1.125rem] justify-center text-center items-center shrink-0 w-[16.25rem] max-phone:w-[16rem] font-button bg-primary rounded-2xl hover:-translate-y-2 max-phone:hover:-translate-y-1 hover:bg-primary-600 active:bg-primary-700" onClick={() => router.push('/booking/one')}>Book a Ticket</button>
            </motion.div>

            <motion.div
              initial={{ rotate: -30 }}
              animate={{ rotate: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.75 }}
            >
              <div className="relative hover:-translate-y-2 max-phone:hover:-translate-y-1 secondary-wrapper">
                <div className="rounded-full bg-secondary-400 flex items-center justify-center px-4 py-[0.375rem] absolute top-0 right-0 z-10 max-phone:hidden"><span className='font-special'>15% OFF!</span></div>
                <button className="py-5 max-phone:py-[0.9375rem] justify-center text-center items-center shrink-0 w-[16.25rem] max-phone:w-[16rem] font-button rounded-2xl bg-transparent border-4 max-phone:border-3 border-solid border-secondary-400 left-0 bottom-0 absolute" onClick={() => router.push('/booking/group')}>Book a Group Ticket</button>
              </div>
            </motion.div>
          </div>

          <p className="mt-2 text-center text-text-gray-dark font-body">Await the Wonders!</p>

          <h4 className="mt-[7rem] min-[1520px]:mt-[9rem] min-[1600px]:mt-[12rem] min-[1720px]:mt-[15rem] min-[1850px]:mt-[18rem] text-center max-w-[90vw]" style={{fontFamily: "Poppins"}}>Speakers<br />are out! More Coming Out Soon!! Await us!</h4>
        </div>
      </section>
      
      <section id="testimonials" className="flex flex-row gap-4 max-phone:gap-3 overflow-hidden max-w-[100vw] justify-start scroll-smooth">
        {testimonial("/Avatars/kareem.png", "Graduate", "Kareem", "TEDx hosts a beautiful culmination of knowledge and entertainment, curated to ensure you have the best of times.", true)}
        {testimonial("/Avatars/ahmed.png", "Student", "Ahmed", "I really loved last year's event — mind-blowing and sparking curiosity. Can't wait for the next one!", false)}
        {testimonial("/Avatars/girl.png", "Student", "Yasmine", "Last year was my first year attending TEDx at Bedayia and it did not disappoint! 10/10; would definitely attend again!", true)}
        {testimonial("/Avatars/girl.png", "Team Member", "Jana", "Being part of TEDx Bedayia was an honor, witnessing ideas connect with the audience—fulfilling and fostering growth.", false)}
        {testimonial("/Avatars/mom.png", "Student", "Zeina", "The vendors offered a selection of hot delicious meals which tasted amazing. I hope TEDx this year will be as fun.", true)}
        {testimonial("/Avatars/dad.png", "Parent", "Someone's Dad", "Last year was more than talks: a transformative journey into knowledge and creativity. Well done!", false)}
      </section>
    </center>
  )
}