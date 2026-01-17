import {useState} from "react"

export const useCounter = (inital = 0) =>{
const [count,setCount] = useState(inital);

const increase =(inital)=>{
    setCount((prev) => prev+1);
}
const decrease =(inital)=>{
    setCount((prev) => prev-1);
}
const restart =(inital)=>{
    setCount(0);
}

return {count,increase, decrease, restart};

}