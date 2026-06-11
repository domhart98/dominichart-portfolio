import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  skills: string[];
  reverse: boolean;
  projectLink: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  skills,
  reverse,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className={`relative pt-6 md:pt-32 md:flex md:justify-between ${reverse ? "md:flex-row-reverse" : ""}`}>
      {/* MOBILE LAYOUT */}
      <div className="block md:hidden">
        
        <h6 className="text-purple-400 text-sm tracking-widest uppercase mb-2">
          Featured Project
        </h6>
        <h4 className="font-heading text-2xl text-white mb-6">
          {title}
        </h4>

        <a href={projectLink} target="_blank" rel="noreferrer noopener" className="relative group block overflow-hidden">
          <Image src={imageSrc} alt={title} width={800} height={600} 
                 className="w-full h-auto rounded-tl-xl rounded-tr-xl border border-white/10 shadow-2xl"
          />
          <div className=" absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Image src="/images/icons/new-tab-icon.svg" alt="View Project" width={60} height={60}/>
            <span className="mt-3 text-white text-sm uppercase">
              View Project
            </span>
          </div>
        </a>

        <div className="p-6 rounded-bl-xl rounded-br-xl bg-[#111827] border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,.15)]">
          <p className="text-slate-300 leading-7 text-xs font-light">
            {description}
          </p>
        </div>

        <ol className="flex flex-wrap gap-2 mt-6">
          {skills.map((skill, index) => (
            <li key={index} className=" text-xs text-white border border-white/20 px-3 py-1 rounded-full">
              {skill}
            </li>
          ))}
        </ol>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex justify-between w-full">

        {/* Details */}
        <div className="relative">
          <div className={`relative h-full ${reverse ? "" : ""}`}>
            <div>
              <h6 className="text-purple-400 text-sm tracking-widest uppercase mb-2">
                Featured Project
              </h6>
              <h4 className="font-heading text-4xl text-white mb-6">
                {title}
              </h4>
            </div>

            <ol className=" absolute bottom-10 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-lg text-white border border-white/20 px-3 py-1 rounded-full">
                  {skill}
                </li>
              ))}
            </ol>

          </div>

          <div className={`absolute top-1/2 -translate-y-1/2 w-[140%] p-6 rounded-2xl bg-[#111827] border border-white/10 z-50 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,.15)]
                         ${reverse ? "right-[-150px]" : "right-[-150px]"}`}
          >
            <p className="text-slate-300 leading-7 text-md font-light">
              {description}
            </p>
          </div>

        </div>

        {/* Image */}
        <div className="w-[60%]">
          <a  className="relative group block overflow-hidden rounded-xl" href={projectLink} target="_blank" rel="noreferrer noopener">
            <Image className="border border-white/10 rounded-xl shadow-2xl transition-all duration-300 
                   group-hover:-translate-y-2 group-hover:brightness-50 group-hover:blur-[2px]"
                   src={imageSrc} alt={title} width={800} height={600}/>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Image src="/images/icons/new-tab-icon.svg" alt="View Project" width={100} height={100}/>
              <span className="mt-3 text-white text-sm uppercase">
                View Project
              </span>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}