import { useState } from "react"
import React from 'react'



export const Form = () => {

    const [user, setUser] = useState({});

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
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Insert Todo:</label>
                        <input type="text" name="name" id="name" onChange={handleClick} />
                        <input type="submit" value="Create" />
                    </div>

                    <div>
                        <div>
                            <label>Priority:</label>
                            <select id="priority" name="priority" onChange={handleClick}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>

                            </select>
                        </div>


                        <div>
                        <label>DeadLine:</label>
                        <input type="date" id="week" name="week" onChange={handleClick} />
                        </div>

                        <div>
                            <label>Tag:</label>
                            <input type="text" name="tag" id="tag" onChange={handleClick}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}