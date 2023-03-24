import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {


    const [value, setValue] = useState(() => {
        // read the intial value from localstorage

        const val = localStorage.getItem(key);
        const savedValue = JSON.parse(val);
        console.log(savedValue);

        if (savedValue) {
            return savedValue;
        }
        return initialValue;
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];


}