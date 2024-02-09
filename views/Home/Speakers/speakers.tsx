"use client"
import Image from 'next/image';
import './speakers.css';

function speakerCard(name: string, title: string, description: string, bigdesc: string, src: string, insta: string) {
    return <center style={{
    display: "flex",
    margin: 0,
    padding: 0,
    gap: 0,
    justifyContent: "center",
    alignItems: "center"
}}>
        <div className='speakerCards flip-card max-phone:p-0 max-phone:m-0'>
            <div className="flip-card-inner text-start">
                <div className='flip-card-front'>
                    <div className='card-container max-phone:p-0 max-phone:m-0'>
                        <div className="image-container"><Image width="200" height="200" src={src} alt="Speaker Image" className="speaker-image" /></div>
                        <div className="card-content content-container">
                            <div className="speaker-name w-[20rem]">{name}</div>
                            <div className="speech-title w-[18.25rem]">{title}</div>
                            <div className="speaker-description w-[18.25rem] font-body" style={{lineHeight: "1.25rem"}}>{description}</div>
                        </div>
                    </div>
                </div>

                <div className="flip-card-back">
                    <div className="instaDate-container">
                        <a href={`https://www.instagram.com/${insta}/`} className="insta font-body cursor-pointer">@{insta}</a>
                        <div className="date font-body">16/2/2023, xx:xx PM</div>
                    </div>
                    <div className="text-container font-body" style={{lineHeight: "1.25rem"}}>
                        {bigdesc}
                    </div>
                </div>
            </div>
        </div>
    </center>
}

function chainedCard() {
    return <center style={{
    display: "flex",
    margin: 0,
    padding: 0,
    gap: 0,
    justifyContent: "center",
    alignItems: "center"
}}>
    <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
</center>
}
export default function Speakers() {
    return (<section id="speakers" className="mx-0 w-[100%] max-w-[100vw] mt-[-6.75rem] max-phone:pt-[10rem] max-tablet:pt-[5rem] mb-[4.5rem]">
        <div id="speakers-title" className='font-title max-phone:margin-negative-top max-phone:mt-[-5rem]'>Speakers</div>
        <div className='flex flex-row justify-center items-center'><span className="text-center w-screen text-text-gray-dark font-small font-semibold max-phone:hidden">Hover me to view more information!</span></div>
        <div id="speakers-container" className='max-phone:flex-col w-screen max-phone:gap-0 max-phone:p-0 max-phone:m-0'>
            <div id="speakers-container1" className='max-phone:p-0 max-phone:m-0 max-phone:flex-col'>
                { speakerCard("Ibrahim Abdelfatah", "The Science of Sleep", "Discover the science of the perfect nap with Ibrahim Abdelfattah at TEDx'24! Uncover the latest evidence-based sleep strategies for peak rejuvenation.", "Has the perfect nap been lying in wait for science to unveil its mysteries? Ibrahim Abdelfattah, our first speaker, will crack the science of perfect naps at this year's TEDx. Join us at TEDx'24 & discover evidence-based sleep science secrets!", "/speakers/ibrahim-abdelfatah.png", "bima.abf") }
                { speakerCard("Seif Aly", "Power of Multi-Talent", "Delve into his life as a passionate filmmaker and watch as he reveals how animated marvels are born from the fusion of media. Anticipate a journey that promises to dazzle your senses!", "Seif Aly, a multi-talented kaleidoscope of creativity, will share his journey as a passionate filmmaker on the TEDx stage. Seif will help you travel into the compelling world of animation; a world where bright landscapes emerge from the blurred boundaries of other media! Await his speech at TEDx 2024!!", "/speakers/seif-aly.png", "seifali.1") }
                { speakerCard("Youssef Sabry", "Behind the scenes of Podcasts", "Tune in to the TEDx stage on February 16th for an auditory adventure with Youssef Sabry, a master podcaster. Reserve your ticket to a speech that could change your listens into learning!", "From microphone to mindshare, Youssef Sabry, a podcast owner, will take the TEDx stage on the 16th of February. In a speech centered around business secrets & his podcast, Youssef will definitely transform your commute into a masterclass with his alluring insights! Don't miss his speech!", "/speakers/youssef-sabry.png", "youssefsabry") }
                { chainedCard() }
                { chainedCard() }
            </div>
            <div id="speakers-container2" className='max-phone:p-0 max-phone:flex-col'>
                { speakerCard("Salman Fakhry", "Pschology behind Addictions", "Get ready to laugh and learn as he unpacks the science behind our minds with captivating stories. Don't miss out on this blend of insight and fun!", "Prepare to deeply delve into human psychology with Salman Fakhry, a tenth grader whose wit is as sharp as his cognizance. In a speech that plights to both stimulate your intellect & make you laugh, Salman will digest the fascinating science of psychology, one hilarious anecdote at a time. Don't miss his speech at TEDx'24!", "/speakers/salman-fakhry.png", "N/A") }
                { speakerCard("Tamer Bashir", "Drifting into the World of Cars", "Catch Tamer Bashir at TEDx, where the TV host and avid car lover takes you on a high-speed journey from the fast lane to the heart of his fervent career path.", "Ever dreamed of living life in the fast lane? Join TV presenter & car enthusiast Tamer Bashir as he accelerates for a riveting TEDx talk. Tamer's speech will delve swerving off the road & discovering a passionate career detour! Buckle up for an exhilarating TEDx talk that's sure to fuel your drive!", "/speakers/tamer-bashir.png", "tamerbashir") }
                { chainedCard() }
                { chainedCard() }
                { chainedCard() }
            </div>
        </div>
    </section>);
}