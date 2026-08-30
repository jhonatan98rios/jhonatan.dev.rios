export default function Career({ content }) {
  return (
    <section className="w-full bg-[#121414] py-16" id="career">
      <h2 className="title text-white text-center mb-16 font-normal">{content.title}</h2>
      <div className="relative w-[90vw] max-w-[900px] mx-auto pb-8
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0
        before:w-[2px] before:bg-[#262a2b] before:-translate-x-1/2
        max-md:before:left-4 max-md:before:translate-x-0">
        {/*
          ponytail: zigzag central — lado decidido pelo índice (i % 2), sem nth-child;
          dot sempre na borda do item encostado na linha central.
          Primeiro item (cargo atual) usa o gradiente do anel do avatar.
        */}
        {content.jobList.map((job, i) => {
          const left = i % 2 === 0
          return (
            <div
              key={job.title}
              className={`relative w-1/2 py-6
                max-md:w-full max-md:left-0 max-md:text-left max-md:pl-12 max-md:pr-0
                ${left
                  ? 'left-0 text-right pr-12'
                  : 'left-1/2 text-left pl-12'}`}
            >
              <span className={`absolute top-10 w-3.5 h-3.5 rounded-full
                max-md:left-[10px] max-md:right-auto
                ${left ? 'right-[-8px]' : 'left-[-8px]'}
                ${i === 0 ? 'bg-[linear-gradient(135deg,#8B96FF,#00FFC2)]' : 'bg-[#0eb39c]'}`} />
              <div>
                <span className="block text-[13px] text-[#9aa3a5]">{job.period}</span>
                <h3 className="subtitle text-white my-1">{job.title}</h3>
                <p className="m-0 text-base font-light text-[#0eb39c]">{job.role}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
