import { useRef } from "react"

export const UseRef = () =>{
     const username = useRef(null)
     const password = useRef(null)

     const hendleFormSubmit = (e) =>{
       e.preventDefault()
       console.log(username.current.value , password.current.value)
     }

    return(
        <form onSubmit={hendleFormSubmit}>
            <input type="text" id="username" ref={username} />
            <input type="text" id="password" ref={password}/>
            <button type="submit">Login</button>
        </form>
    )
}