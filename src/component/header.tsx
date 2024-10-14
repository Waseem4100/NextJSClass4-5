


import Link from "next/link"

// const hide = 

// function hideElement(){
 
//   if(hide.style.display=="none"){
//     hide.style.display="block"
// }
//   else if(hide.style.display=="block"){
//     hide.style.display="none"
// }


// }



export default function Header (){
 
    
    return(
       
        <div >

        <header id="header" > 


       <h3 className="logo">  <Link href={`/`}> BLOGWEB</Link> </h3>
      
     {/* <div>
        <button onClick={hideElement}> ==</button>
       </div> */}
    
     <ul className="header-button" id="hide">
      <Link href={`/`}> <li className="header-btn">Home</li></Link> 
      <Link href={`/contact`}> <li className="header-btn">Contact</li></Link>
      <Link href={`/about`}> <li className="header-btn">About</li></Link>
     
        </ul>
  
        </header>   
         
        </div>
      

    )
}