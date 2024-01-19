"use client"

import { redirect, useRouter } from 'next/navigation'

import Link from 'next/link'
import './navigation.css'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <center className="w-screen z-50 fixed top-0 backdrop-blur-[5px]" style={{background: "rgba(16, 13, 38, 0.10)"}}>
      <section id="nav" className="flex flex-row max-phone:flex-col items-center justify-between max-phone:justify-center max-w-[1088px] min-w-[1088px] max-phone:max-w-[90vw] max-phone:min-w-[90vw] h-[5.5rem] max-phone:h-[6.625rem]">
        <Link href="/" className="cursor-pointer hover:opacity-75">
          <img className="h-9 w-[28rem] max-phone:h-[1.6875rem] max-phone:w-[21rem]" src="/Nav Bar/main-logo.png" alt="Event's Logo" />
        </Link>
        

        {/* Links */}
        <div className="nav-links flex flex-row justify-between gap-6 font-body items-center max-phone:hidden">
          <Link href={pathname == "/" ? "" /**tocome after replacing await */ : (pathname == "/booking/one" ? "/booking/group" : "/booking/one")}>{pathname == "/" ? "Await" : (pathname == "/booking/one" ? "Book a Group Ticket (4)" : "Book one Ticket")}</Link>
          {/* 15% OFF if on /booking/one */}
          <Link href="" className={(pathname != "/") ? 'hidden' : ''}>the</Link>
          <Link href="" className={(pathname != "/") ? 'hidden' : ''}>full</Link>
          <Link href="" className={(pathname != "/") ? 'hidden' : ''}>website</Link>
        </div>

        {/* Book a Ticket */}
        <button className={`bg-primary active:bg-primary-700 hover:bg-primary-600 transition-all flex flex-row items-center py-2 px-6 gap-2 {[max-phone:hidden]} max-phone:mt-4 ${pathname != "/" ? 'hidden' : ''}`} style={{borderRadius: "0.5rem"}} onClick={() => router.push('/booking/one')}>
          <div className="w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{width: "100%", height: "100%"}}>
            <path d="M10 14H7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 17H7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <rect x="13" y="7" width="4" height="4" rx="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg></div>
          <span className="font-body" style={{fontWeight: 500, fontStyle: "normal", letterSpacing: "0.3px"}}>BOOK A TICKET</span>
        </button>

        <div className='mt-6'><span className='font-small' onClick={redirect("mailto:2hysp8jw62@privaterelay.appleid.com")}>Send us an email at 2hysp8jw62@privaterelay.appleid.com if you find any bugs visually or programatically.</span></div>
      </section>
    </center>
  )
}