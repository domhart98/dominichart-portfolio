import HeroBanner from "@/components/hero_banner";
import About from "@/components/about";
import RecentWork from "@/components/recent_work";
import ContactForm from "@/components/contact_form";
import CursorGlow from "@/components/cursor_glow";
import ContactItem from "@/components/contact_item";

export default function Home() {
return (
    <div className="">
      <CursorGlow/>
      <main className="justify-items-center z-0">
        <HeroBanner title={"Dominic Hart"} subtitle={"Web Developer & IT Systems Professional"} description={"Hi, I am a full-stack developer from Barbados, with over 5 years of experience in coding. I consider myself a generalist, and have worked in web development, software development, cloud computing, and networking, both professionally & freelance. I am always looking for ways to increase my knowledge, and I am in the process of getting my COMPTIA Network+ & Security+ Certifications. Away from my workstation, I train and play cricket, I run with a club, play chess, amongst other things. I am a team player, looking for that one opportunity that i can apply all of my skills and dedicate myself to."} ctaText={"View Projects"} ctaLink={"/work"}/>
        <About/>
        <RecentWork/>
        <section className="relative items-center justify-items-center w-[70%] py-40">
          <h2 className="text-6xl md:text-7xl text-gradient-custom pb-20">Contact</h2>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="flex-1">
                  <h3 id="contact-section" className="text-cyan-300 text-4xl mb-4">Let's Connect</h3>
                  <p className="text-slate-300 leading-8 mb-10">
                      I'm always interested in discussing web development,
                      cloud technologies, cybersecurity, and new opportunities.
                      Whether you have a project in mind or simply want to
                      connect, feel free to reach out.
                  </p>
                  <ContactItem iconSrc={"/images/icons/phone-icon.svg"} text={"+1 (246) 835-6621"} altText={"phone icon"}/>
                  <ContactItem iconSrc={"/images/icons/email-icon.svg"} text={"dominic.am.hart@gmail.com"} altText={"email icon"}/>
                  <ContactItem iconSrc={"/images/icons/location-pin-icon.svg"} text={"Christ Church, Barbados"} altText={"location pin icon"}/>
              </div>
              <div className="flex-1 align-top items-top">
                <ContactForm/>
              </div>
              
            </div>
        </section>
        
      </main>
    </div>
  );
}
