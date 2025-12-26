"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Github, Facebook, Instagram, CheckCircle2 } from "lucide-react";
import { useForm as useFormspree, ValidationError } from '@formspree/react';
import { useForm } from 'react-hook-form';

interface ContactSectionProps {
  personalInfo: {
    email: string;
    location: string;
    socials: {
      github: string;
      facebook: string;
      instagram: string;
      [key: string]: string;
    };
  };
}

type FormData = {
  name: string;
  email: string;
  message: string;
  _gotcha: string;
};

export default function ContactSection({ personalInfo }: ContactSectionProps) {
  const [state, sendToFormspree] = useFormspree(process.env.NEXT_PUBLIC_FORMSPREE_ID || "");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-card-border rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                  Have a project in mind or just want to chat? Feel free to reach out. 
                  I'm always open to new opportunities.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-mono text-gray-400 uppercase mb-4 tracking-widest">Contact Details</h4>
                    <div className="space-y-4">
                      <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-mono">Email</p>
                          <p className="text-foreground font-medium">{personalInfo.email}</p>
                        </div>
                      </a>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-mono">Location</p>
                          <p className="text-foreground font-medium">{personalInfo.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-gray-400 uppercase mb-4 tracking-widest">Socials</h4>
                    <div className="flex gap-4">
                      <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-blue-500/30 transition-all">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-blue-500/30 transition-all">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-blue-500/30 transition-all">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                {state.succeeded ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                    <CheckCircle2 className="w-16 h-16 text-blue-500 mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => window.location.reload()}
                      className="mt-6 text-sm font-semibold text-blue-500 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(sendToFormspree)} className="space-y-4">
                    {/* Honeypot Field */}
                    <input type="text" {...register("_gotcha")} style={{ display: 'none' }} />

                    <div>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        className={`w-full px-6 py-4 bg-background border rounded-xl focus:border-blue-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-card-border'}`}
                        {...register("name", { 
                          required: "Name is required",
                          minLength: { value: 2, message: "Name must be at least 2 chars" },
                          maxLength: 50
                        })}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 ml-2">{errors.name.message}</p>}
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1 ml-2" />
                    </div>

                    <div>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className={`w-full px-6 py-4 bg-background border rounded-xl focus:border-blue-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-card-border'}`}
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1 ml-2">{errors.email.message}</p>}
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1 ml-2" />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        placeholder="Message"
                        rows={4}
                        className={`w-full px-6 py-4 bg-background border rounded-xl focus:border-blue-500 outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-card-border'}`}
                        {...register("message", { 
                          required: "Message is required",
                          minLength: { value: 10, message: "Message is too short" }
                        })}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1 ml-2">{errors.message.message}</p>}
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1 ml-2" />
                    </div>

                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {state.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : "Send Message"}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
         