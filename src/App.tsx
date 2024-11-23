import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
        <div className='relative h-full w-full bg-black'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'></div>
          <div className='absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]'></div>
        </div>
      </div>

      <div className='container mx-auto px-8'>
        <Header />
        <Hero />
        <h1 className='block mx-auto my-auto text-center text-3xl text-white'>
          Work in progress...
        </h1>

        <section className='mt-4'>
          <h3 className='my-4 text-2xl font-bold'>Vanilla JS</h3>
          <ul className='list-inside list-disc'>
            <li>
              <a href='https://lordrake.github.io/todo-app/' target='_blank'>
                To Do app
              </a>
            </li>
            <li>
              <a
                href='https://lordrake.github.io/random-quote-generator/'
                target='_blank'
              >
                Random Quote Generator
              </a>
            </li>
            <li>
              <a href='https://lordrake.github.io/memory-game/' target='_blank'>
                Memory game
              </a>
            </li>
          </ul>

          <h3 className='my-4 text-2xl font-bold'>ReactJS</h3>
          <ul className='list-inside list-disc'>
            <li>
              <a href='https://lordrake.github.io/tris-app/' target='_blank'>
                Tris
              </a>
            </li>
            <li>
              <a
                href='https://lordrake.github.io/colors-generator/'
                target='_blank'
              >
                Colors Generator
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
