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
                       className=" w-full h-[350px] object-cover transition-all duration-700 group-hover:scale-105"/>

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050014] via-transparent to-transparent"/>
            </div>

            {/* Content */}
            <div className="p-8">
                <span className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    {role}
                </span>

                <h3 className="mt-2 text-3xl font-bold text-white">
                {title}
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                {description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
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
                        className="mt-8 inline-flex items-center text-cyan-400 transition-colors duration-300 hover:text-purple-400"
                    >
                        View Project →
                    </a>
                )}
            </div>
        </div>
    );
}