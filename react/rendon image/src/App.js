import React from "react";
import Netflix from "./rendom";
import data from "./Array";
import "./App.css"
import Slot from "./slot";
import Imgen from "./rendom";
//using components
// function App(){
//     return(
//         <>
//         <h1 className="heading"> Lisyt of top 5 Netflix series in 2022</h1>

//         <Netflix srcimg="https://picsum.photos/200/300?grayscale" link="https://picsum.photos/" title="Netflix original series"/>
//         <Netflix srcimg="https://picsum.photos/200/300?grayscale" link="https://picsum.photos/" title="hdjs nsdsjjd nsdbs"/>
//         <Netflix srcimg="https://picsum.photos/200/300?grayscale" link="https://picsum.photos/" title="hdjs nsdsjjd nsdbs"/>
//         <Netflix srcimg="https://picsum.photos/200/300?grayscale" link="https://picsum.photos/" title="hdjs nsdsjjd nsdbs"/>
//         <Netflix srcimg="https://picsum.photos/200/300?grayscale" link="https://picsum.photos/" title="hdjs nsdsjjd nsdbs"/>

//         </>
//     )
// }

// console.log(data)

//using array
function App(){
    return(
        <>
        <h1 className="heading"> Rendom image</h1>

        <Imgen srcimg={data[0].isrc}
                 title={data[0].htitle}
                 link={data[0].plink}/>
       <Imgen srcimg={data[1].isrc}
                 title={data[1].htitle}
                 link={data[1].plink}/>
       <Imgen srcimg={data[2].isrc}
                 title={data[2].htitle}
                 link={data[2].plink}/>

        <Imgen srcimg={data[3].isrc}
                 title={data[3].htitle}
                 link={data[3].plink}/>

<Imgen srcimg={data[4].isrc}
                 title={data[4].htitle}
                 link={data[4].plink}/>

                 <Netflix srcimg={data[5].isrc}
                 title={data[5].htitle}
                 link={data[5].plink}/>

        </>
    )
}

//using map method

// function App(){
//     return(
//         <>
//         <h1 className="heading"> Lisyt of top 5 Netflix series in 2022</h1>
//          {data.map(function(value){
//              return(
//                 <Netflix srcimg={value.isrc}
//               title={value.htitle}
//               link={value.plink}/>
//              )

//                  })}

//         </>
//     )
// }



// function App() {
//   return (
//     <>
//       <h1 className="head"> Slot machine games</h1>
//       <div className="slotmachine">
//         <Slot x="😁" y="😁" z="😁" />
//        <hr></hr>
//         <Slot x="😁" y="😁" z="🍎"  />
      
//         <Slot x="😁" y="😁" z="🃏"  />
//       </div>
//     </>
//   );
// }

// Hooks

export default App;
