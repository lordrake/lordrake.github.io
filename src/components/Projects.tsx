import { PROJECTS } from '../CONTENT'

function Projects() {
  console.log(PROJECTS)
  return (
    <section className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div className='block md:grid grid-cols-2 gap-16 max-w-3xl mx-auto'>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='mb-12 flex flex-col lg:flex-row items-center justify-center lg:items-start flex-wrap gap-x-6 gap-y-6'
          >
            <div className='w-full lg:w-1/2 flex-shrink'>
              <img
                src={project.image}
                alt={project.title}
                width={'100%'}
                height={250}
                className='rounded'
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4 lg:text-center'>
              <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
              <p className='mb-4 text-stone-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className='mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300'
                  key={index}
                >
                  {tech}
                </span>
              ))}
              <a
                href={project.url}
                className='my-4 mt-8 block font-bold text-xs underline underline-offset-4'
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
