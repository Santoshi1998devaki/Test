import React from "react";
import "./slot.css"


const Slot =(prop)=>{

    // let x="😁";
    // let y="😁";
    // let z="hii";
    let x=prop.x;

    let y = prop.y;

    let z= prop.z;
    
    if(x===y && y===z){
return(
    <>
     <div>
     <h1>{x} {y}{z}</h1>
         <h1>this is matching</h1>
     {/* <hr></hr> */}
     </div>
        
     </>
)

 }
    else{
        return(
     


            <>
            <div>
                <h1>{x} {y}{z}</h1>
                <h1>this is notmatching</h1>
                <hr></hr>
            </div>
            
            </>
        )
    }


}

export default Slot;







