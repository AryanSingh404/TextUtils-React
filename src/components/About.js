// import React, { useState } from 'react'


export default function About(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {

    //     // console.log("toggleStyle")

    //     if (myStyle.color === 'black') {
    //         setMyStyle({

    //             color: 'white',
    //             backgroundColor: 'black'

    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(77, 77, 77)' : 'white'

    }


    return (

        <>
            <div className="container" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(32, 53, 81)' : 'white'}}>
                <h1 className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>About Us</h1>

                <div className="accordion " id="accordionExample" style={myStyle}>
                    <div className="accordion-item my-2" >
                        <h2 className="accordion-header" id="headingOne">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>  Analyze Your text
                                </strong>

                            </button>
                        </h2>
                        <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count , character count or preview.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-2" >
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong> Free to use</strong>
                            </button>
                        </h2>
                        <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-2"   >
                        <h2 className="accordion-header" id="headingThree">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays.<br />
                            <strong> CreatedBy: @ryanSingh</strong>
                             </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container ">
                    <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
                </div> */}

                {/* <div class="form-check form-switch">
                    <input  onClick={toggleStyle} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class ="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
                </div> */}
            </div>
        </>
    )
}
