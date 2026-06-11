import ProjectCard from "./project_card";

export default function RecentWork() {
  return (
    <section id="recent-work-section" className="relative items-center justify-items-center py-20 w-[80%] | md:w-[70%] md:py-40">
        <h2 className="text-6xl text-gradient-custom text-center | md:text-7xl">Recent Work</h2>
        <h6 className="text-sm text-white text-center | md:text-2xl">A collection of projects i've worked on</h6>
        <div className="">
            <div className="pt-14">
                <ProjectCard title={"Smart Living Barbados"} 
                             imageSrc={"/images/smartliving-home.webp"} 
                             skills={["HTML&CSS", "Wordpress", "AWS", "Ubuntu" ]} 
                             reverse={false}
                             projectLink={"smartlivingbarbados.com"} 
                             description={"Developed and maintain a property management platform featuring property listings, search functionality and Google map integration for Barbados real estate."} />
            </div>
            <div className="pt-20">
                <ProjectCard title={"Carolinas Bistro & Bar"} 
                             imageSrc={"/images/carolinas-home.webp"} 
                             skills={["PHP", "HTML&CSS", "AWS", "Ubuntu" ]} 
                             reverse={true}
                             projectLink={"carolinasbarbados.com"} 
                             description={"Developed and maintain the online presence for Carolina's Barbados, creating a responsive website designed to showcase the business and improve customer engagement across desktop and mobile devices."} />
            </div>
               
        </div>
    </section>
  );
}