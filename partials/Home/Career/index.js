export default function Career({ content }) {
  return (
    <section className="w-full bg-[#121414] py-16" id="career">
      <h2 className="title text-white text-center mb-16 font-normal">{content.title}</h2>
      <div className="relative w-[90vw] max-w-[900px] mx-auto pb-8
        before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0
        before:w-[2px] before:bg-[#262a2b]">
        {/*
          ponytail: timeline de linha única à esquerda — sem alternância zigzag,
          dot sempre centrado na linha via left-4 + -translate-x-1/2 (mesma posição em
          qualquer viewport). Primeiro item (cargo atual) usa o gradiente do anel do avatar.
        */}
        {content.jobList.map((job, i) => (
          <div key={job.title} className="relative pl-14 py-6">
            <span className={`absolute top-10 left-4 -translate-x-1/2 w-3.5 h-3.5 rounded-full
              ${i === 0 ? 'bg-[linear-gradient(135deg,#8B96FF,#00FFC2)]' : 'bg-[#0eb39c]'}`} />
            <div>
              <span className="block text-[13px] text-[#9aa3a5]">{job.period}</span>
              <h3 className="subtitle text-white my-1">{job.title}</h3>
              <p className="m-0 text-base font-light text-[#0eb39c]">{job.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
