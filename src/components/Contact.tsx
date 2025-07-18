import { CONTACT } from '../CONTENT'

function Contact() {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Get in Touch!</h2>
      <p className='my-4 text-center'>{CONTACT.address}</p>
      <div className='text-center tracking-tighter'>
        <a href={`mailto:${CONTACT.email}`} className='border-b'>
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
