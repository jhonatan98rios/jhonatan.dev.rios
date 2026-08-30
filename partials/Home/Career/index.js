export default function Career({ content }) {
  return (
    <section className="w-full bg-[#121414] py-16" id="career">
      <h2 className="title text-white text-center mb-16 font-normal">{content.title}</h2>
      <div className="relative w-[90vw] max-w-[900px] mx-auto pb-8
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0
        before:w-[2px] before:bg-[#262a2b] before:-translate-x-1/2
        max-md:before:left-4 max-md:before:translate-x-0">
        {/*
          ponytail: linha #262a2b ecoa as skill bars, dots teal #0eb39c ecoam o fill;
          primeiro item (cargo atual) usa o mesmo gradiente do anel do avatar.
        */}
        {content.jobList.map((job, i) => (
          <div
            key={job.title}
            className="relative w-1/2 py-6
              odd:left-0 odd:text-right odd:pr-12
              even:left-1/2 even:text-left even:pl-12
              max-md:w-full max-md:left-0 max-md:text-left max-md:pl-12 max-md:pr-0"
          >
            <span className="absolute top-10 w-3.5 h-3.5 rounded-full bg-[#0eb39c]
              odd:right-[-8px] even:left-[-8px]
              first:bg-[linear-gradient(135deg,#8B96FF,#00FFC2)]
              max-md:left-[10px] max-md:right-auto" />
            <div className="inline-block">
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
