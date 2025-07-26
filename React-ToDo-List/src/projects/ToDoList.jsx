import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";


export const ToDoList =  ({ data , onHandleDeleteToDo}) =>{
    return(
        <li  className="todo-item">
                <span>{data}</span>
                <button className="check-btn">
                  <IoMdCheckmark />   
                </button>
                <button className="delete-btn" onClick = {() =>onHandleDeleteToDo(data)}>
                  <MdDeleteForever />
                </button>
              </li>
    )
}