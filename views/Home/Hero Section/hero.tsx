export default function HeroSection() {
  return (
    <center>
      {/* 1200px Nav Bar needs to be condensed a bit and font further lowered. 1350px font lowers and nav bar stays same. */}
      <section id="hero" className="w-screen pt-[6.75rem] pb-[4.5rem]" style={{background: "url(\"/Hero Section/hero-image.png\") no-repeat top center", backgroundSize: "100vw"}}>
        <div>
          <img className="w-[45rem]" src="/Hero Section/main-heading.png" alt="Main Header" />
          <p className="text-text-gray-light text-center font-body w-[33.5rem]">Buckle up for a journey of inspiration and innovation at TEDx! Immerse yourself in a day filled with thought-provoking conversations, extraordinary performances, and enlightening experiences. Join us as we explore ideas worth spreading. Prepare to connect to a kaleidoscope of minds like your own &ndash; curious & hungry for change. </p>

          <div className="mt-6 flex gap-4 flex-row items-center justify-center">
            <button className="py-6 justify-center text-center items-center shrink-0 w-[16.25rem] font-button bg-primary rounded-2xl">Book a Ticket</button>
            <button className="py-5 justify-center text-center items-center shrink-0 w-[16.25rem] font-button rounded-2xl bg-transparent border-4 border-solid border-secondary-400">Book a Group Ticket</button>
          </div>

          <p className="mt-2 text-center text-text-gray-dark font-body">Await the Wonders! Join 400+ attendees.</p>

          <h4 className="mt-[7rem] min-[1520px]:mt-[9rem] min-[1600px]:mt-[12rem] min-[1720px]:mt-[15rem] min-[1850px]:mt-[18rem] font-title text-center max-w-[36rem]">Speakers, <br />Activities, and More Coming Out Soon!! Await us!</h4>
        </div>
      </section>
      
      <section id="testimonials" className="flex flex-row gap-4 overflow-hidden w-screen">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </center>
  )
}