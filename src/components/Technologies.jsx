import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import {FaNodeJs} from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import {motion} from "framer-motion"

const iconVarients = (duration) =>({
  intial:{y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{ opacity: 0, x:-100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVarients(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className='text-7xl  text-cyan-500'/>
        </motion.div>

        <motion.div
        variants={iconVarients(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <TbBrandNextjs className='text-7xl'/>
        </motion.div>

        <motion.div
        variants={iconVarients(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className='text-7xl  text-green-500'/>
        </motion.div>

        <motion.div
        variants={iconVarients(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <BsBootstrap className='text-7xl text-purple-700'/>
        </motion.div>

        <motion.div
        variants={iconVarients(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>

        <motion.div
        variants={iconVarients(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <AiOutlineHtml5 className='text-7xl text-orange-700'/>
        </motion.div>
      </motion.div>

      
    </div>
  )
}

export default Technologies
