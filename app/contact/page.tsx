"use client";
import { useState } from "react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { CONTACT_INFO, PHONE, PHONE_DISPLAY, MAPS_URL, WHATSAPP_URL } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Box, Typography } from "@mui/material";
import { submitContactForm } from "@/app/actions/contact";


export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{name?: string; phone?: string; email?: string; submit?: string}>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const validateField = (field: string, value: string) => {
    let errorMsg = undefined;
    if (field === "name") {
      if (value.trim().length > 0 && (value.trim().length < 3 || value.trim().length > 50)) {
        errorMsg = "Please enter a valid full name (3-50 characters).";
      }
    } else if (field === "phone") {
      const phoneStr = value.replace(/[\s-]/g, '');
      const phoneRegex = /^\+?\d{10,15}$/;
      if (value.trim().length > 0 && !phoneRegex.test(phoneStr)) {
        errorMsg = "Please enter a valid phone number (10-15 digits).";
      }
    } else if (field === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value.trim().length > 0 && (!emailRegex.test(value) || value.toLowerCase().match(/\.comm+$/))) {
        errorMsg = "Please enter a valid email address.";
      }
    }
    
    setErrors(prev => ({ ...prev, [field]: errorMsg, submit: undefined }));
    return errorMsg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const formData = new FormData(e.currentTarget);
      
      const name = formData.get("name") as string;
      const phone = formData.get("phone") as string;
      const email = formData.get("email") as string;
      
      let hasError = false;
      const newErrors: typeof errors = {};
      
      const nameError = validateField("name", name);
      if (nameError || !name) { newErrors.name = nameError || "Please enter a valid full name (3-50 characters)."; hasError = true; }
      
      const phoneError = validateField("phone", phone);
      if (phoneError || !phone) { newErrors.phone = phoneError || "Please enter a valid phone number (10-15 digits)."; hasError = true; }
      
      const emailError = validateField("email", email);
      if (emailError || !email) { newErrors.email = emailError || "Please enter a valid email address."; hasError = true; }
      
      if (hasError) {
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }

      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrors({ submit: result.error || "Something went wrong." });
      }
    } catch (err) {
      setErrors({ submit: "Failed to connect to the server." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className="bg-surface-body min-h-screen pt-20">
      
      {/* Hero */}
      <Box component="section" className="py-24 border-b border-ink-200 text-center bg-white">
        <Box className="max-w-4xl mx-auto px-6">
          <AnimatedContainer>
            <Typography component="p" className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Contact Us</Typography>
            <Typography variant="h1" component="h1" className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1]">
              Start Your Project
            </Typography>
            <Typography component="p" className="text-ink-600 font-medium text-lg max-w-2xl mx-auto">
              Visit our showroom in RS Puram or reach out online. 
              Our experts are ready to assist with your architectural glass requirements.
            </Typography>
          </AnimatedContainer>
        </Box>
      </Box>

      <Box component="section" className="py-24">
        <Box className="max-w-7xl mx-auto px-6 lg:px-10">
          <Box className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
            
            {/* Contact Info */}
            <AnimatedContainer>
              <Typography variant="h2" component="h2" className="font-serif text-3xl text-ink-950 font-bold mb-10">Get in Touch</Typography>
              
              <Box className="space-y-10">
                {/* Address */}
                <Box className="flex gap-6">
                  <Box className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </Box>
                  <Box>
                    <Typography variant="h3" component="h3" className="text-ink-900 font-semibold mb-2">Showroom Address</Typography>
                    <Typography component="p" className="text-ink-600 font-medium text-sm leading-relaxed max-w-[250px] mb-3">
                      {CONTACT_INFO.address}
                    </Typography>
                    <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-xs font-bold text-gold tracking-widest uppercase hover:underline">
                      Get Directions
                    </a>
                  </Box>
                </Box>

                {/* Phone */}
                <Box className="flex gap-6">
                  <Box className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </Box>
                  <Box>
                    <Typography variant="h3" component="h3" className="text-ink-900 font-semibold mb-2">Phone & WhatsApp</Typography>
                    <Box className="space-y-2">
                      <a href={`tel:${PHONE}`} className="block text-ink-600 font-medium text-sm hover:text-gold transition-colors">
                        {PHONE_DISPLAY}
                      </a>
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#25D366] tracking-widest uppercase hover:underline block">
                        Chat on WhatsApp
                      </a>
                    </Box>
                  </Box>
                </Box>

                {/* Email */}
                <Box className="flex gap-6">
                  <Box className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </Box>
                  <Box>
                    <Typography variant="h3" component="h3" className="text-ink-900 font-semibold mb-2">Email Address</Typography>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-ink-600 font-medium text-sm hover:text-gold transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </Box>
                </Box>

                {/* Hours */}
                <Box className="flex gap-6">
                  <Box className="w-12 h-12 rounded-full border border-ink-200 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </Box>
                  <Box>
                    <Typography variant="h3" component="h3" className="text-ink-900 font-semibold mb-2">Working Hours</Typography>
                    <Typography component="p" className="text-ink-600 font-medium text-sm">Mon - Sat: 9:30 AM - 7:30 PM</Typography>
                    <Typography component="p" className="text-ink-500 font-medium text-sm mt-1">Sunday: Closed</Typography>
                  </Box>
                </Box>
              </Box>
            </AnimatedContainer>

            {/* Contact Form */}
            <AnimatedContainer delay={0.2}>
              <Box className="bg-white border border-ink-200 shadow-sm p-8 md:p-12 rounded-2xl">
                <Typography variant="h2" component="h2" className="font-serif text-3xl text-ink-950 font-bold mb-8">Send an Inquiry</Typography>
                
                {submitted ? (
                  <Box className="text-center py-8">
                    <Typography variant="h3" component="h3" className="text-2xl font-bold text-gold mb-4">Thank You!</Typography>
                    <Typography component="p" className="text-ink-600">Your request has been received. Our team will contact you shortly.</Typography>
                  </Box>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Box className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold tracking-wider text-ink-500 uppercase">Full Name</label>
                        <input 
                          id="name"
                          name="name"
                          type="text" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-surface-body border ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'border-ink-200 focus-visible:ring-gold'} rounded-sm px-4 py-3 text-ink-900 focus-visible:outline-none focus-visible:ring-2 transition-all`}
                        />
                        {errors.name && <Typography component="p" className="text-red-500 text-xs mt-1">{errors.name}</Typography>}
                      </Box>
                      <Box className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-bold tracking-wider text-ink-600 uppercase">Phone Number</label>
                        <input 
                          id="phone"
                          name="phone"
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full bg-surface-body border ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : 'border-ink-200 focus-visible:ring-gold'} rounded-sm px-4 py-3 text-ink-900 focus-visible:outline-none focus-visible:ring-2 transition-all`}
                        />
                        {errors.phone && <Typography component="p" className="text-red-500 text-xs mt-1">{errors.phone}</Typography>}
                      </Box>
                    </Box>

                    <Box className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold tracking-wider text-ink-600 uppercase">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-surface-body border ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-ink-200 focus-visible:ring-gold'} rounded-sm px-4 py-3 text-ink-900 focus-visible:outline-none focus-visible:ring-2 transition-all`}
                      />
                      {errors.email && <Typography component="p" className="text-red-500 text-xs mt-1">{errors.email}</Typography>}
                    </Box>

                    <Box className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold tracking-wider text-ink-600 uppercase">Requirement</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#F8FAFC] border border-ink-200 rounded-sm px-4 py-3 text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all resize-none"
                      />
                    </Box>

                    {errors.submit && (
                      <Typography component="p" className="text-red-500 text-sm mt-2">{errors.submit}</Typography>
                    )}

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold text-ink-950 font-bold py-4 rounded-xl hover:bg-gold-dark hover:scale-105 transition-all shadow-md shadow-gold/20 mt-4 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>

                    <Typography component="p" className="text-xs text-ink-500 text-center mt-6">
                      For urgent requirements, please contact us directly via phone or WhatsApp.
                    </Typography>
                  </form>
                )}

              </Box>
            </AnimatedContainer>
            
          </Box>
        </Box>
      </Box>

      {/* Map Section */}
      <Box component="section" className="h-[400px] w-full border-t border-ink-200">
        <iframe 
          src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Rajendra%20Glass%20House,%20Coimbatore&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
}
