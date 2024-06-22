import { useState } from "react";
function Element(){
    const [data,setData]=useState(null);
   async function fetching(){
    const res=  await fetch(`https://dog.ceo/api/breeds/list/all`);
   let rec=await res.json();
   console.log(rec);
   setData(rec);
   
      
    }
    return (
        <div>
        <button onClick={()=>fetching()}>Click Me</button>
        {
            data&&<p>Data received loaded in console</p>
        }
        </div>
    )
}
export default Element;