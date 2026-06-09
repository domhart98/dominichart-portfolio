import ProjectCard from "./project_card";

export default function RecentWork() {
  return (
    <section id="recent-work-section" className="justify-items-center w-[70%] py-60">
        <h2 className="text-6xl md:text-7xl text-gradient-custom">Recent Work</h2>
        <h6 className="text-xl md:text-2xl text-white">A collection of projects i've worked on</h6>
        <div className="">
            <div className="pt-20">
                <ProjectCard title={"Smart Living Barbados"} 
                             imageSrc={"/images/smartliving-home.webp"} 
                             skills={["HTML&CSS", "Wordpress", "AWS", "Ubuntu" ]} 
                             reverse={false}
                             projectLink={"smartlivingbarbados.com"} 
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."} />
            </div>
            <div className="pt-20">
                <ProjectCard title={"Carolinas Bistro & Bar"} 
                             imageSrc={"/images/carolinas-home.webp"} 
                             skills={["PHP", "HTML&CSS", "AWS", "Ubuntu" ]} 
                             reverse={true}
                             projectLink={"carolinasbarbados.com"} 
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."} />
            </div>
               
        </div>
    </section>
  );
}