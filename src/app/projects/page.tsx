import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Project } from "@/components/ui/project";

import chessImg from './../../../public/chessImg.png'
import wordleImg from './../../../public/wordleImg.png'
import pingImg from './../../../public/pingImg.png'
import { BackgroundImageStyle } from "@/components/ui/backgroundImage";

const chessDescription: string ="I created a fully featured Chess game with 4 bots and Stockfish support using C++ and the SFML graphics library";
const wordleDescription: string = "I developed a wordle inspired web game with javascript using Angular.js for the backend and hosting with Azure";
const pingDescription: string = "I created an end-to-end network analyzer to test VCU's Wi-fi network for packet loss in Java and C";


export default function Home() {    
    return (
        <main className="fixed flex flex-col items-center justify-center h-screen w-full overflow-hidden"
            style={BackgroundImageStyle}>
            <div className="flex flex-col items-center justify-center pb-20">
                <Carousel className="w-full max-w-lg flex justify-content items-center">
                    <CarouselContent>
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

