import ProjectCard from "./project_card";

export default function RecentWork() {
  return (
    <section id="recent-work-section" className="relative items-center justify-items-center py-20 w-[80%] | md:w-[70%] md:py-40">
        <h2 className="text-6xl text-gradient-custom text-center | md:text-7xl">Recent Work</h2>
        <h6 className="text-sm text-white text-center | md:text-2xl">A collection of projects i've worked on</h6>
        <div className="">

            <div className="pt-20">
                <ProjectCard title={"Green Office Barbados"} 
                             imageSrc={"/images/greenoffice-dashboard.webp"} 
                             skills={["Next.js", "Typescript", "AWS", "Ubuntu" ]} 
                             reverse={true}
                             projectLink={"carolinasbarbados.com"} 
                             description={"I created an Invoicing and Inventory Tracking Web App used for daily operations of Green Office Barbados businesses. Employee, warehouse, and content management functionality currently in development."} />
            </div>
            
            <div className="pt-14">
                <ProjectCard title={"Smart Living Barbados"} 
                             imageSrc={"/images/smartliving-home.webp"} 
                             skills={["HTML", "Wordpress", "AWS", "Ubuntu" ]} 
                             reverse={false}
                             projectLink={"smartlivingbarbados.com"} 
                             description={"I Developed and currently maintain a property management platform featuring property listings, search functionality and Google map integration for Barbados real estate."} />
            </div>
            
               
        </div>
    </section>
  );
}