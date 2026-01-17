import { useState } from "react"

export const useToggle = (intial = false) => {
    const [state , setState] = useState(intial);

const toggling = ()=>{
    setState((prev)=>!prev);
}
    return [state,toggling]
}