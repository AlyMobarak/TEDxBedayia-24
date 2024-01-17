import './hero.css'

function testimonial(avatar_url: string, role: string, name: string, quote: string, alt: boolean) {
  if (alt) return (<div className="w-[38.5rem] h-[6.75rem] max-phone:w-[28.875rem] max-phone:h-[5.0625rem] px-10 max-phone:px-7 py-4 max-phone:py-3 bg-secondary-400 rounded-[1rem] max-phone:rounded-[0.75rem] flex flex-row gap-4 max-phone:gap-3 justify-start items-center" style={{backgroundImage: "url(\"/Hero Section/Vector Art Testimonial.png\")", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
          <div className="rounded-full bg-text-gray-light w-[4.75rem] h-[4.75rem] max-phone:w-[2.375rem] max-phone:h-[2.375rem]">
            <img src={avatar_url} className="h-full" alt="Avatar" />
          </div>
          <div className="flex flex-col gap-0 items-start justify-start w-[27.75rem] max-phone:w-[13.875rem] text-start h-full py-1">
            <span className="font-small"><span style={{fontWeight: 700}}>{role}</span>: {name}</span>
            <p className="font-body">"{quote}"</p>
          </div>
  </div>)

  return (<div className="w-[38.5rem] h-[6.75rem] max-phone:w-[28.875rem] max-phone:h-[5.0625rem] px-10 max-phone:px-7 py-4 max-phone:py-3 bg-primary-400 rounded-[1rem] max-phone:rounded-[0.75rem] flex flex-row gap-4 max-phone:gap-3 justify-start items-center" style={{backgroundImage: "url(\"/Hero Section/Vector Art Testimonial.png\")", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
            <div className="rounded-full bg-text-gray-light w-[4.75rem] h-[4.75rem] max-phone:w-[2.375rem] max-phone:h-[2.375rem]"></div>
            <div className="flex flex-col gap-0 items-start justify-start w-[27.75rem] max-phone:w-[13.875rem] text-start h-full py-1">
              <span className="font-small"><span style={{fontWeight: 700}}>{role}</span>: {name}</span>
              <p className="font-body">"{quote}"</p>
            </div>
  </div>)
}

function blurredCircles() {
  return (<div>
    <div className="w-[22rem] h-[22rem] max-phone:w-[16.5rem] max-phone:h-[16.5rem] flex-shrink-0 rounded-full bg-[#8F837C] blur-[200px] absolute left-[-11rem] top-[25rem]" />
    <div className="w-[22rem] h-[22rem] max-phone:w-[16.5rem] max-phone:h-[16.5rem] flex-shrink-0 rounded-full bg-[#8F837C] blur-[200px] absolute left-[86.7vw] top-[25rem]" />
  </div>)
}

export default function HeroSection() {
  return (
    <center>
      {/* 1200px Nav Bar needs to be condensed a bit and font further lowered. 1350px font lowers and nav bar stays same. */}
      <section id="hero" className="mx-0 w-[100%] max-w-[100vw] pt-[6.75rem] mb-[4.5rem] relative" style={{background: "url(\"/Hero Section/hero-image.png\") no-repeat top center", backgroundSize: "100%"}}>
        {blurredCircles()}
        <div>
          <img className="w-[45rem] max-phone:w-[33.75rem]" src="/Hero Section/main-heading.png" alt="Main Header" />
          <p className="text-text-gray-light text-center font-body w-[33.5rem] max-phone:w-[90vw]">Buckle up for a journey of inspiration and innovation at TEDx! Immerse yourself in a day filled with thought-provoking conversations, extraordinary performances, and enlightening experiences. Join us as we explore ideas worth spreading. Prepare to connect to a kaleidoscope of minds like your own &ndash; curious & hungry for change. </p>

          <div className="mt-6 max-phone:mt-[1.125rem] flex gap-4 max-phone:gap-3 flex-row max-phone:flex-col items-center justify-center">
            <button className="primary py-6 max-phone:py-[1.125rem] justify-center text-center items-center shrink-0 w-[16.25rem] max-phone:w-[16rem] font-button bg-primary rounded-2xl hover:-translate-y-2 max-phone:hover:-translate-y-1 hover:bg-primary-600 active:bg-primary-700">Book a Ticket</button>
            <button className="py-5 max-phone:py-[0.9375rem] justify-center text-center items-center shrink-0 w-[16.25rem] max-phone:w-[16rem] font-button rounded-2xl bg-transparent border-4 max-phone:border-3 border-solid border-secondary-400 hover:-translate-y-2 max-phone:hover:-translate-y-1 hover:border-secondary">Book a Group Ticket</button>
          </div>

          <p className="mt-2 text-center text-text-gray-dark font-body">Await the Wonders!</p>

          <h4 className="mt-[7rem] min-[1520px]:mt-[9rem] min-[1600px]:mt-[12rem] min-[1720px]:mt-[15rem] min-[1850px]:mt-[18rem] font-title text-center max-w-[90vw]">Speakers, <br />Activities, and More Coming Out Soon!! Await us!</h4>
        </div>
      </section>
      
      <section id="testimonials" className="flex flex-row gap-4 max-phone:gap-3 overflow-hidden max-w-[100vw] justify-start scroll-smooth">
        {testimonial("", "Graduate", "Kareem", "TEDx hosts a beautiful culmination of knowledge and entertainment, curated to ensure you have the best of times.", true)}
        {testimonial("", "Attendee", "Ahmed", "This text is so good.", false)}
        {testimonial("", "Attendee", "Yasmine", "This text is so good.", true)}
        {testimonial("", "Event Supervisor", "Mrs. Reham", "This text is so good.", false)}
        {testimonial("", "Attendee", "Someone's Mom", "This text is so good.", true)}
        {testimonial("", "Attendee", "Someone's Dad", "This text is so good.", false)}
      </section>
    </center>
  )
}