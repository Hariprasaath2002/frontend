import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

export const Hooks =()=>
{
    let [Name,setName]=useState("");

    function set(name)
    {
        setName(name.target.value)
    }
    
    function get()
    {
        if(Name==="")
        {
            alert("please enter your name");
        }
        else 
        alert("my name is "+ Name);
    }

return(
    <>
         <div className="row justify-content-center">
            <h1 className="text-center mt-5 ">Name form</h1>
            <div className="col-4 border rounded p-3 mt-5 bg-light text-dark shadow"> 
               <input
               onChange={set}
                   className="form-control"
                   placeholder="enter your name"
               />
               <button className="btn btn-primary mt-4 " onClick={get}>Click here</button>

            </div>

        </div>
    </>
)
}