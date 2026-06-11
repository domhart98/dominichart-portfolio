import ContactForm from "@/components/contact_form";
import Image from "next/image";
import "../globals.css"

export default function ContactPage() {
  return (
    <main className="relative w-[70%] justify-items-center mt-40 | md:mt-60">

      <h2 className="text-6xl text-gradient-custom pb-20 text-center | md:text-7xl">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 id="contact-section" className="text-cyan-300 text-3xl mb-4 | md:text-4xl">
            Let's Connect
          </h3>
          <p className="text-white text-sm font-thin | md:text-lg">
            I'm always interested in discussing web development,
            cloud technologies, cybersecurity, and new opportunities.
            Whether you have a project in mind or simply want to
            connect, <span className="bold">contact me via any of the links below or send me a message using the form.</span>
          </p>

          <div className="flex gap-3 items-center text-slate-300 pt-4 | md:pt-4">
            <Image className="rounded-lg bg-gradient-custom text-slate-300 p-2" src={"/images/icons/email-icon.svg"} alt={"altText"} width={40} height={40}/>
            <a href="mailto:dominichart@gmail.com"
               className="hover:text-purple-400 transition-colors"
            >
                dominichart@gmail.com
            </a>
          </div>

          <div className="flex gap-3 items-center text-slate-300 | md:pt-2">
            <Image className="rounded-lg bg-gradient-custom text-slate-300 p-2" src={"/images/icons/linkedin-logo.svg"} alt={"altText"} width={40} height={40}/>
            <a href="https://www.linkedin.com/in/dominic-hart/"
               className="hover:text-purple-400 transition-colors"
               rel="noopener noreferrer"
               target="_blank"
            >
                linkedin.com/in/dominic-hart
            </a>
          </div>

          <div className="flex gap-3 items-center text-slate-300 | md:pt-2">
            <Image className="rounded-lg bg-gradient-custom text-slate-300 p-2" src={"/images/icons/github-logo.svg"} alt={"altText"} width={40} height={40}/>
            <a href="https://github.com/domhart98"
               className="hover:text-purple-400 transition-colors"
               target="_blank"
               rel="noopener noreferrer"
            >
                github.com/domhart98
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-10">
          <ContactForm/>
        </div>
      </div>
    </main>
  );
}