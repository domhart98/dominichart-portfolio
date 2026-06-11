"use client";

import ContactItem from "./contact_item";
import "../app/globals.css"
import { useState } from "react";

export default function ContactForm() {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setError(false);

                setName("");
                setEmail("");
                setMessage("");

                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            } 
            else {
                setSuccess(false);
                setError(true);
            }   
        } catch {
            setSuccess(false);
            setError(true);
        } finally {
            setLoading(false);
        }

    };

    return (
    <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex-1">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
                <label className="text-slate-300 text-sm | md:text-lg">Name</label>
                <input className="w-full text-xs font-light text-slate-300 mt-2 mb-6 p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 | md:text-lg"
                        type="text" value={name} onChange={(e:any) => setName(e.target.value)}
                />
                <label className="text-slate-300 text-sm | md:text-lg">Email</label>
                <input className="w-full text-xs font-light text-slate-300 mt-2 mb-6 p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 | md:text-lg"
                        type="email" value={email} onChange={(e:any) => setEmail(e.target.value)}
                />
                <label className="text-slate-300 text-sm | md:text-lg">Message</label>
                <textarea className="w-full text-xs font-light text-slate-300 mt-2 mb-6 p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 | md:text-lg"
                            rows={5} value={message} onChange={(e:any) => setMessage(e.target.value)}
                />
                <button className="px-5 py-3 rounded-full bg-gradient-custom text-white text-sm smooth-scale-110 disabled:opacity-50 | md:py-4 md:px-8 md:mb-6 md:text-lg" 
                        disabled={loading} type="submit">
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
    </form>
  );
}