"use client"
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{y:"-200vh"}}
      animate={{y:"0%"}}
      transition={{duration:1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-4 overflow-hidden">
        {/* IMAGE CONTAINER */}
        <div className="flex-1 lg:flex-none lg:h-full lg:w-1/2 relative min-h-[250px]">
          <Image src="/profile8.png" alt="" fill className="object-contain object-top lg:object-center"/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex-1 lg:w-1/2 flex flex-col gap-4 lg:gap-8 items-center justify-center pb-4 lg:pb-0">
          <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Hi, I am June — a Full-Stack Developer
          </div>
          <div className="text-sm md:text-base lg:text-xl">
            I have 7 years of experience building web applications 
            across different stacks and technologies. 
            Currently focused on React and Node.js, 
            I enjoy understanding how things work 
            and building products that actually work. 
            Open to remote opportunities.
          </div>
          <div className="flex gap-4 w-full">
            <Link href="/portfolio">
              <button className="p-3 lg:p-4 rounded-lg ring-1 ring-black bg-black text-white text-sm lg:text-base">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-3 lg:p-4 rounded-lg ring-1 ring-black text-sm lg:text-base">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;