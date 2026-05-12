"use client"
import Brain from "@/components/brain";
import {motion, useInView, useScroll} from "framer-motion"
import { useRef } from "react"
const AboutPage = () => {

  const containerRef = useRef()
  const {scrollYProgress} = useScroll({container:containerRef})

  const skillRef = useRef()
  // const isSkillRefInView = useInView(skillRef,{once:true})
  const isSkillRefInView = useInView(skillRef,{margin:"-100px"})


  const experienceRef = useRef()
  // const isexperienceRefInView = useInView(experienceRef,{once:true})
  const isExperienceRefInView = useInView(experienceRef,{margin:"-100px"})

  return (
    <motion.div
      className="h-full"
      initial={{y:"-200vh"}}
      animate={{y:"0%"}}
      transition={{duration:1}}
    >
      {/* CONTAINER */}
      
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}> 
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-xl">I'm a developer with 7 years of experience 
                who started with C# and PHP, 
                and found my passion in modern JavaScript. 

                I enjoy understanding how things work — 
                not just making them work. 
                Every bug I've fixed and every feature I've built 
                has made me think deeper about the craft.

                Currently focused on React and Node.js, 
                and open to remote opportunities 
                where I can keep growing and contribute meaningfully.</p>
            {/* BIOGRAPHY QUOTE */}           
            <span className="italic">"I write code from Phang-nga, Thailand 🌊
            — but I build for anywhere."
            </span>
            {/* BIOGRAPHY SCROLL SVG */}  
            <motion.svg 
              initial={{opacity:0.2 , y:0}}
              animate={{opacity:1 , y:"10px"}}
              transition={{repeat:Infinity ,duration:3 , ease:"easeInOut"}}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 6V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </motion.svg>
            
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* SKILLS LISTS */}
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="flex flex-wrap gap-4">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PostgreSQL</div>

              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Vue.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">C#</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">PHP</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">MySQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Angular</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black"> MySQL / SQL Server </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Git</div>
            
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg 
              initial={{opacity:0.2 , y:0}}
              animate={{opacity:1 , y:"10px"}}
              transition={{repeat:Infinity ,duration:3 , ease:"easeInOut"}}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 6V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1 initial={{x:"-300px"}} animate={ isExperienceRefInView ? {x:"0"}: {}} transition={{delay:0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{x:"-300px"}} animate={ isExperienceRefInView ? {x:"0"}: {}} transition={{delay:0.2}} className="">
              {/* EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3  ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Self Development</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">Built full-stack applications using React, Node.js, 
Next.js and MongoDB — including a booking platform 
and personal portfolio website.</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">2025 - Present</div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit"></div> */}
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 1*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Freelance Developer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">Developed and customized WordPress/PHP solutions for clients.</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">2025</div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit"></div> */}
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3  "></div>
              </div>
              {/* EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3  ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Software Developer </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">Built large-scale tour booking system, real estate platform and LMS customization using C#, Vue.js, PHP and WordPress under Agile/CI-CD workflow.</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">2019-2024</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Softsq</div></div>
              </div>
              {/* EXPERIENCE LIST ITEM 3*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Junior Programmer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Developed desktop applications and database architecture using C#/.NET, WPF and SQL.</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">2018</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Quark System</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3  "></div>
              </div>
            </motion.div>

          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>
    </motion.div>
  )
}

export default AboutPage;