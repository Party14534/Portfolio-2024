import { BackgroundImageStyle } from "@/components/ui/backgroundImage";

export default function Resume() {
    return (
        <main className="flex flex-col h-screen w-full justify-center items-center overflow-hidden"
            style={BackgroundImageStyle}>
            <div className="flex flex-col items-center justify-center w-[80%] h-[95%] pb-20">
                <span className="lg:text-4xl sm:text-2xl font-semibold text-white pb-[1rem]">My Resume</span>
                <p className="lg:text-base sm:text-xs font-light max-w-[50rem] text-white text-center">My resume showcases a culmination of my journey—highlighting my dedication C++ and Desktop Applications. I invite you to explore my personal and professional accomplishments and discover how my expertise can contribute to your next project or team.</p>
                <iframe 
                src="https://drive.google.com/file/d/1v8vF_slGX03cLj8Tn6ATI3iMCwY14AU7/preview" 
                className='w-[60vw] h-[70vh] max-w-[45rem] pb-4 py-8'/>
            </div> 
        </main>
    );
}
