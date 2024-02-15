"use client"
import './timetable.css';

function separator(event: string, caption?: string) {
    return (<div className='flex flex-row gap-6 w-[68rem] justify-center text-center items-center'>
        <div className='line-event'></div>
        <div className="flex flex-col w-[12.5rem]">
            <span className='eventName'>{event}</span>
            {(caption != null) ? <span className='eventCaption'>{caption}</span> : ""}
        </div>
        <div className='line-event'></div>
    </div>);
}

function speech(speaker: string, time: string, alt: boolean) {
    return (<div className='flex flex-row gap-0 justify-center text-center items-center'>
        <div className='w-[33.5rem] items-center gap-3 px-5 py-4 flex flex-row rounded-2xl bg-secondary-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M42.1667 21.3332C42.1667 26.9481 37.6149 31.4998 32 31.4998C26.3851 31.4998 21.8333 26.9481 21.8333 21.3332C21.8333 15.7183 26.3851 11.1665 32 11.1665C37.6149 11.1665 42.1667 15.7183 42.1667 21.3332Z" fill="white" stroke="white" strokeLinecap="round"/>
                <path d="M15.2919 39.2492C16.43 37.1019 18.7481 36 21.1783 36H42.8217C45.2519 36 47.57 37.1019 48.7081 39.2492C50.1193 41.9118 51.7781 46.0416 51.9796 50.9992C52.0021 51.5511 51.5523 52 51 52H13C12.4477 52 11.9979 51.5511 12.0204 50.9992C12.2219 46.0416 13.8807 41.9118 15.2919 39.2492Z" fill="white" stroke="white" strokeLinecap="round"/>
            </svg>
            <span className='eventSpeech'>{speaker}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className={alt ? "rotate-180": ""} width="108" height="11" viewBox="0 0 108 11" fill="none">
            <path d="M108 6H93.3283C92.1992 6 91.1162 5.55237 90.3166 4.75521L88.7229 3.16645C86.6225 1.07257 83.0389 2.56021 83.0389 5.52599V5.52599C83.0389 8.61531 79.1987 10.0411 77.1826 7.70022L75.4377 5.67413C74.4093 4.48004 72.6012 4.36228 71.4266 5.41289V5.41289C70.4022 6.32918 68.8659 6.37209 67.7919 5.5144L66.102 4.16478C64.4518 2.84694 62.1828 2.61768 60.3024 3.57878L58.4827 4.50884C56.6045 5.46884 54.4374 5.69977 52.399 5.15715L50.2968 4.59753C47.6198 3.8849 44.7843 4.05486 42.2116 5.08215V5.08215C40.6932 5.6885 39.073 6 37.438 6H1.07288e-06" stroke="white" strokeWidth="4"/>
        </svg>
        <div className='w-[16.25rem] flex justify-center items-center bg-secondary-400 rounded-2xl h-[6rem]'>
            <span className='eventSpeechTime'>{time}</span>
        </div>
    </div>);
}

export default function Timetable() {
    return (<section id="timetable" className="mx-0 w-[100%] max-w-[100vw] mt-16 mb-[4.5rem] relative">
        <div className='font-title'>Event Timetable</div>
        <div className='flex flex-col gap-8 mt-10'>
            {separator("Registration", "3:15 - 4:00")}
            {speech("Alia Osman", "4:00 - 4:15", false)}
            {speech("Seif Aly", "4:15 - 4:30", true)}
            {speech("Hedaya Malak", "4:30 - 4:45", false)}
            {speech("Salman Fakhry", "4:45 - 5:00", true)}
            {separator("Break", "5:00 - 6:30")}
            {speech("Nada Mohamed", "6:30 - 6:45", false)}
            {speech("Tamer Bashir", "6:45 - 7:00", true)}
            {speech("Youssef Sabry", "7:00 - 7:15", false)}
            {separator("Break", "7:30 - 8:30")}
            {speech("Omar El Gamal", "8:30 - 9:15", true)}
            {speech("Somaya Tarek", "9:15 - 9:30", false)}
            {speech("Ibrahim Abdelfatah", "9:30 - 9:45", true)}
            {separator("Closing")}

            {/* 
            
            alia
            seif
            hedaya
            salman
            nada
            tamer
            youssef
            omar
            somaya
            ibrahim*/}
        </div>
    </section>);
}