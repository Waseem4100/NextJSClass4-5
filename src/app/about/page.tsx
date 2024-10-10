"use client";
import react,{ useTransition, useState} from "react";
import Image from "next/image"
import about from "@/public/about.jpg"

export default function About() {

  // const[tab,setTab] = useState("skills")
  // const [startTransition,isPending] = useTransition();

  // const handleTabChange = (id)=>{
  //   startTransition{()=>{
  //     setTab(id)
  //   }}

  // }
     
    return (
        <div className="text-white">

          <div className="  md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16  "></div>

          <Image src={about} alt="about" loading="lazy" width={500} height={500}  />

         <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse molestiae dignissimos animi facilis dolore voluptates rem laudantium non iusto, odio dolores, repellendus vero iure corporis magni pariatur suscipit! Expedita.</p>
         
         <div className="flex flex-row mt-8">
          <span className="mr-3 font-semibold hover:text-white text-[#ADB7Be] border-b border-purple-500">Skill</span>
          <span>Education</span>
          <span>Experience</span>

         </div>
         </div>
     
       
         
      </div>
    )}