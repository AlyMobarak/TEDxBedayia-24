import HeroSection from '@/views/Home/Hero Section/hero'
import Info from '@/views/Home/Information/info'
import Navigation from '@/views/Home/Navigation Bar/navigation'
import Speakers from '@/views/Home/Speakers/speakers'
import Theme from '@/views/Home/Theme Description/theme'
import Image from "next/image"

export default function Home() {
  return (
    <center className='wrapper'>
      <Navigation />
      
      <HeroSection />

      <Theme />

      <Info />

      <div className='relative'>
        <div className='w-screen absolute z-10 pointer-events-none max-tablet:hidden pt-[8rem]'>
          <Image src="/speakers-elements.png" alt="" className='h-[1250px]' style={{left: "calc(100vw - 1468px)"}} width={1280} height={1400}></Image>
        </div>
        <Speakers />
      </div>

      <Image style={{width: "100vw", marginBottom: "4rem"}} className='mt-8 max-phone:mt-[-5rem]' width="2880" alt="" height="702" src="/confedential-2.png"></Image>

      <Image style={{width: "80vw", marginBottom: "4rem"}} className='mt-16' width="1280" alt="" height="840" src="/locked-timetable.png"></Image>

      <div className='mt-20 w-[33.5rem] max-phone:w-[95vw] font-small temp-note text-text-gray-dark'>Send us an email at <a className='font-body text-secondary-200' href="mailto:2hysp8jw62@privaterelay.appleid.com">2hysp8jw62@privaterelay.appleid.com</a> if you find any bugs visually or programatically.</div>
    </center>
  )
}