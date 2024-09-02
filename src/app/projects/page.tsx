import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Project } from "@/components/ui/project";

import chessImg from './../../../public/chessImg.png'
import wordleImg from './../../../public/wordleImg.png'
import pingImg from './../../../public/pingImg.png'
import tetrisImg from './../../../public/tetrisImg.png'
import buildImg from './../../../public/buildImg.png'
import { BackgroundImageStyle } from "@/components/ui/backgroundImage";

const tetrisDescription: string = "ZTRIS is a TUI tetris clone created in GO using the tview package to render the TUI";
const chessDescription: string ="I created a fully featured Chess game with 4 bots and Stockfish support using C++ and the SFML graphics library";
const wordleDescription: string = "I developed a wordle inspired web game with javascript using Angular.js for the backend and hosted the project using Azure";
const pingDescription: string = "I created an end-to-end network analyzer to test VCU's Wi-fi network for packet loss in Java and C";
const buildDescription: string = "BuildFromBat is a C++ build tool that scans your project's directory and creates a script to compile your project";

export default function Home() {    
    return (
        <main className="flex flex-col h-screen w-full items-center justify-center overflow-hidden"
            style={BackgroundImageStyle}>
            <div className="flex flex-col items-center justify-center w-[80%] h-[50%] pb-20">
                <span className="lg:text-4xl sm:text-2xl font-semibold text-white text-center pb-2">My Projects</span>
                <Carousel className="w-full pb-4" opts={{ loop: true }}>
                    <CarouselContent className="">
                        <CarouselItem className="flex w-full justify-center items-center">
                            <Project 
                                title="ZTRIS: Terminal Tetris" 
                                description={tetrisDescription}
                                img={tetrisImg}
                                repo="https://github.com/Party14534/ZTRIS"
                                alt="ZTRIS: Terminal Tetris Image"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Project 
                                title="Chess Game" 
                                description={chessDescription} 
                                img={chessImg}
                                repo="https://github.com/Party14534/chessGame"
                                alt="Chess Game Image"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Project 
                                title="BuildFromBat" 
                                description={buildDescription}
                                img={buildImg}
                                repo="https://github.com/Party14534/BuildFromBat"
                                alt="BuildFromBat Image"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Project 
                                title="Wordle Inspired Game" 
                                description={wordleDescription}
                                img={wordleImg}
                                repo="https://github.com/Party14534/FiveLetterWordGameWebsite"
                                alt="Wordle Project Image"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Project 
                                title="Network Packet Loss Analyzer" 
                                description={pingDescription}
                                img={pingImg}
                                repo="https://github.com/Party14534/440Java"
                                alt="Network Packet Loss Analyzer Image"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </main>
  );
}

