import Image from "next/image";

interface ProjectCardLargeProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  role: string;
  projectURL: string;
}

export default function ProjectCard({
  title, 
  description, 
  imageSrc, 
  technologies, 
  role, 
  projectURL
}: ProjectCardLargeProps) {
    return(
        <div className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-500
                        hover:border-purple-500/40 hover:-translate-y-1 shadow-[0_0_50px_rgba(0,0,0,.25)]">
      
            {/* Image */}
            <div className="relative overflow-hidden">
                <Image src={imageSrc} alt={title} width={1200} height={800} 
                       className=" w-full h-[40%] object-cover transition-all duration-700 group-hover:scale-105"/>

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050014] via-transparent to-transparent"/>
            </div>

            {/* Content */}
            <div className="p-8 | md:p-12">
                <span className="text-sm uppercase tracking-[0.25em] text-cyan-400 | md:text-lg">
                    {role}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white | md:text-5xl md:pb-2 md:pt-1">
                    {title}
                </h3>

                <p className="mt-4 text-xs text-slate-300 leading-relaxed | md:text-lg">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 | md:text-lg">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Button */}
                {projectURL && (
                    <a
                        href={projectURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm mt-6 inline-flex items-center text-cyan-400 transition-colors duration-300 hover:text-purple-400 | md:text-2xl md:mt-8"
                    >
                        View Project →
                    </a>
                )}
            </div>
        </div>
    );
}