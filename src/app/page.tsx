"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BackgroundImageStyle } from '@/components/ui/backgroundImage';

import githubIcon from './../../public/githubIconLight.png'
import linkedInIcon from './../../public/linkedinIcon.png'
import indeedIcon from './../../public/indeedIcon.png'

export default function Home() {    
    return (
        <main className="flex flex-col h-screen w-full bg-zinc-800 overflow-hidden" style={BackgroundImageStyle}>
            <div className="relative content-start flex flex-col text-left w-[80%] h-[95%] justify-end overflow-hidden pl-8 pb-20">
                <span className='text-5xl lg:text-6xl mf:text-6xl sm:text-6xl font-thin text-white'>Hello, </span>
                <span className='text-7xl lg:text-8xl md:text-8xl sm:text-8xl text-white'>I'm
                <span className='text-7xl lg:text-8xl md:text-8xl sm:text-8xl [color:rgb(230,215,255)]'> Zach</span>
                </span>
                <p className='lg:text-2xl font-light text-white max-w-lg'>I am a senior at Virginia Commonwealth University majoring in Computer Science. I am a skilled programmer with experience developing web and desktop apps on Windows, Linux, and Mac</p>
                <div className="flex flex-wrap items-center justify-start gap-2 my-4">
                    <Button asChild variant="secondary" className='bg-transparent border-white border-2 rounded-full w-10 h-10 p-2 mx-4'>
                        <Link href='https://Github.com/Party14534'> 
                            <Image 
                                src={githubIcon}
                                alt="Github Logo"
                                style={{
                                    width: '75%',
                                    height: 'auto'
                                }}
                            />
                        </Link>
                    </Button>
                    <Button asChild variant="secondary" className='bg-transparent border-white border-2 rounded-full w-10 h-10 p-2 mx-4'>
                        <Link href='https://www.linkedin.com/in/zachariah-dellimore-8630ba161/'> 
                            <Image 
                                src={linkedInIcon}
                                alt="LinkedIn Logo"
                                style={{
                                    width: '75%',
                                    height: 'auto'
                                }}
                            />
                        </Link>
                    </Button>
                    <Button asChild variant="secondary" className='bg-transparent border-white border-2 rounded-full w-10 h-10 p-2 mx-4'>
                        <Link href='https://profile.indeed.com/p/zachariahd-qjr403f'> 
                            <Image 
                                src={indeedIcon}
                                alt="Indeed Logo"
                                style={{
                                    width: '75%',
                                    height: 'auto'
                                }}
                            />
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
  );
}
