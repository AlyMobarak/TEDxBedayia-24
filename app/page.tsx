import HeroSection from '@/views/Home/Hero Section/hero'
import Image from 'next/image' // use instead of <img>

export default function Home() {
  return (
    <center>
      <section className="prose w-screen flex flex-col items-center mt-10">
        <h1 className="m-0 font-body">Initial Commit</h1>

        <p>Welcome to this page! Well done for making it here!</p>
      </section>

      <br />
      
      <HeroSection />

    </center>
  )
}