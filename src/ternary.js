import { useState } from 'react';


export let Ternary = () => {

    const [inputvalue, setInputvalue] = useState("");

    function setter(temp) {
        setInputvalue(temp.target.value);
    }

    const [cssstyle, setCssstyle] = useState(
        {
            backgroundImage: 'url()'
        }
    )

    // ternary Operator
    function Action() {
        inputvalue === "summer" ?
            setCssstyle({ backgroundImage: `url(${'summerseason.jpeg'})`}) :
            inputvalue === "yellow" ?
                setCssstyle({ backgroundImage: `url("./images/winterseason.jpg")` }) :
                inputvalue === "seagreen" ?
                setCssstyle({
                    backgroundImage:`url(${'some.jpeg'})`,
                    
                }):
                setCssstyle({
                    backgroundImage:`url(${'some.jpeg'})`
                })
        // setDisplay(inputvalue);
    }

    // const [display, setDisplay] = useState("");

    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-5 mt-3'>
                    <input
                        onChange={setter}
                        className='form-control'
                        placeholder='enter your season'
                    />
                    <button className='btn btn-outline-warning mt-4'
                        onClick={Action}
                    >Click Me!</button>
                    <div className='mt-4'>
                        <p style={cssstyle}>                    
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
