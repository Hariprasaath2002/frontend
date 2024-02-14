import { useEffect, useState } from "react";
import { Form } from "./Form.js";
import { Fetchexact, List, Reading } from "./value.js";
import { Readings } from "./Read.js";
import { Remove1 } from "./value.js";
import { Updatepage } from "./updatevalue.js";

export let Mainpage = () => {
    const [Createpage, setCreatepage] = useState(false);
    const [Tempvalues, setTempvalues] = useState([]);
    const [Readpage, setReadpage]=useState(false);
    const [position,setPositon]=useState(0);
    const [updatepage, setUpdatepage] = useState(false);
    const [obj, setObj] = useState([]);

    useEffect(() => {
        setTempvalues(List);
    }); 

    return (
        <>
            {
                (Createpage)?
                <>
                    <Form/>
                    <div className="d-flex justify-content-center mt-5">
                    <button
                        className="btn btn-danger "
                        onClick={() => {
                            setCreatepage(false);
                        }}
                    >
                        Back
                    </button>

                    </div>
                </>
                :
                (Readpage)?
                    <>
                        <Readings who={position}/>
                        <div className="d-flex justify-content-center my-4">
                        <button
                        className="btn btn-primary"
                        onClick={
                            ()=>
                            {
                                setReadpage(false)
                            }
                        }                        
                        >
                            Back
                        </button>

                        </div>
                    
                    </>
                    :
                (updatepage)?
                    <>
                        <Updatepage who={position} mention={obj}/>
                        <button
                        onClick={()=>
                        {
                            setUpdatepage(false);
                        }}
                        >BACK
                        </button>

                    </>
                    :
                    <>
                    <div className=" d-flex justify-content-center mt-4">
                        <button
                            className="btn btn-danger "
                            onClick={() => {
                                setCreatepage(true);
                            }}
                        >
                            Registerpage
                        </button>
                    </div>
                    <div className='container mt-5'>
                        <table className='table table-striped table-bordered'>
                            <thead className="text-center">
                                <tr>
                                    <th>StudentNAME</th>
                                    <th>StudentAGE</th>
                                    <th>StudentPLACE</th>
                                    <th>StudentMAILID</th>
                                    <th>PIN CODE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        Tempvalues.map(
                                            (element, index) =>
                                                <>
                                                    <tr>
                                                        <td>{element.studentname}</td>
                                                        <td>{element.studentage}</td>
                                                        <td>{element.studentplace}</td>
                                                        <td>{element.studentemail}</td>
                                                        <td>{element.pinnumber}</td>
                                                        <td >
                                                            <button className="me-2"
                                                            onClick={()=>
                                                            {
                                                                setReadpage(true);
                                                                setPositon(index)
                                                            }}>Read</button>
                                                            <button className="me-2"
                                                            onClick={()=>
                                                            {
                                                                setUpdatepage(true);
                                                                setPositon(index);
                                                                setObj(Fetchexact(element.studentname))
                                                            }}
                                                            >Update</button>
                                                            <button
                                                            onClick={()=>{
                                                                setTempvalues(Remove1(index));
                                                            }}
                                                            >Delete</button>
                                                        </td>
                                                    </tr>
                                            </>
                                        )
                                    }
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </>
    );
};
