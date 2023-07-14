import { useState } from "react"
import React from 'react'



export const Form = () => {

    const [user, setUser] = useState({});
    console.log(user);

    const handleSubmit = (event) => {
        event.preventDefault();

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
            <div className="flex  border-solid border-emerald-400">
                <form className="flex flex-col " onSubmit={handleSubmit}>
                    <div className="flex ">
                        <label>Insert Todo:</label>
                        <input type="text" name="name" id="name" onChange={handleClick} />
                        <input className="border gap-10" type="submit" value="Create" />
                    </div>

                    <div className="flex flex-col justify-end ">
                        <div className="flex">
                            <label>Priority:</label>
                            <select id="priority" name="priority" onChange={handleClick}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>

                            </select>
                        </div>


                        <div className="flex ">
                            <label>DeadLine:</label>
                            <input type="date" id="week" name="week" onChange={handleClick} />
                        </div>

                        <div className="flex">
                            <label>Tag:</label>
                            <input type="text" name="tag" id="tag" onChange={handleClick} />
                        </div>

                    </div>

                </form>
            </div>


        </>


    )
}