import Image from "next/image";
import Navbar from "@/components/navbar";
import ResumeEntry from "@/components/resume_entry";
import Carousel from "@/components/carousel"
import "../globals.css"
import "./experience.css";

export default function ExperiencePage() {
  return (
    <div className="mt-80 justify-items-center">
      <Navbar/>
      <div className="grid grid-cols-[320px_1fr] gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl text-gradient-custom sticky top-32 pb-20">
            Work Experience
          </h2>
        </div>
        <div>
          <ul className="max-w-4xl mx-auto">
            <ResumeEntry
              date="Aug 2025 - Present"
              company="Green Office Barbados, Smart Living Barbados"
              role="Business Operations & Web Development"
              responsibilities={["• Daily management of business operations for wholesale souvenir business.",
                                "• Support for small realtor, including client viewings, media, and property management.",
                                "• Freelance web development."]}
            />
            <ResumeEntry
              date="Aug 2024 - Aug 2025"
              company="Perigord Life Science Solutions"
              role="Solutions Engineer"
              responsibilities={["• Configured front-end components, data models/entities, views (SQL queries), and custom APIs.",
                                "• Developed software products for clients on the company’s proprietary platform GLAMS.",
                                "• Resolved error tickets raised by the testing team, ensuring high-quality deliverables."]}
            />
            <ResumeEntry
              date="Aug 2023 - Aug 2024"
              company="Webstylze Ltd."
              role="Web Developer"
              responsibilities={["• Developed responsive websites using Wordpress, HTML & CSS, Javascript, and ReactJS.",
                                "• Managed AWS-hosted web servers.",
                                "• Presented and sold web products to clients, securing business buy-in."]}
            />
            <ResumeEntry
              date="June 2021 - Sept 2021"
              company="Carib LPG"
              role="IT Retail Intern"
              responsibilities={["• Programmed and configured POS terminals for retail environments."]}
            />
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-[320px_1fr] gap-12 my-60">
        <div>
          <h2 className="text-4xl md:text-5xl text-gradient-custom sticky top-32 pb-20">
            Education
          </h2>
        </div>
        <div>
          <ul className="max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10"/>

            <ResumeEntry
              date="Sept 2017 – Sept 2022"
              company="Concordia University, Montreal"
              role=""
              responsibilities={["Bachelor of Computer Science"]}
            />

            <ResumeEntry
              date="Sept 2011 – June 2017"
              company="Harrison College, Barbados"
              role=""
              responsibilities={["CAPE: Math I & II, Physics I & II, Computer Science I & II, Communications Studies, and Caribbean Studies"]}
            />
          </ul> 
        </div>
      </div>
      
      <div className="grid grid-cols-[320px_1fr] gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl text-gradient-custom sticky top-32 pb-20">
            Awards & Certifications
          </h2>
        </div>
        <div>
          <ul className="max-w-4xl mx-auto">
            <ResumeEntry
              date="April 2026"
              company="Ministry of Commerce, People's Republic of China"
              role=""
              responsibilities={["Advanced Seminar on Key Technologies for 5G Cybersecurity for Developing Countries"]}
            />
            <div className="pl-16 mb-40">
                <Carousel imgSources={["/images/certificate-cropped.webp", "/images/seminar-group.webp", "/images/bim-represent.webp", "/images/great-wall.webp"]}/>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}