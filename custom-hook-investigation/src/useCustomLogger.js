import { useEffect } from "react";

export function useCustomLogger(message) {

    useEffect(()=>{

        console.log(`Logger:${ message }`);
        
    });
}