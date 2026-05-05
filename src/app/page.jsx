"use client"
import {motion} from "framer-motion"
import  Image from "next/image"
const Homepage = () => {
  return (
  <motion.div
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
  >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINNER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain"></Image>
      </div>
      {/* TEXT CONTAINNER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <div className="text-4xl md:text-6xl font-bold">Hi, I am June — a Full-Stack Developer</div>
        {/* DESC */}
        <div className="md:text-xl">I have 7 years of experience building web applications 
          across different stacks and technologies. 
          Currently focused on React and Node.js, 
          I enjoy understanding how things work 
          and building products that actually work. 
          Open to remote opportunities.
        </div>
        {/* BUTTON */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>

        </div>

      </div>

    </div>
  </motion.div>
  );
};

export default Homepage;
