
import Image from "next/image"
import  thefutureofremoteworkimage from "@/public/thefutureofremoteworkimage.webp"



export default function TheFutureofRemoteWork(){
    return(
        <div className="mt-40 ml-20 mr-10">
          <h1 className="text-5xl mb-10">The Future of Remote Work: Trends and Predictions</h1>
          <Image src={thefutureofremoteworkimage} alt="thefutureofremoteworkblog" className=" ml-30 mb-10 rounded-2xl"width={1000} height={400} /> 
<p className="text-2xl mb-5">The COVID-19 pandemic accelerated the shift to remote work, and it's here to stay. As technology advances and workplace norms evolve, remote work will continue to transform the way we collaborate and produce.</p>

<h2 className="text-4xl mb-3">Key Trends in Remote Work:</h2>
<ul className="text-3xl mb-16">
    <li className=" mb-2">Increased Adoption of Cloud-Based Tools</li>
    <li className=" mb-2">Virtual and Augmented Reality Integration</li>
    <li className=" mb-2">AI-Powered Collaboration Platforms</li>
    <li className=" mb-2">Flexible Work Arrangements</li>
    <li className=" mb-2">Enhanced Cybersecurity Measures</li>
</ul>

<h2 className="text-4xl mb-3">Predictions for the Future of Remote Work:</h2>
<ul className="text-3xl mb-16">
    <li className=" mb-2">50% of workforce will work remotely full-time by 2025</li>
    <li className=" mb-2">Virtual offices will become the norm</li>
    <li className=" mb-2">AI-assisted project management will increase productivity</li>
</ul>

<p className="text-2xl mb-5">Looking ahead, the evolution of remote work will require continuous adaptation from both employers and employees. Embracing technology and fostering a strong company culture will be key to thriving in this new landscape.</p> 
        </div>
    )
}