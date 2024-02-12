import { useEffect, useState } from "react";
import { Form } from "./Form.js";
import { List, Reading } from "./value.js";
import { Readings } from "./Read.js";

export let Mainpage = () => {
    const [Createpage, setCreatepage] = useState(false);
    const [Tempvalues, setTempvalues] = useState([]);
    const [Readpage, setReadpage]=useState(false);
    const [position,setPositon]=useState(0);

    useEffect(() => {
        setTempvalues(List);
    }); 

    return (
        <>
            {
                (Createpage)?
                <>
                    <Form />
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
                            <thead>
                                <tr>
                                    <th>StudentNAME</th>
                                    <th>StudentAGE</th>
                                    <th>StudentPLACE</th>
                                    <th>StudentMAILID</th>
                                    <th>PIN CODE</th>
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
                                                        <td>
                                                            <button
                                                            onClick={()=>
                                                            {
                                                                setReadpage(true);
                                                                setPositon(index)
                                                            }}>Read</button>
                                                            <button>Update</button>
                                                            <button>Delete</button>
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
