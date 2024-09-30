import Image from "next/image";
import SS from "../public/SS.png";


export default function Home() {
  return (
    
    

    <div className="Home">
     
      <div className="Main">

      <div className="intro">

      <h1>Hi!<br />Im <span id="name">Waseem Ahmed</span> <br />Next Js Developer</h1>

      </div>
      <div className="picture">

       <Image src={SS} alt="profilePicture"  loading="lazy"  id="picture"/>
 
       </div>

      </div>
     </div>
      );
}
