"use client"

import Navigation from "@/views/Home/Navigation Bar/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FormEvent } from "react";
import '../tickets.css';

function largeInput(name: string, required: boolean, type: string, placeholder: string, svgElement: JSX.Element) {
    return (<center>
        {/* <input type={type} name={name} id={name} className="mb-4 w-[27.75rem] h-[3.5rem] rounded-[1rem] px-3" /> */}
        <div id="main-wrapper-textbox" className="w-[27.75rem] invalid:border-error-dark max-phone:w-[80vw] h-[3.5rem] rounded-[1rem] px-3 bg-textbox flex flex-row justify-between items-center">
            <div className="relative h-[3.5rem] py-[10px] w-[24rem] cursor-pointer" onClick={() => document.getElementById(name)!!.focus()}>
                <input type={type} name={name} id={name} required={required} placeholder="..." className="cursor-pointer bg-transparent border-transparent font-bold w-[24rem] absolute left-0 bottom-[10px]" style={{fontFamily: "Sansation, sans-serif", lineHeight: "1.5rem", fontSize: "1em"}} />
                <label style={{fontFamily: "Sansation, sans-serif", lineHeight: "0.75rem", color: "rgba(223, 223, 223, 0.70)", fontSize: "0.75em"}} className="cursor-pointer absolute left-0 top-[10px] font-bold" htmlFor={name}>{placeholder}{(required) ? <span className="text-primary-400 font-bold">*</span> : ""}</label>
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
                <label style={{fontFamily: "Sansation, sans-serif", lineHeight: "0.75rem", color: "rgba(223, 223, 223, 0.70)", fontSize: "0.75em"}} className="cursor-pointer absolute left-0 top-[10px] font-bold" htmlFor={name}>{placeholder}{(required) ? <span className="text-primary-400 font-bold">*</span> : ""}</label>
            </div>

            <div>
                {svgElement}
            </div>
        </div>
    </center>)
}

function yourDetails() {
    return (<section id="personal-details" className="w-[27.75rem] max-phone:w-[80vw]">
        <h2 className="font-[Sansation] text-[1.75em]/[2.5rem] font-bold max-phone:text-center">Your Details</h2>
        <div className="flex flex-col gap-4 mt-5">
            {/* <div className="flex flex-row gap-11">
                {smallInput("first-name", true, "text", "First Name", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 11V8.2C19 7.0799 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H7.2C6.0799 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17H14" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M8 13H12" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M8 9H15" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="15" r="1" stroke="white" strokeWidth="2"/><path d="M20 20C20 20 19.5 19 18 19C16.5 19 16 20 16 20" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>)}
                {smallInput("last-name", true, "text", "Last Name", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 11V8.2C19 7.0799 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H7.2C6.0799 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17H14" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M8 13H12" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M8 9H15" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="15" r="1" stroke="white" strokeWidth="2"/><path d="M20 20C20 20 19.5 19 18 19C16.5 19 16 20 16 20" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>)}
            </div> */}

            {largeInput("entry.208115114", true, "text", "Full Name", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 11V8.2C19 7.0799 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H7.2C6.0799 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17H14" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M8 13H12" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M8 9H15" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="15" r="1" stroke="white" strokeWidth="2"/><path d="M20 20C20 20 19.5 19 18 19C16.5 19 16 20 16 20" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>)}
            {largeInput("entry.1364191028", true, "email", "Email Address", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z" fill="white"/></svg>)}
            {largeInput("entry.192153428", true, "text", "Phone Number", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z" stroke="white" strokeWidth="2"/></svg>)}
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

    //! Validate. If invalid, e.preventDefault();
}

function pickupClicked() {
    let dropdown = document.getElementById("location-dropdown")
    dropdown?.classList.toggle("options-hidden")
    document.getElementById("location-icon")?.classList.toggle("rotate-180")
}

function pickupOption(option: any) {
    let selection = document.getElementById("location-input")as HTMLSelectElement;
    selection.selectedIndex = option;

    let display = document.getElementById("selected-item-display") as HTMLSpanElement;
    display.innerHTML = selection.options[option].innerHTML;

    pickupClicked()
}


function channelClicked() {
    let dropdown = document.getElementById("channel-dropdown")
    dropdown?.classList.toggle("options-hidden")
    document.getElementById("channel-icon")?.classList.toggle("rotate-180")
}

function channelOption(option: any) {
    let selection = document.getElementById("channel-input")as HTMLSelectElement;
    selection.selectedIndex = option;

    let display = document.getElementById("selected-channel-display") as HTMLSpanElement;
    display.innerHTML = selection.options[option].innerHTML;

    channelClicked()
}


export default function BookATicketPage() {
    return (<center className='wrapper'>
        <Image width="1001" height="2430" alt="" className="absolute right-0 top-0 w-[60vw] max-phone:hidden" src="/one-ticket-side.png"></Image>
        <Navigation />

        <section id="book-ticket" className="mx-0 w-[100vw] max-w-[100vw] pt-[6.75rem] px-[11rem] max-tablet:px-[6rem] max-phone:px-0 max-phone:width-[80vw] max-phone:max-w-[80vw] text-start">
            <h1 className="text-white font-title text-[3.5em]/[4.25rem] tracking-[-0.035rem] font-semibold text-start w-max">Booking a Ticket<span className="text-primary">.</span></h1>
            <span className="font-body text-white">We&apos;ve reached the attendee limit! To sign up for our waitlist, you can fill out the form below.</span>
            <p className="font-body mt-4 text-text-gray-dark text-start">One of our members will contact you regarding your ticket if we find available seats.<br /><span className="font-bold text-text-gray-light">Date</span>: Friday, 16th February, 2024<br /><span className="font-bold text-text-gray-light hidden">Time</span><br /><span className="font-bold text-text-gray-light">Location</span>: Bedayia International School, Gate 2<br /><span className="font-bold text-text-gray-light">Individual Ticket</span>: 300 LE<br /><br /><span className="text-white">Hurry up and reserve your place in the waitlist now!</span></p>

            <form id="one-ticket-form" action="https://docs.google.com/forms/d/e/1FAIpQLSc6X3KWrqzUnamdEjLHxflfVBLdapOdnr8_2-uMXW1-XAORUw/formResponse" className="mt-20 flex flex-col items-start">

                {yourDetails()}

                {/* <section id="pickup-location" className="mt-12 w-[27.75rem] max-phone:w-[80vw]">
                    <h2 className="font-[Sansation] text-[1.75em]/[2.5rem] font-bold max-phone:text-center mb-5">Pickup Location</h2>
                    <div id="dropdown-pickuploc" className="relative w-[27.75rem] max-phone:w-[80vw] h-[3.5rem] rounded-[1rem] px-3 bg-textbox flex flex-row justify-between items-center mb-[12.75rem]">
                        <div id="location-opener" className="relative z-[99] h-[3.5rem] py-[10px] w-[24rem] cursor-pointer flex flex-col items-center" onClick={() => pickupClicked()}>
                            <span id="selected-item-display" className="cursor-pointer bg-transparent border-transparent font-bold w-[24rem] absolute left-0 bottom-[10px]" style={{fontFamily: "Sansation, sans-serif", lineHeight: "1.5rem", fontSize: "1em"}}>None</span>
                            <label style={{fontFamily: "Sansation, sans-serif", lineHeight: "0.75rem", color: "rgba(223, 223, 223, 0.70)", fontSize: "0.75em"}} className="cursor-pointer absolute left-0 top-[10px] font-bold">Choose your Pickup Location<span className="text-primary-400 font-bold">*</span></label>
                        </div>

                        <select name="entry.1647470913" id="location-input" style={{display: "none"}}>
                            <option value="New Cairo">New Cairo</option>
                            <option value="Madinaty">Madinaty</option>
                            <option value="Sherouk">Sherouk</option>
                            <option value="Masr El Gedeeda">Masr El Gedeeda</option>
                            <option value="Rehab">Rehab</option>
                            <option value="Nasr City">Nasr City</option>
                            <option value="Bedayia’s High School Office">Bedayia&apos;s High School Office</option>
                        </select>

                        <div id="location-dropdown" className="select-items absolute bg-textbox flex flex-col gap-1 font-[Sansation] pb-1 left-0 right-0 px-3 z-50 options-hidden rounded-[1rem]">
                            <div onClick={() => pickupOption(0)}>New Cairo</div>
                            <div onClick={() => pickupOption(1)}>Madinaty</div>
                            <div onClick={() => pickupOption(2)}>Sherouk</div>
                            <div onClick={() => pickupOption(3)}>Masr El Gedeeda</div>
                            <div onClick={() => pickupOption(4)}>Rehab</div>
                            <div onClick={() => pickupOption(5)}>Nasr City</div>
                            <div onClick={() => pickupOption(6)} className="border-none">Bedayia&apos;s High School Office</div>
                        </div>

                        <div /><div><svg id="location-icon" className="transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 9L12 15L6 9" stroke="white" strokeWidth="2"/></svg></div>
                    </div>
                </section> */}

                <section id="almost-there" className="mt-12 w-[27.75rem] max-phone:w-[80vw]">
                    <h2 className="font-[Sansation] text-[1.75em]/[2.5rem] font-bold max-phone:text-center mb-5">Almost There!</h2>

                    <div id="main-wrapper-textbox" className="w-[27.75rem] invalid:border-error-dark max-phone:w-[80vw] h-[12.5rem] rounded-[1rem] px-3 bg-textbox flex flex-row justify-between items-center">
                        <div className="relative py-[10px] h-[12.5rem] w-[26.25rem] cursor-pointer" onClick={() => document.getElementById("entry.153984127")!!.focus()}>
                            <textarea name="entry.153984127" id="entry.153984127" placeholder="..." className="cursor-pointer bg-transparent border-transparent font-bold w-[26.25rem] absolute left-0 bottom-[10px] h-[10rem]" style={{fontFamily: "Sansation, sans-serif", lineHeight: "1.5rem", fontSize: "1em"}} />
                            <label style={{fontFamily: "Sansation, sans-serif", lineHeight: "0.75rem", color: "rgba(223, 223, 223, 0.70)", fontSize: "0.75em"}} className="cursor-pointer absolute left-0 top-[10px] font-bold" htmlFor="entry.153984127">Any final questions? We&apos;ll contact you if a place is free.<span className="text-primary-400 font-bold"></span></label>
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-4 mt-5">
                        <input type="text" id="ever-attended" name="entry.1978466942" hidden />
                        <div className="text-center p-3 flex flex-col gap-2 rounded-[1rem] w-[27.75rem] max-phone:w-[80vw] bg-textbox">
                            <span className="font-[Sansation] font-bold text-white text-[1rem]/[1.5rem]">Have you ever attended a TEDx event before?</span>
                            <div className="flex flex-row gap-[6.75rem] justify-center items-center">
                                <div id="yes-attended" className={`font-[Sansation] cursor-pointer py-1 rounded-full text-[1rem]/[1.5rem] flex flex-row items-center justify-center px-[26px] bg-[#1F9357B2] hover:bg-[#1F9357] active:bg-[#155b37] text-white`} onClick={() => {(document.getElementById("ever-attended") as HTMLInputElement).value = "Yes"; document.getElementById("yes-attended")?.classList.add("selected-yesno"); document.getElementById("no-attended")?.classList.remove("selected-yesno")}}>Yes</div>
                                <div id="no-attended" className={`font-[Sansation] cursor-pointer py-1 rounded-full text-[1rem]/[1.5rem] flex flex-row items-center justify-center px-[26px] bg-[#941F34B2] hover:bg-[#941F34] active:bg-[#6b1928] text-white`} onClick={() => {(document.getElementById("ever-attended") as HTMLInputElement).value = "No"; document.getElementById("no-attended")?.classList.add("selected-yesno"); document.getElementById("yes-attended")?.classList.remove("selected-yesno")}}>No</div>
                            </div>
                        </div>

                        {largeInput("entry.782547498", false, "text", "Where was it Hosted?", <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6.2C3 5.07989 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2Z" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M19 21L15 6.5" stroke="white" stroke-width="2"/><path d="M21 6L3 8" stroke="white" stroke-width="2"/><path d="M13 14.0882C13 15.9272 11.2611 17.2334 10.4311 17.7521C10.1647 17.9186 9.83526 17.9186 9.56892 17.7521C8.7389 17.2334 7 15.9272 7 14.0882C7 12.2353 8.4536 11 10 11C11.6 11 13 12.2353 13 14.0882Z" stroke="white" stroke-width="2"/></svg>)}

                        <div id="dropdown-channel" className="relative w-[27.75rem] max-phone:w-[80vw] h-[3.5rem] rounded-[1rem] px-3 bg-textbox flex flex-row justify-between items-center mb-[10.75rem]">
                            <div id="channel-opener" className="relative z-[99] h-[3.5rem] py-[10px] w-[24rem] cursor-pointer flex flex-col items-center" onClick={() => channelClicked()}>
                                <span id="selected-channel-display" className="cursor-pointer bg-transparent border-transparent font-bold w-[24rem] absolute left-0 bottom-[10px]" style={{fontFamily: "Sansation, sans-serif", lineHeight: "1.5rem", fontSize: "1em"}}>None</span>
                                <label style={{fontFamily: "Sansation, sans-serif", lineHeight: "0.75rem", color: "rgba(223, 223, 223, 0.70)", fontSize: "0.75em"}} className="cursor-pointer absolute left-0 top-[10px] font-bold">Where did you hear about us?<span className="text-primary-400 font-bold">*</span></label>
                            </div>

                            <select name="entry.742151143" id="channel-input" style={{display: "none"}}>
                                <option value="Friends">Friends</option>
                                <option value="Family">Family</option>
                                <option value="Social Media">Social Media</option>
                                <option value="BIS in-school marketing">BIS In-School Marketing</option>
                                <option value="TED page">TED Page</option>
                                <option value="Other">Other</option>
                            </select>

                            <div id="channel-dropdown" className="select-items absolute bg-textbox flex flex-col gap-1 font-[Sansation] pb-1 left-0 right-0 px-3 z-50 options-hidden rounded-[1rem]">
                                <div onClick={() => channelOption(0)}>Friends</div>
                                <div onClick={() => channelOption(1)}>Family</div>
                                <div onClick={() => channelOption(2)}>Social Media</div>
                                <div onClick={() => channelOption(3)}>BIS In-School Marketing</div>
                                <div onClick={() => channelOption(4)}>TED Page</div>
                                <div onClick={() => channelOption(5)} className="border-none">Other</div>
                            </div>

                            <div /><div><svg id="channel-icon" className="transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 9L12 15L6 9" stroke="white" strokeWidth="2"/></svg></div>
                        </div>
                    </div> */}
                </section>

                {/* Each section, width is fixed and set to 27.75rem, text align start, others all centered */}
                <button type="submit" className="mt-[2.5rem] font-button text-[1.5rem]/2.25rem w-[27.75rem] max-phone:w-[80vw] h-[3.5rem] rounded-[1rem] px-3 flex flex-row justify-center items-center text-center bg-primary hover:bg-primary-600 active:bg-primary-700 transition-all" style={{fontWeight: 500, fontStyle: "normal", letterSpacing: "0.3px"}}>ENTER THE WAITLIST</button>
            </form>
        </section>

        <Script src="/ticket-one.js"></Script>
    </center>)
}