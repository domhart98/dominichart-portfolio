import Image from "next/image";
import "./about.css"
import "../components/about.css"

export default function About() {
  return (
    <section id="about-section" className="relative items-center justify-items-center w-[70%] py-40">
        <div className="absolute top-0 right-0 w-1/2 h-[70%] opacity-50 pointer-events-none z-10">
            <div className="grid-bg z-10"/>
        </div>
        <h2 className="relative text-6xl md:text-7xl text-gradient-custom z-20">About</h2>
        <p className="relative text-slate-300 text-lg font-light pt-10 text-center">
            I have always been drawn to technology that solves real business problems. Over the years, I've had the opportunity to work across web development, software configuration, cloud infrastructure, networking, and technical support, giving me a broad understanding of how modern systems come together.
        </p>
        <p className="relative text-slate-300 text-lg font-light pt-10 text-center">
            My professional experience includes developing and maintaining websites, managing cloud-hosted environments on AWS, configuring software solutions for enterprise clients, and working with databases, APIs, and networking technologies. This exposure has allowed me to develop a practical, problem-solving mindset and the ability to communicate effectively with both technical teams and business stakeholders.   
            Rather than specializing in a single area, I enjoy being a versatile technology professional who can understand the bigger picture while still contributing hands-on technical solutions. Whether I'm building a website, troubleshooting infrastructure, configuring software, or learning a new technology, I enjoy the process of turning complex problems into reliable solutions.
        </p>
        <p className="relative text-slate-300 text-lg font-light pt-10 text-center">    
            Today, I'm continuing to expand my knowledge through networking and cybersecurity studies, including preparation for the CompTIA Network+ and Security+ certifications, while seeking opportunities where I can contribute, grow, and make a meaningful impact as part of a strong team.
        </p>

        <div className="relative pt-14 z-20">
            <a href="/documents/DominicHart_CV_2026.pdf" download>
                <button className="flex flex-row justify-items-center items-center mb-6 text-white font-medium py-4 px-4 rounded-full smooth-scale-110 bg-gradient-custom px-8">
                    <p className="p-2">
                        Download CV
                    </p>
                    <Image className="" src={"images/icons/download-icon.svg"} alt="download" width={30} height={30}/>
                </button>
            </a>
            
        </div>

        <div id="tech-icons" className="flex flex-wrap justify-center gap-4 px-80 py-40 z-1110">
            <Image src={"/images/icons/aws-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/C++-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/css3-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/figma-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/github-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/git-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/html5-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/mysql-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/nextjs-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/php-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/python-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
            <Image src={"/images/icons/react-logo.svg"}  className="bg-[#251E2E] rounded-full p-2 z-20" alt={""} width={80} height={80}></Image>
        </div>

        <div className="relative w-full h-80 mt-40 flex justify-center items-center">
            {/* Glowing Orb */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-100
                            ">
                <div className="w-60 h-60 rounded-full
                                bg-gradient-to-b from-cyan-400 via-purple-500 to-fuchsia-500
                                flex items-center justify-center z-20"
                >
                    <img src="/images/icons/sigma-icon-2.svg" alt="sigma" className="sigma-logo-pulse w-20 h-20 z-110"/>
                    {/* Purple Glow */}
                    <div className="absolute w-[500px] h-[240px] bg-cyan-400 blur-[100px] rounded-full z-10 top-[30%]"></div> 
                    <div className="absolute w-[300px] h-[200px] bg-fuchsia-600 blur-[45px] opacity-95 rounded-full z-101 top-[30%]"></div> 
                </div>    
            </div>
            
            
            
            {/* Ellipses */}
            <svg className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-full">
                <ellipse cx="50%" cy="45%" rx="50%" ry="55%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>
                <ellipse cx="50%" cy="45%" rx="40%" ry="55%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>
                <ellipse cx="50%" cy="45%" rx="35%" ry="55%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>

                
            </svg>
            <svg className="absolute top-[58%] left-1/2 -translate-x-1/2 w-90 h-60">
                <ellipse cx="50%" cy="-15%" rx="60%" ry="65%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="1"/>
                <ellipse cx="50%" cy="10%" rx="51%" ry="50%" fill="none" stroke="rgba(255,255,255,0.15" strokeWidth="2"/>
            </svg>
            
            {/* Icons */}
            <div className="absolute left-[-15] top-50">
                <Image src="/images/icons/react-logo-purple.svg" alt="react" width={40} height={40}/>
            </div>
            <div className="absolute right-6 top-1/2">
                <Image src="/images/icons/powershell-logo-purple.svg" alt="powershell" width={40} height={40}/>
            </div>
            <div className="absolute right-60 top-20">
                <Image src="/images/icons/html-tag-purple.svg" alt="html tag icon" width={40} height={40}/>
            </div>
            <div className="absolute left-40 top-35">
                <Image src="/images/icons/msoffice-logo-purple.svg" alt="microsoft office icon" width={55} height={55}/>
            </div>
            <div className="absolute right-53 top-40">
                <Image src="/images/icons/git-logo-purple.svg" alt="git icon" width={40} height={40}/>
            </div>
            <div className="absolute left-29 top-63">
                <Image src="/images/icons/blender-logo-purple.svg" alt="blender icon" width={40} height={40}/>
            </div>
            <div className="absolute left-120 top-96">
                <Image src="/images/icons/linux-logo-purple.svg" alt="linux iccon" width={40} height={40}/>
            </div>
            <div className="absolute left-90 top-20">
                <Image src="/images/icons/photoshop-logo-purple.svg" alt="photoshop icon" width={30} height={30}/>
            </div>
            <div className="absolute left-50 top-23">
                <Image src="/images/icons/wireshark-logo-purple.svg" alt="wireshark icon" width={30} height={30}/>
            </div>
            <div className="absolute left-70 top-83">
                <Image src="/images/icons/metasploit-logo-purple.svg" alt="metasploit icon" width={30} height={30}/>
            </div>
            <div className="absolute right-70 top-82">
                <Image src="/images/icons/c++-logo-purple.svg" alt="c++ icon" width={40} height={40}/>
            </div>
            <div className="absolute right-30 top-60">
                <Image src="/images/icons/javascript-logo-purple.svg" alt="javascript icon" width={30} height={30}/>
            </div>
            <div className="absolute right-15 top-76">
                <Image src="/images/icons/linkedin-logo-purple.svg" alt="linkedin icon" width={30} height={30}/>
            </div>
        </div>
    </section>
  );
}