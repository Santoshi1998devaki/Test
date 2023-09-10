import React from 'react'
import "./rendom.css"
function Image(props){
    return(
        <>
        <div className="cards">
    <div className="card">
           <img className="card_img" src={props.srcimg}/>
        <div className="card_details">
            <p>{props.title}</p>
            <h3>  dark</h3>
            <a href={props.link}>
             <button>Watch now</button>
            </a>

        </div>
    </div>
</div>
        
        </>
    )
}
export default Image;