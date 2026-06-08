import Image from "next/image";

/**
 * ProjectCard Parameters
 * @param {string} title - project name text
 * @param {string} description - project description text 
 * @param {string} imageSrc - project image
 * @param {array} skills - list of skills used in project
 * @param {boolean} reverse - is the card reversed?
 * @param {string} projectLink - link to full project
 */

export default function ProjectCard({title, description, imageSrc, skills, reverse, projectLink}) {
  
  const skillsList = [];

  for (let i = 0; i < skills.length; i++){
    skillsList.push(<li key={i} className="text-white border border-white px-2 rounded-xl mx-2">
                      {skills[i]}
                    </li>);
  }
  
  return (
    <div className={`relative columns-2 gap-6 flex justify-between pt-32 ${reverse ? "flex-row-reverse" : ""}`}>
      {/** Project Details */}
      <div className="relative">
        <div className={`relative h-full ${reverse ? "justify-items-end" : ""}`}>
          <div>
            <h6 className="text-purple-400 text-sm tracking-widest uppercase mb-2">
            Featured Project
            </h6>
            <h4 className="font-heading text-4xl text-white mb-6">
              {title}
            </h4>
          </div>
          
          <ol className="absolute flex flex-row bottom-10">
            {skillsList}
          </ol>
        </div>
        

        <div className={`absolute top-1/2 -translate-y-1/2 w-[140%] p-6 rounded-2xl bg-[#111827] border border-white/10 z-50 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,.15)] ${reverse ? "left-[-150px]" : "right-[-150px]"}`}>
          <p className="text-slate-300 leading-7 text-sm font-light">
          {description}
          </p>
        </div>

      </div>
      {/** Project Image */}
      <div className="w-[60%]">
        <a className="relative group block overflow-hidden rounded-xl" href={projectLink} target="_blank" rel="noreferrer noopener">
          <Image className="border border-white/10 rounded-xl shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:brightness-50 group-hover:blur-[2px]"
                 src={imageSrc} 
                 alt={"Test"} 
                 width={800} 
                 height={600}
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Image className=""
                   src={"/images/icons/new-tab-icon.svg"} 
                   alt={"Test"} 
                   width={100} 
                   height={100}
            />
            <span className="mt-3 text-white text-sm tracking-widder uppercase">
              View Project
            </span>
          </div>
        </a> 
      </div>
    </div>
  );
}