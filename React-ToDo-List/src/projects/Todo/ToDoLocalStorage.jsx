const Todokey  = "reactTodo"

export const getLocalStorageTodoData = () =>{
    const rawTodos = localStorage.getItem(Todokey)
    if(!rawTodos) return[]
    return JSON.parse(rawTodos) 
 }
export const setLocalStorageTodoData = (task) =>{
     localStorage.setItem(Todokey , JSON.stringify(task))

 }