import { useEffect, useState } from "react"
import { Reading } from "./value"

export let Readings=(position)=>
{
    const [studnetdetials, setStudentdetails] = useState(
        {
            studnetname:"",
            studnetage:0,
            studnetemail:"",
            studentplace:"",
            pinnumber:0

        }
    )

    useEffect(()=>
    {
        setStudentdetails(Reading(position.who))
    }
    )
    return(
        <>
        <div className="row justify-content-center mt-5">
            <div className="card col-5 bg-danger p-3 text-white ">
                <h1 className="card-title text-center">MY Details</h1>
                <p className="card-text text-justify">
                Hello gd afternoon.
                First of all Thankyou for giving me this opportunity to introduce myself.
                My name is Anuja Srivastava.
                I’m from Kanpur but currently staying in Kota.
                I did my post-graduation in M.A. English from Kanpur University. I also completed BED. From Kanpur University. I have teaching experience of 7 years. My strengths are good listening, honesty, and hard work.
                My hobbies are reading books, cooking, and listening to music.
                </p>
                <ul>
                <li>{studnetdetials.studentname}</li>
                <li>{studnetdetials.studentage}</li>
                <li>{studnetdetials.studentplace}</li>
                <li>{studnetdetials.studentemail}</li>
                <li>{studnetdetials.pinnumber}</li>
            </ul>
            </div>
            
        </div>
        </>
    )
}