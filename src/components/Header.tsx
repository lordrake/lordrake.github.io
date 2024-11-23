import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import logo from '../assets/danilo-colella-logo.svg'

function Header() {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home' className='mx-2 text-4xl font-light'>
          <img src={logo} width={100} />
        </a>
      </div>

      <div className='my-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href='https://www.linkedin.com/in/danilo-colella-5b545610a/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://www.instagram.com/danilo.colella/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
        <a
          href='mailto:danilocolella17@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <IoIosSend />
        </a>
      </div>
    </nav>
  )
}

export default Header
