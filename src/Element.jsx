function Element(){
   async function fetching(){
    const res=  await fetch(`https://dog.ceo/api/breeds/list/all`);
    let data=await res.json();
    console.log(data);
      
    }
    return (
        <div>
        <button onClick={()=>fetching()}>Click Me</button>
        </div>
    )
}
export default Element;