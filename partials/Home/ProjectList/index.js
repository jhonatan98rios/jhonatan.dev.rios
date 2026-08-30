import { useRef, useState } from 'react'
import ProjectCard from '../../../components/Projects/ProjectCard'

function Section({ label, text, tags }) {
  return (
    <div className="mt-6">
      <h4 className="text-xs font-light uppercase tracking-widest text-teal-300">{label}</h4>
      {tags ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm font-light text-white/90">
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-base font-light leading-6 text-white/70">{text}</p>
      )}
    </div>
  )
}

export default function ProjectList({ content }) {
  const trackRef = useRef(null)
  const [selected, setSelected] = useState(0)
  const projects = content.projectList || []
  const card = projects[selected]

  function scroll(dir) {
    const track = trackRef.current
    if (!track) return
    // 16 = gap-4 entre os cards
    const step = (track.children[0]?.offsetWidth || 320) + 16
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="overflow-hidden bg-[#121414] py-16">
      <div className="mx-auto w-[90vw] max-w-[1280px]">
        <h1 className="mb-12 text-center text-2xl font-light text-white">{content.title}</h1>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => scroll(-1)}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40 text-2xl text-white transition-colors hover:bg-black/70 sm:flex"
          >
            ‹
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} card={project} active={i === selected} onSelect={() => setSelected(i)} />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next projects"
            onClick={() => scroll(1)}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40 text-2xl text-white transition-colors hover:bg-black/70 sm:flex"
          >
            ›
          </button>
        </div>

        {card && (
          <div className="mt-10 rounded-3xl border-2 border-white/20 bg-[#1a1d1f] p-6 text-white md:p-10">
            <h3 className="text-2xl font-light">{card.title}</h3>
            <p className="mt-4 text-lg font-light leading-7 text-white/80">{card.description}</p>

            {card.objective && <Section label="Objective" text={card.objective} />}
            {card.stack?.length > 0 && <Section label="Stack" tags={card.stack} />}
            {card.architecture && <Section label="Architecture" text={card.architecture} />}
            {card.infra && <Section label="Infrastructure" text={card.infra} />}

            {(card.link || card.github) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {card.link && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-52 items-center justify-center rounded-lg border-2 border-white text-sm font-light text-white transition-colors hover:bg-white hover:text-black"
                  >
                    View
                  </a>
                )}
                {card.github && (
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center text-sm font-light text-white underline underline-offset-4 transition-colors hover:text-white/70"
                  >
                    Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
