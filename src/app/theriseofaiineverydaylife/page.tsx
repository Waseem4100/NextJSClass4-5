import Image from "next/image"
import  theriseofaiineverydaylifeimage from "@/public/theriseofaiineverydaylifeimage.webp"




export default function TheRiseofAIinEverydayLife(){
    return(
    <div className="mt-40 ml-20 mr-10"> 
      <h1 className="text-5xl mb-10">The Rise of AI in Everyday Life: Transforming the Way We Live, Work, and Interact</h1>
      <Image src={theriseofaiineverydaylifeimage} alt="theriseofaiineverydaylifeblog" className=" ml-30 mb-10 rounded-2xl"width={1000} height={400} /> 
    <p className="text-2xl mb-5">Artificial Intelligence (AI) is no longer a futuristic concept; it's a reality that's increasingly integrated into our daily lives. From virtual assistants to smart home devices, AI is revolutionizing the way we live, work, and interact.</p>
    
    <h2 className="text-4xl mb-3">Key Applications of AI in Everyday Life:</h2>
    <ul  className="text-3xl mb-16">
        <li className=" mb-2">Virtual Assistants (e.g., Siri, Alexa)</li>
        <li className=" mb-2">Image and Speech Recognition</li>
        <li className=" mb-2">Personalized Recommendations (e.g., Netflix, Amazon)</li>
        <li className=" mb-2">Smart Home Automation</li>
        <li className=" mb-2">Healthcare and Fitness Tracking</li>
    </ul>
    
    <h2 className="text-4xl mb-3 ">Benefits of AI in Everyday Life:</h2>
    <ul className="text-3xl mb-16">
        <li className=" mb-2">Increased Efficiency</li>
        <li className=" mb-2">Enhanced Productivity</li>
        <li className=" mb-2">Improved Decision-Making</li>
        <li className=" mb-2">Personalized Experiences</li>
        <li className=" mb-2">Enhanced Safety and Security</li>
    </ul>
    
    
      
    </div>
            
    )
}