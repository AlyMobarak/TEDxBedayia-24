import Image from 'next/image' // use instead of <img>

export default function HeroSection() {
  return (
    <center><article id="hero-section" className="prose w-screen flex flex-col items-center mt-10">
      <h1 className="m-0">Sample Section</h1>

      <p>It's nice having you here!</p>
    </article></center>
  )
}