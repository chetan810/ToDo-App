import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import {Git} from '../components/Git'

export const ToDoList =  ({ data , onHandleDeleteToDo}) =>{
    return(
        <li  className="todo-item">
                <span>{data}</span>
                <button className="check-btn">
                  <Git />
                  <IoMdCheckmark />   
                </button>
                <button className="delete-btn" onClick = {() =>onHandleDeleteToDo(data)}>
                  <MdDeleteForever />
                </button>
              </li>
    )
}