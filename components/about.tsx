import Image from "next/image";
import "./about.css"
import "../components/about.css"

export default function About() {
  return (
    <section id="about-section" className="relative items-center justify-items-center py-20 w-[80%] | md:w-[70%] md:py-40">
        <div className="absolute top-0 right-0 w-1/2 h-[70%] opacity-50 pointer-events-none z-10">
            <div className="grid-bg z-10"/>
        </div>
        <h2 className="relative text-6xl text-gradient-custom z-20 |  md:text-7xl">
            About
        </h2>
        <p className="relative text-xs text-slate-300 font-light pt-6 text-center | md:text-lg md:pt-10">
            I have always been drawn to technology that solves real business problems. Over the years, I've had the opportunity to work across <span className="font-extrabold text-white">web development, software configuration, cloud infrastructure, networking, and technical support</span>, giving me a broad understanding of how modern systems come together.
        </p>
        <p className="relative text-xs text-slate-300 font-light pt-6 text-center | md:text-lg md:pt-10">
            My professional experience includes <span className="font-extrabold text-white">developing and maintaining websites, managing cloud-hosted environments on AWS, configuring software solutions for enterprise clients, and working with databases, APIs, and networking technologies.</span> This exposure has allowed me to develop a practical, problem-solving mindset and the ability to communicate effectively with both technical teams and business stakeholders.   
            Rather than specializing in a single area, I enjoy being a versatile technology professional who can understand the bigger picture while still contributing hands-on technical solutions. Whether I'm building a website, troubleshooting infrastructure, configuring software, or learning a new technology, I enjoy the process of turning complex problems into reliable solutions.
        </p>
        <p className="relative text-xs text-slate-300 font-light pt-6 text-center | md:text-lg md:pt-10">    
            Today, I'm continuing to expand my knowledge through <span className="font-extrabold text-white">networking and cybersecurity studies, including preparation for the CompTIA Network+ and Security+ certifications</span>, while seeking opportunities where I can contribute, grow, and make a meaningful impact as part of a strong team.
        </p>

        <div className="relative pt-8 z-20 | md:pt-14">
            <a href="/documents/DominicHart_CV_2026.pdf" download>
                <button className="flex flex-row justify-items-center items-center text-white text-sm py-2 px-4 mb-2 rounded-full smooth-scale-110 bg-gradient-custom | md:py-4 md:px-8 md:mb-6 md:text-lg">
                    <p className="p-2">
                        Download CV
                    </p>
                    <Image className="w-5 h-auto | md:w-6" src={"images/icons/download-icon.svg"} alt="download" width={30} height={30}/>
                </button>
            </a>
            
        </div>

        <div id="tech-icons" className="flex flex-wrap justify-center gap-2 px-4 py-20 z-1110 | md:px-20 md:py-40  md:gap| ">
            <Image src={"/images/icons/aws-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"aws logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/C++-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"c++ logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/css3-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"css logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/figma-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"figma logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/github-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"github logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/git-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"git logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/html5-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"html logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/mysql-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"mysql logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/nextjs-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"nextjs logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/php-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"php logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/python-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"python logo"} width={80} height={80}></Image>
            <Image src={"/images/icons/react-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 w-12 h-12 | md:w-28 md:h-28" alt={"react logo"} width={80} height={80}></Image>
        </div>

        <div className="relative w-full h-20 mt-10 flex justify-center items-center | md:h-80 md:mt-40">
            {/* Glowing Orb */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-40
                            ">
                <div className="w-20 h-20 rounded-full
                                bg-gradient-to-b from-cyan-400 via-purple-500 to-fuchsia-500
                                flex items-center justify-center z-20
                                | md:w-60 md:h-60"
                >
                    <img  src="/images/icons/sigma-icon-2.svg" alt="sigma" className="sigma-logo-pulse w-10 h-10 z-110 | md:w-21 md:h-21"/>
                    {/* Purple Glow */}
                    <div className="absolute w-[140px] h-[80px] bg-cyan-400 blur-[30px] opacity-100 rounded-full z-10 top-[20%] 
                                    | md:w-[500px] md:h-[240px] md:blur-[80px] md:top-[30%]"></div> 
                    <div className="absolute w-[80px] h-[80px] bg-fuchsia-600 blur-[14px] opacity-85 rounded-full z-101 top-[15%] 
                                    | md:w-[300px] md:h-[220px] md:blur-[50px] md:top-[30%]"></div> 
                </div>    
            </div>
            
            
            
            {/* Ellipses */}
            <svg className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-full">
                <ellipse cx="50%" cy="45%" rx="50%" ry="55%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>
                <ellipse cx="50%" cy="45%" rx="40%" ry="55%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>
                <ellipse cx="50%" cy="45%" rx="35%" ry="55%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>

                
            </svg>
            <svg className="absolute top-[58%] left-1/2 -translate-x-1/2 w-24 h-20 | md:w-80 md:h-60">
                <ellipse cx="50%" cy="-15%" rx="60%" ry="65%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>
                <ellipse cx="50%" cy="10%" rx="51%" ry="50%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="2"/>
            </svg>
            
            {/* Icons */}
            <div className="absolute left-[0%] top-[50%] | md:left-[0%] top-[50%]">
                <Image className="w-4 h-4 | md:w-10 md:h-10" src="/images/icons/react-logo-purple.svg" alt="react" width={40} height={40}/>
            </div>
            <div className="absolute left-[14%] top-[20%] | md:left-[16%] top-[26%]">
                <Image  className="w-5 h-5 | md:w-10 md:h-10" src="/images/icons/msoffice-logo-purple.svg" alt="microsoft office icon" width={55} height={55}/>
            </div>
            <div className="absolute left-[12%] top-[55%] | md:left-[10%] top-[55%]">
                <Image  className="w-4 h-4 | md:w-10 md:h-10" src="/images/icons/blender-logo-purple.svg" alt="blender icon" width={40} height={40}/>
            </div>
            <div className="absolute left-[7%] top-[98%] | md:left-[7%] top-[98%]">
                <Image  className="w-4 h-4 | md:w-10 md:h-10" src="/images/icons/linux-logo-purple.svg" alt="linux iccon" width={40} height={40}/>
            </div>
            <div className="absolute left-[32%] top-[118%] | md:left-[32%] top-[118%]">
                <Image  className="w-3 h-3 | md:w-8 md:h-8" src="/images/icons/photoshop-logo-purple.svg" alt="photoshop icon" width={30} height={30}/>
            </div>
            <div className="absolute left-[33%] top-[60%] | md:left-[33%] top-[60%]">
                <Image  className="w-3 h-3 | md:w-8 md:h-8" src="/images/icons/wireshark-logo-purple.svg" alt="wireshark icon" width={30} height={30}/>
            </div>
            <div className="absolute left-[62%] top-[70%] | md:left-[62%] top-[70%]">
                <Image  className="w-3 h-3 | md:w-10 md:h-10" src="/images/icons/metasploit-logo-purple.svg" alt="metasploit icon" width={30} height={30}/>
            </div>
            <div className="absolute left-[78%] top-[90%] | md:left-[80%] top-[90%]">
                <Image  className="w-4 h-4 | md:w-10 md:h-10" src="/images/icons/c++-logo-purple.svg" alt="c++ icon" width={40} height={40}/>
            </div>
            <div className="absolute left-[70%] top-[24%] | md:left-[70%] top-[24%]">
                <Image  className="w-3 h-3 | md:w-8 md:h-8" src="/images/icons/javascript-logo-purple.svg" alt="javascript icon" width={30} height={30}/>
            </div>
            <div className="absolute left-[86%] top-[32%] | md:left-[86%] top-[32%]">
                <Image  className="w-3 h-3 | md:w-8 md:h-8" src="/images/icons/linkedin-logo-purple.svg" alt="linkedin icon" width={30} height={30}/>
            </div>
            <div className="absolute left-[96%] top-[80%] | md:left-[96%] top-[84%]">
                <Image className="w-4 h-4 | md:w-10 md:h-10" src="/images/icons/powershell-logo-purple.svg" alt="powershell" width={40} height={40}/>
            </div>
            <div className="absolute left-[97%] top-[50%] | md:left-[95%] top-[50%]">
                <Image  className="w-4 h-4 | md:w-10 md:h-10" src="/images/icons/html-tag-purple.svg" alt="html tag icon" width={40} height={40}/>
            </div>
            <div className="absolute left-[100%] top-[10%] | md:left-[100%] top-[10%]">
                <Image  className="w-4 h-4 | md:w-10 md:h-10" src="/images/icons/git-logo-purple.svg" alt="git icon" width={40} height={40}/>
            </div>
        </div>
    </section>
  );
}