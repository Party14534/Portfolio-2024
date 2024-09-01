import { BackgroundImageStyle } from "@/components/ui/backgroundImage";

export default function Resume() {
    return (
        <main className="flex flex-col h-[100%] w-full overflow-hidden"
            style={BackgroundImageStyle}>
            <div className="h-screen flex flex-col items-center justify-center pb-20 overflow-hidden">
                <span className="text-4xl font-semibold text-white pb-[1rem]">My Resume</span>
                <p className="text-base font-light max-w-[50rem] text-white text-center">My resume showcases a culmination of my journey—highlighting my dedication C++ and Desktop Applications. I invite you to explore my personal and professional accomplishments and discover how my expertise can contribute to your next project or team.</p>
                <iframe 
                src="https://drive.google.com/file/d/1v8vF_slGX03cLj8Tn6ATI3iMCwY14AU7/preview" 
                className='w-[60vw] h-[70vh] max-w-[45rem] pb-4 py-8'/>
            </div> 
        </main>
    );
}
