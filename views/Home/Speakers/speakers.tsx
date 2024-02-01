"use client"
import Image from 'next/image';
import './speakers.css';

function speakerCard(name: string, title: string, description: string, bigdesc: string) {
    return <center>
        <div className='speakerCards flip-card'>
            <div className="flip-card-inner text-start">
                <div className='flip-card-front'>
                    <div className='card-container'>
                        <div className="image-container"><Image width="200" height="200" src="https://www.w3schools.com/howto/img_avatar.png" alt="Speaker Image" className="speaker-image" /></div>
                        <div className="card-content content-container">
                            <div className="speaker-name w-[18.25rem]">{name}</div>
                            <div className="speech-title w-[18.25rem]">{title}</div>
                            <div className="speaker-description w-[18.25rem] font-body" style={{lineHeight: "1.25rem"}}>{description}</div>
                        </div>
                    </div>
                </div>

                <div className="flip-card-back">
                    <div className="instaDate-container">
                        <div className="insta font-body">@da_great_alex</div>
                        <div className="date font-body">17/2/2023, 2:00 PM</div>
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
    return (<section id="speakers" className="mx-0 w-[100%] max-w-[100vw] pt-[6.75rem] max-phone:pt-[10rem] max-tablet:pt-[5rem] mb-[4.5rem] relative max-phone:bg-[length:80vh_100px]">
        <div id="speakers-title">Speakers</div>
        <div id="speakers-container" className='max-phone:flex-col max-phone:gap-0 max-phone:p-0'>
            <div id="speakers-container1" className='max-phone:p-0'>
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
            </div>
            <div id="speakers-container2" className='max-phone:p-0'>
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
                { speakerCard("Alex Morrison", "Speech Title", "Alex will emphasize on the idea that happiness isn't linked with the name of the place you're traveling to; you can still enjoy your time by exploring local hidden gems in Egypt.", "") }
            </div>
        </div>
    </section>);
}