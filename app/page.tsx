import Hero_Banner from "@/components/hero_banner";
import About from "@/components/about";
import Recent_Work from "@/components/recent_work";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CursorGlow from "@/components/cursor_glow";

export default function Home() {
return (
    <div className="">
      <CursorGlow/>
      <main className="justify-items-center z-0">
        <Hero_Banner title={"Dominic Hart"} subtitle={"Web Developer & IT Systems Professional"} description={"Hi, I am a full-stack developer from Barbados, with over 5 years of experience in coding. I consider myself a generalist, and have worked in web development, software development, cloud computing, and networking, both professionally & freelance. I am always looking for ways to increase my knowledge, and I am in the process of getting my COMPTIA Network+ & Security+ Certifications. Away from my workstation, I train and play cricket, I run with a club, play chess, amongst other things. I am a team player, looking for that one opportunity that i can apply all of my skills and dedicate myself to."} ctaText={"View Projects"} ctaLink={"/work"}/>
        <About/>
        <Recent_Work/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
