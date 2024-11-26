import profilePic from '../assets/danilo-colella-profile.png'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

function Hero() {
  return (
    <div className='mx-auto w-fit pb-4 mt-8 lg:mb-36 lg:mt-16'>
      <motion.div
        className='flex flex-col-reverse  lg:flex-row-reverse gap-y-4 gap-x-16 items-center lg:justify-end'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <div className='flex flex-col justify-center items-center lg:items-start'>
          <motion.h2
            className='pb-2 text-4xl tracking-tighter lg:text-8xl'
            variants={childVariants}
          >
            Danilo Colella
          </motion.h2>
          <motion.span
            className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'
            variants={childVariants}
          >
            Frontend Developer
          </motion.span>
        </div>
        <motion.img
          src={profilePic}
          width={150}
          height={150}
          alt='Danilo Colella'
          className='border border-stone-900 rounded-3xl'
          variants={childVariants}
        />
      </motion.div>

      <motion.div
        className='flex flex-col items-center lg:items-start'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <motion.p
          className='my-2 max-w-3xl py-6 text-xl leading-relaxed tracking-tighter'
          variants={childVariants}
        >
          I'm a passionate front-end developer with 5 years of hands-on
          experience. I have honed my skills on front-end technologies such as
          React, Angular and Next.js, as well as backend technologies like
          Node.js and MySQL.
          <br />
          Bridging the gap between Development and Design, between Analytical
          and Creative approach, I like delivering effective products with
          exceptional user experiences.
        </motion.p>
        <motion.a
          href='/danilo-colella-resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download
          className='bg-white rounded-full p-4 text-sm text-stone-800'
          variants={childVariants}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero
