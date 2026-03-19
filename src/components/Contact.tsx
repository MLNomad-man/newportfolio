"use client";
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { supabase } from '@/lib/supabase';
import { FadeIn } from "./ui/FadeIn";
import { QRCodeSVG } from 'qrcode.react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // 1. Save to Supabase (CRITICAL path)
      const { error: supabaseError } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

      if (supabaseError) {
        console.error("SUPABASE ERROR DETAILS:", supabaseError);
        throw new Error(`Supabase Error: ${supabaseError.message || JSON.stringify(supabaseError)}`);
      }

      // 2. Send Email Notification (OPTIONAL path - do not crash if it fails)
      try {
        await emailjs.send(
          'service_pg7x16j', 
          'template_aq6dcae', 
          templateParams, 
          'ivC29C05oGa_-xVq6'
        );
      } catch (emailErr: any) {
        console.error("EMAILJS API RESPONSE STATUS:", emailErr?.status);
        console.error("EMAILJS API RESPONSE TEXT:", emailErr?.text);
        // We intentionally don't throw here! 
        // The message is safe in Supabase, so the user should see success.
      }

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error: any) {
      console.error('FINAL ERROR CAUGHT:', error.message || error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-500">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-500 mx-auto rounded-full"></div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Let's Connect</h3>
                  <p className="text-slate-400 leading-relaxed">Have a question or want to work together? Feel free to reach out.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <span className="text-slate-400">+91-8639961862</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-fuchsia-400 group-hover:bg-fuchsia-500/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <span className="text-slate-400">mdmeraj3500@gmail.com</span>
                    </div>
                  </div>
                  <a href="https://www.linkedin.com/in/mdmeraj05/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">LinkedIn</h4>
                      <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">mdmeraj05</span>
                    </div>
                  </a>
                  <a href="https://github.com/MLNomad-man" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 group-hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">GitHub</h4>
                      <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">MLNomad-man</span>
                    </div>
                  </a>
                </div>

                {/* QR Code */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">Scan to visit</p>
                  <div className="bg-white p-3 rounded-xl inline-block">
                    <QRCodeSVG 
                      value="https://newmainportfolio.vercel.app" 
                      size={100}
                      bgColor="#ffffff"
                      fgColor="#030014"
                      level="M"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <form id="contact-form" onSubmit={handleSubmit} autoComplete="off" className="space-y-6 bg-black/40 p-8 rounded-2xl border border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group pt-4">
                      <input type="text" id="name" name="name" placeholder="Name" autoComplete="off" className="w-full bg-transparent border-b-2 border-white/10 py-3 px-2 text-white focus:outline-none focus:border-cyan-400 transition-colors peer placeholder-transparent" required />
                      <label htmlFor="name" className="absolute left-2 top-0 text-sm font-medium text-slate-500 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400">Name</label>
                    </div>
                    <div className="relative group pt-4">
                      <input type="email" id="email" name="email" placeholder="Email" autoComplete="off" className="w-full bg-transparent border-b-2 border-white/10 py-3 px-2 text-white focus:outline-none focus:border-cyan-400 transition-colors peer placeholder-transparent" required />
                      <label htmlFor="email" className="absolute left-2 top-0 text-sm font-medium text-slate-500 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400">Email</label>
                    </div>
                  </div>
                  <div className="relative group pt-6">
                    <textarea id="message" name="message" rows={5} placeholder="Message" className="w-full bg-transparent border-b-2 border-white/10 py-3 px-2 text-white focus:outline-none focus:border-fuchsia-400 transition-colors peer placeholder-transparent resize-none" required></textarea>
                    <label htmlFor="message" className="absolute left-2 top-0 text-sm font-medium text-slate-500 transition-all peer-placeholder-shown:top-9 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-fuchsia-400">Message</label>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all ${isSubmitting ? 'bg-white/10 text-white/50 cursor-not-allowed' : submitStatus === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-[1.02]'}`}
                    >
                      {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                    </button>
                    {submitStatus === 'error' && <div className="mt-4 text-center text-red-500 font-medium">Failed to send. Please try again later.</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
