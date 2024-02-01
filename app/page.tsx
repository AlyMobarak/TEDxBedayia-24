import HeroSection from '@/views/Home/Hero Section/hero'
import Navigation from '@/views/Home/Navigation Bar/navigation'
import Speakers from '@/views/Home/Speakers/speakers'

export default function Home() {
  return (
    <center className='wrapper'>
      <Navigation />
      
      <HeroSection />

      <Speakers />

      <div className='mt-20 w-[33.5rem] max-phone:w-[95vw] font-small temp-note text-text-gray-dark'>Send us an email at <a className='font-body text-secondary-200' href="mailto:2hysp8jw62@privaterelay.appleid.com">2hysp8jw62@privaterelay.appleid.com</a> if you find any bugs visually or programatically.</div>
    </center>
  )
}