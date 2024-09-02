import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import Image, { StaticImageData } from "next/image";
import { Button } from "./button";
import Link from "next/link";

import btnImage from './../../../public/githubIconDark.png'

interface ProjectProps {
    title: string,
    description: string,
    repo: string,
    img: StaticImageData,
    alt: string
};

function Project({
    title,
    description,
    repo,
    img,
    alt
}: ProjectProps) {
    return (
        <Card className="flex flex-col h-[80vh] items-center justify-center bg-zinc-950 border-dotted border-2">
            <CardHeader>
                <CardTitle className="text-center lg:text-4xl sm:text-2xl text-purple-300">{title}</CardTitle>
                <CardDescription className="lg:text-xl sm:text-md text-white text-center">{description}</CardDescription>
            </CardHeader>
            <CardContent className="relative aspect-square w-[95%]">
                    <Image 
                        src={img}
                        alt={alt}
                        placeholder="blur"
                        fill
                        priority
                        style={{
                            objectFit: 'contain',
                        }}
                    />
            </CardContent>
            <CardFooter>
                <Button asChild className='flex flex-row gap-2 bg-white max-w-40 min-h-4 my-4'>
                    <Link href={repo}> 
                        <Image 
                            src={btnImage}
                            alt="Github Logo"
                            height={20}
                        />
                        <p className='text-black text-l'>Github Repo</p>
                    </Link>
                </Button>
            </CardFooter>
        </Card>    
    );
}

export { Project }
