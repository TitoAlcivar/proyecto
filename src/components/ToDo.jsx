import React from 'react'
import { useState } from 'react'

export const ToDo = ({ element, setTasks }) => {

    const [done, setDone] = useState(true)

    const handleDelete = (event) => {
        event.preventDefault();
        setTasks(prev => prev.filter(task => task.id !== element.id))
    }
    const handleDone = (event) => {

        setDone(prev => !prev)
    }
    return (
        <div className={`border rounded p-5 ${element.priority == "Low" ? "bg-green-300" : element.priority == "Medium" ? "bg-yellow-300" : "bg-red-300"}`}>

            <h1 className={`${done ? null : 'italic line-through'}`}>{element.name}</h1>
            <h3 className={`${done ? null : 'italic line-through'}`}>#{element.tag}</h3>
            <p className={`${done ? null : 'italic line-through'}`}>Priority: {element.priority}</p>
            <p className={`${done ? null : 'italic line-through'}`}>Finish date: {element.week}</p>

            {/* <p>id: {element.id}</p> */}

            <div className='grid grid-cols-2 gap-3 '>
                 <button className='border-solid border-2 border-gray-900 bg-red-500 rounded-md' onClick={handleDelete}>Delete</button>
                 <button className='border-solid border-2 border-gray-900 bg-green-500 rounded-md' onClick={handleDone}>Done</button>
            </div>
        </div>
    )

}
