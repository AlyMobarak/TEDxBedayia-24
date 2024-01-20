import HeroSection from '@/views/Home/Hero Section/hero'
import Navigation from '@/views/Home/Navigation Bar/navigation'

export default function Home() {
  return (
    <center className='wrapper'>
      <Navigation />
      
      <HeroSection />

    </center>
  )
}