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
        <Card className="h-full bg-zinc-950 border-dotted border-2 flex flex-col items-center justify-between">
            <CardHeader>
                <CardTitle className="text-center text-4xl text-purple-300">{title}</CardTitle>
                <CardDescription className="text-xl text-white text-center">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="w-full">
                    <Image 
                        className=""
                        src={img}
                        alt={alt}
                        style= {{
                            height: '100%',
                            width: 'auto'
                        }}
                    />
                </div>
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
