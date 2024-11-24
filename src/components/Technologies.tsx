import { FaAngular, FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

function Technologies() {
  return (
    <section className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
        <div className='p-4'>
          <TbBrandNextjs className='text-7xl' />
        </div>
        <div className='p-4'>
          <FaAngular className='text-7xl text-red-500' />
        </div>
        <div className='p-4'>
          <SiTypescript className='text-6xl text-blue-400' />
        </div>
        <div className='p-4'>
          <FaNodeJs className='text-6xl text-green-500' />
        </div>
      </div>
    </section>
  )
}

export default Technologies
