import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     // {
    //     //      color: 'red',
    //     //      backgroundColor: 'black',
    //     //     border:'1px solid red'
    //     // }
    //     {
    //         color: 'black',
    //         backgroundColor: 'white',
    //     //    border:'1px solid black'
    //    }
    //    );

    let myStyle = {
        color : props.mode === 'dark'? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }
    // const [btntext, setBtnText] = useState("Enable Light Mode");

//     const toogleStyle = () => {
//        if(myStyle.color === 'red')
//        {
//         setMyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setBtnText('Enable Dark Mode')
//        }
//        else{
//         setMyStyle({
//             color:'red',
//             backgroundColor:'black',
//             border:'1px solid red'
//        })
//        setBtnText('Enable Light Mode')
//     }
// }

    
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'? 'white' : '#042743'}}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, 
                        until the collapse plugin adds the appropriate classNamees that we use to style each element. 
                        These classNamees control the overall appearance, as well as the showing and hiding via CSS 
                        transitions. You can modify any of this with custom CSS or overriding our default variables. 
                        It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow. */}
                        TextUtils gives you  a way to analyze  your text  quickly and  efficiently. Be it word count, character count
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, 
                        until the collapse plugin adds the appropriate classNamees that we use to style each element. 
                        These classNamees control the overall appearance, as well as the showing and hiding via CSS 
                        transitions. You can modify any of this with custom CSS or overriding our default variables. 
                        It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow. */}
                        TextUtils is a free character counter tool that provides instance character count and word count
                        statistics for a given text. TextUtils reports the number of words and characters. This it is 
                        suitable for writing text with word/characters limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, 
                        until the collapse plugin adds the appropriate classNamees that we use to style each element. 
                        These classNamees control the overall appearance, as well as the showing and hiding via CSS 
                        transitions. You can modify any of this with custom CSS or overriding our default variables. 
                        It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                        though the transition does limit overflow. */}
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. 
                        It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="my-3">
            <button className='btn btn-primary' onClick={toogleStyle} >{btntext}</button>
        </div> */}
    </div>
    </>
  )
}
