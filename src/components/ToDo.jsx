import React from 'react'
import { Form } from './Form'

export const ToDo = ({ form }) => {

    return (
        <>
            <div>

                <div>

                    <div>

                        <p>Priority:{form}</p>
                        <p>Finish: {form}</p>
                        <p>Date: {form}</p>

                    </div>

                    <div>

                        <button>Delete</button>
                        <button>Done</button>

                    </div>

                </div>

            </div>


        </>
    )


}
