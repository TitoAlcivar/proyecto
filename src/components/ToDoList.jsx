import React from 'react'
import { ToDo } from './ToDo'




export const ToDoList = ({ tasks, setTasks }) => {
    
    return (
        <div className='grid grid-cols-4 gap-3'>
            {
                tasks.map((element, i) => (

                    <ToDo element={element} key={i} setTasks={setTasks} />
                ))
            }
        </div>

    )




}
