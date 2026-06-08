"use client";

import ContactItem from "./contact_item";
import "../app/globals.css"
import { useState } from "react";

export default function Contact() {
  
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    return (
    <section id="contact-section" className="w-[70%] justify-items-center py-20">
        <h2 className="text-6xl md:text-7xl text-gradient-custom pb-20">Contact</h2>
        <div className="flex columns-2 gap-20">
            <div className="column-1">
                <h3 id="contact-section" className="text-cyan-300 text-4xl mb-4">Let's Connect</h3>
                <p className="text-slate-300 leading-8 mb-10">
                    I'm always interested in discussing web development,
                    cloud technologies, cybersecurity, and new opportunities.
                    Whether you have a project in mind or simply want to
                    connect, feel free to reach out.
                </p>
                <ContactItem iconSrc={"/images/icons/phone-icon.svg"} text={"+1 (246) 835-6621"} altText={"phone icon"}/>
                <ContactItem iconSrc={"/images/icons/email-icon.svg"} text={"dominic.am.hart@gmail.com"} altText={"email icon"}/>
                <ContactItem iconSrc={"/images/icons/location-pin-icon.svg"} text={"7 Bannatyne Gardens, Christ Church, Barbados"} altText={"location pin icon"}/>
            </div>
            <div className="">
                <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
                    <label className="text-slate-300">Name</label>
                    <input className="w-full mt-2 mb-6 p-3 rounded-lg bg-white/5 border border-white/10 outlier-none focus:border-cyan-400"
                           type="text"
                    />
                    <label className="text-slate-300">Email</label>
                    <input className="w-full mt-2 mb-6 p-3 rounded-lg bg-white/5 border border-white/10 outlier-none focus:border-cyan-400"
                           type="text"
                    />
                    <label className="text-slate-300">Message</label>
                    <textarea className="w-full mt-2 mb-6 p-3 rounded-lg bg-white/5 border border-white/10 outlier-none focus:border-cyan-400"
                              rows={5}
                    />
                    <button className="px-6 py-3 rounded-full bg-gradient-custom text-slate-300 smooth-scale-110"
                            disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && (
                    <p className="text-green-400">
                        Message sent successfully.
                    </p>
                    )}

                    {error && (
                    <p className="text-red-400">
                        Failed to send message.
                    </p>
                    )}

                </div>
            </div>
        </div>
    </section>
  );
}