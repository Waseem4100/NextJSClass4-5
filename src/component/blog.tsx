import Image from "next/image"
import Link from "next/link"
import digitalnomadimage from "@/public/digitalnomadimage.webp"
import sustainablefashionimage from "@/public/sustainablefashionimage.webp"
import electricvehiclesimage from "@/public/electricvehiclesimage.webp"
import  theriseofaiineverydaylifeimage  from "@/public/theriseofaiineverydaylifeimage.webp"
import  thefutureofremoteworkimage  from "@/public/thefutureofremoteworkimage.webp"
import  exploringthemetaverseimage from "@/public/exploringthemetaverseimage.webp"

type Idata ={
  Title : string, 
  Description: string,

}

const data : Idata[]= [{Title:"The Digital Nomad Lifestyle: Working from Paradise",Description:"hi"}]

export default function Blog() {
    
    return (
      <div>

     <div className="blogContainer">
    

       <div className="blogCard">
        <div className="blogImage">
          <Image src={digitalnomadimage} alt="calculator" className="blogImage"  /> 
        </div> 
        <h1 className="blogTitle">The Digital Nomad Lifestyle: Working from Paradise</h1>
        <p className="blogDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="blogButton">
        <Link href={`/digitalnomad`}><li className="bloglink">READ MORE</li></Link>
       
          
          </ul>
      </div>

      <div className="blogCard">
        <div className="blogImage" >
         <Image src={sustainablefashionimage} alt="calculator"  className="blogImage" /> 
        </div>
        <h1 className="blogTitle">The Rise of Sustainable Fashion: Era of Eco-Friendly Clothing</h1>
        <p className="blogDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="blogButton">
        <Link href={`/sustainablefashion`}><li className="bloglink">READ MORE</li></Link>
       
          
          </ul>
      </div>

      <div className="blogCard">
        <div  className="blogImage">
        <Image src={electricvehiclesimage} alt="calculator"  className="blogImage" /> 
        </div>
        <h1 className="blogTitle">The Future of Electric Vehicles: Driving Towards Sustainability</h1>
        <p className="blogDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="blogButton">
        <Link href=  {`electricvehicles`}><li className="bloglink">READ MORE</li></Link>
      
          
          </ul>



      </div>


       <div className="blogCard">
        <div className="blogImage">
        <Image src={exploringthemetaverseimage} alt="calculator"  className="blogImage" /> 
        </div> 
        <h1 className="blogTitle">Exploring the Metaverse: A New Digital Frontier</h1>
        <p className="blogDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="blogButton">
        <Link href={`/exploringthemetaverse`}><li className="bloglink">READ MORE</li></Link>
     
          
          </ul>
      </div>

      <div className="blogCard">
        <div className="blogImage" >
        <Image src={thefutureofremoteworkimage} alt="calculator"  className="blogImage" /> 
        </div>
        <h1 className="blogTitle">The Future of Remote Work: Trends and Predictions</h1>
        <p className="blogDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="blogButton">
      <Link href={`/thefutureofremotework`}><li className="bloglink">READ MORE</li></Link>
       
          </ul>
      </div>

      <div className="blogCard">
        <div  className="blogImage">
        <Image src={theriseofaiineverydaylifeimage} alt="calculator"  className="blogImage" /> 
        </div>
        <h1 className="blogTitle">The Rise of AI in Everyday Life</h1>
        <p className="blogDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="blogButton">
        <Link href={`/theriseofaiineverydaylife`}><li className="bloglink"> READ MORE</li></Link>
        
          </ul>
      </div>

      </div>
     


     </div>
     

   
    )}