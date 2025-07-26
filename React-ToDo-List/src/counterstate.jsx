
import { useState } from "react"

export const Counter = () =>{
    const [count , setCount] = useState(0)
    const [step , setStep] = useState(1)
    return(
        <div style={{display : "flex" ,alignItems : 'center' , justifyContent : "center"}   }>
        <h1>{count}</h1>
        <div>
            <label>
                Step
                <input type="text" onChange={(e) => setStep(Number(e.target.value))} />
            </label>
        </div>
        
        <button onClick={() =>{setCount(count + step)}} disabled ={count >= 100}>Increment</button>
        <button onClick={() =>{setCount(count - step)}} disabled={count <= 0}>decrement</button>
        <button onClick={() =>{setCount(0)}}>Reset</button>
        </div>
    )
}