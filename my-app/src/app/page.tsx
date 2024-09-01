"use client";
import btnImage from './../../public/githubIconDark.png'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BackgroundImageStyle } from '@/components/ui/backgroundImage';

export default function Home() {    
    return (
        <main className="fixed min-h-screen bg-zinc-800 overflow-hidden" style={BackgroundImageStyle}>
            <div className="relative content-start flex flex-col text-left w-screen h-screen justify-end overflow-hidden pl-8 pb-20">
                <span className='text-6xl font-thin text-white'>Hello, </span>
                <span className='text-8xl text-white'>I'm
                <span className='text-8xl [color:rgb(230,215,255)]'> Zach</span>
                </span>
                <p className='text-2xl font-light text-white max-w-lg'>I am a senior at Virginia Commonwealth University majoring in Computer Science. I am a skilled programmer with experience developing web and desktop apps on Windows, Linux, and Mac</p>
            <Button asChild className='bg-white justify-evenly max-w-80 min-h-20 my-4'>
                <Link href='https://Github.com/Party14534'> 
                    <Image 
                        src={btnImage}
                        alt="Github Logo"
                        height={50}
                    />
                    <p className='text-black text-2xl'>My Github</p>
                </Link>
            </Button>
            </div>
        </main>
  );
}
