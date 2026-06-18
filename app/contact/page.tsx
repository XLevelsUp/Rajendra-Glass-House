"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { CONTACT_INFO, PHONE, PHONE_DISPLAY, MAPS_URL, WHATSAPP_URL } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-20">
      
      {/* Hero */}
      <section className="py-24 border-b border-ink-200 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Contact Us</p>
            <h1 className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1]">
              Start Your Project
            </h1>
            <p className="text-ink-600 font-medium text-lg max-w-2xl mx-auto">
              Visit our showroom in RS Puram or reach out online. 
              Our experts are ready to assist with your architectural glass requirements.
            </p>
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
            
            {/* Contact Info */}
            <AnimatedContainer>
              <h2 className="font-serif text-3xl text-ink-950 font-bold mb-10">Get in Touch</h2>
              
              <div className="space-y-10">
                {/* Address */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-ink-900 font-semibold mb-2">Showroom Address</h3>
                    <p className="text-ink-600 font-medium text-sm leading-relaxed max-w-[250px] mb-3">
                      {CONTACT_INFO.address}
                    </p>
                    <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-xs font-bold text-gold tracking-widest uppercase hover:underline">
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-ink-900 font-semibold mb-2">Phone & WhatsApp</h3>
                    <div className="space-y-2">
                      <a href={`tel:${PHONE}`} className="block text-ink-600 font-medium text-sm hover:text-gold transition-colors">
                        {PHONE_DISPLAY}
                      </a>
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#25D366] tracking-widest uppercase hover:underline block">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-ink-900 font-semibold mb-2">Email Address</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-ink-600 font-medium text-sm hover:text-gold transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-ink-900 font-semibold mb-2">Working Hours</h3>
                    <p className="text-ink-600 font-medium text-sm">Mon - Sat: 9:30 AM - 7:30 PM</p>
                    <p className="text-ink-400 font-medium text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedContainer>

            {/* Contact Form */}
            <AnimatedContainer delay={0.2}>
              <div className="bg-white border border-ink-200 shadow-sm p-8 md:p-12 rounded-2xl">
                <h2 className="font-serif text-3xl text-ink-950 font-bold mb-8">Send an Inquiry</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-xs font-semibold tracking-wider text-ink-400 uppercase">Full Name</label>
                      <input 
                        id="fullName"
                        name="fullName"
                        type="text" 
                        className="w-full bg-[#F8FAFC] border border-ink-200 rounded-sm px-4 py-3 text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phoneNumber" className="text-xs font-bold tracking-wider text-ink-600 uppercase">Phone Number</label>
                      <input 
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel" 
                        className="w-full bg-[#F8FAFC] border border-ink-200 rounded-sm px-4 py-3 text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all"
                        placeholder="+91 90000 00000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="requirement" className="text-xs font-bold tracking-wider text-ink-600 uppercase">Requirement</label>
                    <textarea 
                      id="requirement"
                      name="requirement"
                      rows={4}
                      className="w-full bg-[#F8FAFC] border border-ink-200 rounded-sm px-4 py-3 text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all resize-none"
                      placeholder="Tell us about your glass or plywood requirements..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gold text-white font-bold py-4 rounded-xl hover:bg-gold-dark hover:scale-105 transition-all shadow-md shadow-gold/20 mt-4 tracking-wide"
                  >
                    Submit Request
                  </button>

                  <p className="text-xs text-ink-500 text-center mt-6">
                    For urgent requirements, please contact us directly via phone or WhatsApp.
                  </p>
                </form>
              </div>
            </AnimatedContainer>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full border-t border-ink-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3916.326880010041!2d76.95179271533418!3d11.00747859216487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a72175e119%3A0xc3cfbe5349e29a9!2sRajendra%20Glass%20House!5e0!3m2!1sen!2sin!4v1684900000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
