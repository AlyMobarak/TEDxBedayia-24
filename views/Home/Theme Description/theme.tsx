"use client"
import Image from 'next/image';
import './theme.css';

export default function Theme() {
    return (<section id="theme" className="mx-0 w-[100%] max-w-[100vw] mt-16 mb-[4.5rem] relative">
        <Image src="/theme-star.png" alt="" width="120" height="120" className='absolute top-4 left-[16rem] max-phone:hidden'></Image>
        <Image src="/theme-moon.png" alt="" width="129" height="120" className='absolute top-[20rem] right-[22rem] rotate-12 max-phone:hidden'></Image>
        <div>
            <Image width="1440" height="540" src="/theme-title.png" alt="" className='w-[40rem] max-phone:w-[95vw]'></Image>
            <p className="text-white text-center font-body w-[40rem] max-phone:w-[85vw] mt-4 max-phone:mt-3 max-tablet:mt-2">The term <div className='bg-accent rounded-[0.75rem] font-bold pl-4 pr-2 inline-flex align-start justify-start m-0 w-max py-1'><span>Dreamscape</span><Image className="h-4 w-4" src="/mini-stars-dreamscape.png" height={28} width={25} alt=''></Image></div> evokes a sense of wonder and fascination, transporting us to a world where we delve into the vast landscapes of our minds, with limitless imagination. It symbolizes the power of dreams, both big and small, to shape our lives and the world around us. Dreamscape is a reminder that remarkable achievements often begin with a simple dream, a spark of inspiration that leads to innovation.</p>
        </div>
    </section>);
}