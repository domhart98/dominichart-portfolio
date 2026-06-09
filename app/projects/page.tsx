import ProjectCardLarge from "@/components/project_card_large";
import Image from "next/image";
import "../globals.css"

export default function ProjectsPage(){
    return(
        <div className="justify-items-center m-60">
            
            <h2 className="relative text-6xl md:text-7xl text-gradient-custom">Featured Projects</h2>
            <div className="w-[80%] mt-20">
                <ProjectCardLarge
                    title="Smart Living Barbados"
                    role="Web Development"
                    imageSrc="/images/smartliving-home.webp"
                    projectURL="https://smartlivingbarbados.com"
                    technologies={[
                        "WordPress",
                        "PHP",
                        "JavaScript",
                        "Google Maps API",
                        "Cloudflare",
                    ]}
                    description="
                        Developed and maintained a property management platform
                        featuring property listings, search functionality and
                        map integrations for Barbados real estate.
                    "
                />
            </div>
            
            <div className="w-[80%] mt-40">
                <ProjectCardLarge
                    title="Carolina's Barbados"
                    role="Web Development"
                    imageSrc="/images/carolinas-home.webp"
                    projectURL="https://carolinasbarbados.com"
                    technologies={[
                        "WordPress",
                        "PHP",
                        "JavaScript",
                        "Cloudflare",
                        "AWS Hosting",
                    ]}
                    description="
                        Developed and maintained the online presence for Carolina's Barbados,
                        creating a responsive website designed to showcase the business and
                        improve customer engagement across desktop and mobile devices.
                        Implemented custom functionality, content management workflows,
                        performance optimizations and ongoing site updates.
                    "
                />
            </div>
            
            <div className="w-[80%] mt-40">
                <ProjectCardLarge
                    title="Dominic Hart Portfolio"
                    role="Web Development ◆ UI Design"
                    imageSrc="/images/portfolio-banner.webp"
                    projectURL="https://dominichart.com"
                    technologies={[
                        "Next.js",
                        "React",
                        "Typescript",
                        "Tailwind CSS",
                        "AWS Hosting",
                    ]}
                    description="
                        Designed and developed my personal portfolio site to showcase
                        professional web development projects, skills, and experience.
                        Features include a dynamic hero banner, interactive project cards,
                        resume download, contact form, and a cybersecurity learning section.
                        Fully responsive and optimized for performance and accessibility.
                    "
                />
            </div>

            <h2 className="relative text-6xl md:text-7xl text-gradient-custom mt-40">Cybersecurity Learning</h2>
            <div className="w-[80%] mt-40">
                <ProjectCardLarge
                    title="TryHackMe Learning Journey"
                    role="Cybersecurity"
                    imageSrc="/images/tryhackme-profile.webp"
                    projectURL="https://tryhackme.com/p/dominic.am.hart"
                    technologies={[
                        "Networking",
                        "Cryptography",
                        "Linux",
                        "Metasploit",
                        "Web Security",
                    ]}
                    description="
                        Completed hands-on labs covering networking,
                        exploitation, cryptography, Linux administration,
                        privilege escalation and web application security.
                    "
                />
            </div>
        </div>
    )
}