"use client"
import Image from 'next/image';
import './speakers.css';

function speakerCard(name: string, title: string, description: string, bigdesc: string, src: string, insta: string) {
    return <center>
        <div className='speakerCards flip-card'>
            <div className="flip-card-inner text-start">
                <div className='flip-card-front'>
                    <div className='card-container'>
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
                        <div className="insta font-body">{insta}</div>
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

export default function Speakers() {
    return (<section id="speakers" className="mx-0 w-[100%] max-w-[100vw] mt-[-6.75rem] max-phone:pt-[10rem] max-tablet:pt-[5rem] mb-[4.5rem] relative max-phone:bg-[length:80vh_100px]">
        <div id="speakers-title">Speakers</div>
        <div id="speakers-container" className='max-phone:flex-col max-phone:gap-0 max-phone:p-0'>
            <div id="speakers-container1" className='max-phone:p-0'>
                { speakerCard("Ibrahim Abdelfatah", "The Science of Sleep", "Discover the science of the perfect nap with Ibrahim Abdelfattah at TEDx'24! Uncover the latest evidence-based sleep strategies for peak rejuvenation.", "Has the perfect nap been lying in wait for science to unveil its mysteries? Ibrahim Abdelfattah, our first speaker, will crack the science of perfect naps at this year's TEDx. Join us at TEDx'24 & discover evidence-based sleep science secrets!", "/speakers/ibrahim-abdelfatah.png", "@bima.abf") }
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
            </div>
            <div id="speakers-container2" className='max-phone:p-0'>
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
                <Image className='speakerCards' src="/chained-speaker.png" width="544" height="220" alt='Speaker' />
            </div>
        </div>
    </section>);
}