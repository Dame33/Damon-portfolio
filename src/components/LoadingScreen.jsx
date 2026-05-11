import { useState, useEffect } from 'react';

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fullText = "Damon Lam";

    useEffect(() => {
        let index = 0; //this part keeps track of what letter we are going through in fullText, so it has typing effect
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length){
                clearInterval(interval)
                setTimeout( () => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);


    return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"> 

        <div className ="mb-4 text-4xl font-mono font-bold">
            {text} <span className ="animate-blink ml-1"> | </span>
        </div>

        <div className = "w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden" >
            <div className ="w-[40%] h-full bg-[#1ed760] shadow-[0_0_15px_#1ed760] animate-loading-bar">

            </div>
        </div>

    </div>

    )
}
