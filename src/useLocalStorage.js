// import { useState, useEffect } from "react";

// export const useLocalStorage = (key, defaultValue) => {

    
//         const storedValue = localStorage.getItem(key)
//         const initialValue = storedValue ? JSON.stringify(storedValue) : defaultValue;
//         const [vote, setVote] = useState(initialValue)
        
        
    
//     useEffect(()=> {
//         localStorage.setItem(key, JSON.stringify(vote));

//     }, [key, vote])

//     return [vote, setVote]
// }