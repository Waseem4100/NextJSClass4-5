import Image from "next/image";
import Link from "next/link";
import github from "@/public/github.png"
import linkdine from "@/public/linkdine.png" 



export default function Contact () {
    
    return (
        <div className="mt-40 ml-20 mr-10">

       
       
       <div className="conectSection  mr-10">


<h5 className="conectHeading">
 ABOUT
</h5>
<p className="conectDescription">
 This website is made as a assignment for class4&5 of Quartar 2 of Governer Initiative Sunday Morning Class . For the Source code of this website click on the github icon 
 
</p>
{ <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/Waseem4100/NextJSClass4-5">
 <Image src={github} alt="github" id="social" />
  </Link>
  <Link href="https://www.linkedin.com/in/waseem-ahmed117068/">
    <Image src={linkdine} alt="linkedin" id="social"/>
  </Link>


</div>  }

</div> 

      
    
  
     

        </div> 
    )}