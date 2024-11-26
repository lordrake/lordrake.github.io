import { FaAngular, FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMysql, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion, RepeatType } from 'framer-motion'

const iconVariants = (duration: number) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop' as RepeatType,
    },
  },
})

function Technologies() {
  return (
    <section className='pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>
      <motion.div
        className='flex flex-wrap items-center justify-center gap-4'
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          className='p-4'
          initial='initial'
          animate='animate'
          variants={iconVariants(3)}
        >
          <TbBrandNextjs className='text-7xl' />
        </motion.div>
        <motion.div
          className='p-4'
          initial='initial'
          animate='animate'
          variants={iconVariants(5)}
        >
          <FaAngular className='text-7xl text-red-500' />
        </motion.div>
        <motion.div
          className='p-4'
          initial='initial'
          animate='animate'
          variants={iconVariants(2)}
        >
          <SiTypescript className='text-6xl text-blue-400' />
        </motion.div>
        <motion.div
          className='p-4'
          initial='initial'
          animate='animate'
          variants={iconVariants(6)}
        >
          <FaNodeJs className='text-6xl text-green-500' />
        </motion.div>
        <motion.div
          className='p-4'
          initial='initial'
          animate='animate'
          variants={iconVariants(4)}
        >
          <SiMysql className='text-6xl text-orange-400' />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Technologies
