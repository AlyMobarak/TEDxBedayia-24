export default function Navigation() {
  return (
    <center className="w-screen fixed top-0 backdrop-blur-[5px]" style={{background: "rgba(16, 13, 38, 0.10)"}}>
      <section id="nav" className="flex flex-row items-center justify-between max-w-[1088px] min-w-[1088px] h-[5.5rem]">
        <img className="h-9 w-[448px]" src="/Nav Bar/main-logo.png" alt="Event's Logo" />

        {/* Links */}
        <div className="flex flex-row justify-between gap-6 font-body items-center">
          <a href="">Await</a>
          <a href="">the</a>
          <a href="">full</a>
          <a href="">website!</a>
        </div>

        {/* Book a Ticket */}
        <button className="bg-primary flex flex-row items-center py-2 px-6 gap-2" style={{borderRadius: "0.5rem"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 14H7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 17H7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <rect x="13" y="7" width="4" height="4" rx="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="font-body" style={{fontWeight: 500, fontStyle: "normal", letterSpacing: "0.3px"}}>BOOK A TICKET</span>
        </button>
      </section>
    </center>
  )
}