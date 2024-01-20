"use client"

import Navigation from "@/views/Home/Navigation Bar/navigation";
import './tickets.css'
import Image from "next/image";
import { FormEvent } from "react";

function largeInput(name: string, required: boolean, type: string, placeholder: string, svgElement: JSX.Element) {
    return (<center>
        {/* <input type={type} name={name} id={name} className="mb-4 w-[27.75rem] h-[3.5rem] rounded-[1rem] px-3" /> */}
        <div id="main-wrapper-textbox" className="w-[27.75rem] max-phone:w-[80vw] h-[3.5rem] rounded-[1rem] px-3 bg-textbox flex flex-row justify-between items-center">
            <div className="relative h-[3.5rem] py-[10px] w-[24rem] cursor-pointer" onClick={() => document.getElementById(name)!!.focus()}>
                <input type={type} name={name} id={name} required={required} placeholder="..." className="cursor-pointer bg-transparent border-transparent font-bold w-[24rem] absolute left-0 bottom-[10px]" style={{fontFamily: "Sansation, sans-serif", lineHeight: "1.5rem", fontSize: "1em"}} />
                <label style={{fontFamily: "Sansation, sans-serif", lineHeight: "0.75rem", color: "rgba(223, 223, 223, 0.70)", fontSize: "0.75em"}} className="cursor-pointer absolute left-0 top-[10px] font-bold" htmlFor={name}>{placeholder}</label>
            </div>

            <div>
                {svgElement}
            </div>
        </div>
    </center>)
}

function smallInput(name: string, required: boolean, type: string, placeholder: string, svgElement: JSX.Element) {
    return (<center>
        {/* <input type={type} name={name} id={name} className="mb-4 w-[27.75rem] h-[3.5rem] rounded-[1rem] px-3" /> */}
        <div id="main-wrapper-textbox" className="w-[12.5rem] h-[3.5rem] rounded-[1rem] px-3 bg-textbox flex flex-row justify-between items-center">
            <div className="relative h-[3.5rem] py-[10px] w-[8.75rem] cursor-pointer" onClick={() => document.getElementById(name)!!.focus()}>
                <input type={type} name={name} id={name} required={required} placeholder="..." className="cursor-pointer bg-transparent border-transparent font-bold w-[8.75rem] absolute left-0 bottom-[10px]" style={{fontFamily: "Sansation, sans-serif", lineHeight: "1.5rem", fontSize: "1em"}} />
                <label style={{fontFamily: "Sansation, sans-serif", lineHeight: "0.75rem", color: "rgba(223, 223, 223, 0.70)", fontSize: "0.75em"}} className="cursor-pointer absolute left-0 top-[10px] font-bold" htmlFor={name}>{placeholder}</label>
            </div>

            <div>
                {svgElement}
            </div>
        </div>
    </center>)
}
//! EDIT "name" BASED ON GOOGLE FORMS
function yourDetails() {
    return (<section id="personal-details" className="w-[27.75rem] max-phone:w-[80vw]">
        <h2 className="font-[Sansation] text-[1.75em]/[2.5rem] font-bold max-phone:text-center">Your Details</h2>
        <div className="flex flex-col gap-4 mt-5">
            {/* <div className="flex flex-row gap-11">
                {smallInput("first-name", true, "text", "First Name", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 11V8.2C19 7.0799 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H7.2C6.0799 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17H14" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 13H12" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 9H15" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="15" r="1" stroke="white" stroke-width="2"/><path d="M20 20C20 20 19.5 19 18 19C16.5 19 16 20 16 20" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>)}
                {smallInput("last-name", true, "text", "Last Name", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 11V8.2C19 7.0799 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H7.2C6.0799 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17H14" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 13H12" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 9H15" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="15" r="1" stroke="white" stroke-width="2"/><path d="M20 20C20 20 19.5 19 18 19C16.5 19 16 20 16 20" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>)}
            </div> */}

            {largeInput("full-name", true, "text", "Full Name", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 11V8.2C19 7.0799 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H7.2C6.0799 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17H14" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 13H12" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 9H15" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="15" r="1" stroke="white" stroke-width="2"/><path d="M20 20C20 20 19.5 19 18 19C16.5 19 16 20 16 20" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>)}
            {smallInput("age", true, "text", "Age", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4514 15.9084C17.5088 16.0121 17.4793 16.1415 17.3843 16.2125C15.8828 17.3352 14.0191 18 12.0001 18C9.98102 18 8.11725 17.3351 6.61576 16.2124C6.52078 16.1414 6.49125 16.0121 6.54868 15.9083C7.49884 14.1915 9.58245 13 12 13C14.4176 13 16.5012 14.1915 17.4514 15.9084Z" fill="white"/><path d="M17 4H17.502C18.7134 4 19.319 4 19.7834 4.232C20.2095 4.44495 20.5551 4.79048 20.768 5.21665C21 5.68096 21 6.28664 21 7.498V8M17 20H17.502C18.7134 20 19.319 20 19.7834 19.768C20.2095 19.5551 20.5551 19.2095 20.768 18.7834C21 18.319 21 17.7134 21 16.502V16M7 4H6.498C5.28664 4 4.68096 4 4.21665 4.232C3.79048 4.44495 3.44495 4.79048 3.232 5.21665C3 5.68096 3 6.28664 3 7.498V8M7 20H6.498C5.28664 20 4.68096 20 4.21665 19.768C3.79048 19.5551 3.44495 19.2095 3.232 18.7834C3 18.319 3 17.7134 3 16.502V16" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>)}
            {largeInput("email", true, "email", "Email Address", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z" fill="white"/></svg>)}
            {largeInput("phone", true, "text", "Phone Number", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z" stroke="white" stroke-width="2"/></svg>)}
            {largeInput("occupation", true, "text", "School/University/Job", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 10L12 6L20 10L12 14L4 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 10V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 12V17C7 17 7.45455 19 12 19C16.5455 19 17 17 17 17V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>)}
        </div>
    </section>)
}

function onFormSubmission(e: FormEvent<HTMLFormElement>) {
    // e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement);
    let formElement = document.getElementById("one-ticket-form")

    console.log(data.get("first-name"))
    let individualTicketForm = "https://docs.google.com/forms/d/e/1FAIpQLSfCMc5WpErjbdEL9W9FNinF7QUy_Ad21R1P77Sl9w8oqpVOPg/formResponse"

    // Validation Phase
    // ...

    // Processing Spaces, and special characters.

    // Sending to Google Phase
    // let fullName = data.get("first-name") as string + data.get("last-name")
    // let age = data.get("age")?.toString()
    // let phone = data.get("phone")?.toString()
    // let email = data.get("email")?.toString()
    // let occupation = data.get("occupation")?.toString()
}

function pickupLoc() {
    let dropDownMenu = document.getElementById("dropdown-pickuploc")
}

export default function BookATicketPage() {
    return (<center className='wrapper'>
        <Image width="1001" height="2430" alt="" className="absolute right-0 top-0 w-[60vw] max-phone:hidden" src="/one-ticket-side.png"></Image>
        <Navigation />

        <section id="book-ticket" className="mx-0 w-[100vw] max-w-[100vw] pt-[6.75rem] mb-[4.5rem] px-[11rem] max-phone:px-0 max-phone:width-[80vw] max-phone:max-w-[80vw] text-start">
            <h1 className="text-white font-title text-[3.5em]/[4.25rem] tracking-[-0.035rem] font-semibold text-start">Booking a Ticket<span className="text-primary">.</span></h1>
            <p className="font-body mt-4 text-text-gray-dark text-start">Note: For outsiders, one of our members will contact you regarding your ticket. <br />Due to space constraints and limits, not everyone who applies will get a ticket.<br /><br /><span className="font-bold text-text-gray-light">Date</span>: Friday, 16th February, 2024<br /><span className="font-bold text-text-gray-light">Time</span>: 4 PM to 10:30 PM<br /><span className="font-bold text-text-gray-light">Location</span>: Bedayia International School, Gate 2<br /><span className="font-bold text-text-gray-light">Individual Ticket</span>: 300 LE<br /><br /><span className="text-white">Hurry up and reserve your place now!</span></p>

            <form id="one-ticket-form" action="https://docs.google.com/forms/d/e/1FAIpQLSfCMc5WpErjbdEL9W9FNinF7QUy_Ad21R1P77Sl9w8oqpVOPg/formResponse" className="mt-20 flex flex-col items-start">

                {yourDetails()}

                <center className="relative mt-4">
                    <div className="top-0 left-0 w-[27.75rem] h-[3.5rem] rounded-[1rem] px-3 bg-textbox flex flex-row justify-between items-center" onClick={() => {pickupLoc()}}>
                        {/* <div className="flex flex-row justify-between h-[3.5rem] py-[10px] w-[24rem]" onClick={() => document.getElementById("pickup")!!.focus()}>
                            <select name="pickup" required id="pickup" className="cursor-pointer bg-transparent border-transparent font-bold w-[24rem]" style={{fontFamily: "Sansation, sans-serif", lineHeight: "1.5rem", fontSize: "1em"}}>
                                <option value="New+Cairo">New Cairo</option>
                                <option value="Madinaty">Madinaty</option>
                                <option value="Sherouk">Sherouk</option>
                                <option value="Masr+El+Gedeeda">Masr El Gedeeda</option>
                                <option value="Rehab">Rehab</option>
                                <option value="Nasr+City">Nasr City</option>
                                <option value="Bedayia%E2%80%99s+High+School+Office">Bedayia's High School Office</option>
                            </select>
                        </div> */}

                        <div>
                            I
                        </div>
                    </div>

                    <div id="dropdown-pickuploc" className="absolute top-0 flex flex-col w-full gap-1 bg-white opacity-40">
                        <span>New Cairo</span>
                        <span>sdfafsf2ffads</span>
                        <span>N3ro</span>
                        <span>Ne4ro</span>
                        <span>N5o</span>
                        <span>N6o</span>
                        <span>N7o</span>
                    </div>


                </center>

                {/* Each section, width is fixed and set to 27.75rem, text align start, others all centered */}
                <button type="submit">Submit</button>

            </form>
        </section>
    </center>)
}