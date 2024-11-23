import profilePic from '../assets/danilo-colella-profile.png'

function Hero() {
  return (
    <div className='mx-auto w-100 lg:w-3/4 pb-4 mt-8 lg:mb-36 lg:mt-16'>
      <div className='flex flex-col-reverse  lg:flex-row-reverse gap-y-4 gap-x-16 items-center lg:justify-end'>
        <div className='flex flex-col justify-center items-center lg:items-start'>
          <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
            Danilo Colella
          </h2>
          <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
            Frontend Developer
          </span>
        </div>
        <img
          src={profilePic}
          width={150}
          height={150}
          alt='Danilo Colella'
          className='border border-stone-900 rounded-3xl'
        />
      </div>

      <div className='flex flex-col items-center lg:items-start'>
        <p className='my-2 max-w-3xl py-6 text-xl leading-relaxed tracking-tighter'>
          I'm a passionate front-end developer with 5 years of hands-on
          experience. I have honed my skills on front-end technologies such as
          React, Angular and Next.js, as well as backend technologies like
          Node.js and MySQL.
          <br />
          Bridging the gap between Development and Design, between Analytical
          and Creative approach, I like delivering effective products with
          exceptional user experiences.
        </p>
      </div>
    </div>
  )
}

export default Hero
