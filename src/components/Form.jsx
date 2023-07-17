import { useState } from "react"
import React from 'react'
import { v4 as uuidv4 } from 'uuid';




export const Form = ({setTasks}) => {

    const [user, setUser] = useState({priority: "Low",});
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setTasks(prev => {
            return [
                ...prev, {...user, id : uuidv4()}
            ]
        })
        

        console.log(user);
    }

    const handleClick = (event) => {
        setUser(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }

        })
    }



    return (
        <>
            <div className="" >
                <form className= "flex flex-col gap-3 " onSubmit={handleSubmit}>
                    <div className="flex gap-1">
                        <label>Insert Todo:</label>
                        <input className="border-solid border-2 border-gray-900 rounded-md" type="text" name="name" id="name" onChange={handleClick} />
                        <div className="flex flex-col gap-2 ">
                        <input className="border-solid border-2 border-gray-900 rounded-md " type="submit" value="Create" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <label>Priority:</label>
                            <select className="border-solid border-2 border-gray-900 rounded-md" id="priority" name="priority" onChange={handleClick}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>

                            </select>
                        </div>


                        <div className="flex gap-1 ">
                            <label>DeadLine:</label>
                            <input className="border-solid border-2 border-gray-900 rounded-md" type="date" id="week" name="week" onChange={handleClick} />
                        </div>

                        <div className="flex gap-1">
                            <label>Tag:</label>
                            <input className="border-solid border-2 border-gray-900 rounded-md " type="text" name="tag" id="tag" onChange={handleClick} />
                        </div>

                    </div>

                </form>
            </div>


        </>


    )
}