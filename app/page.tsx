import HeroSection from '@/views/Home/Hero Section/hero'
import Navigation from '@/views/Home/Navigation Bar/navigation'
import Image from 'next/image' // use instead of <img>

export default function Home() {
  return (
    <center className='wrapper'>
      <Navigation />
      
      <HeroSection />

    </center>
  )
}