"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Box, Typography } from "@mui/material";
import { submitContactForm } from "@/app/actions/contact";


export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{name?: string; phone?: string; email?: string; submit?: string}>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "toughened-glass",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  if (submitted) {
    return (
      <Box className="p-8 text-center bg-brand-500/10 rounded-2xl border border-brand-500/20">
        <Typography variant="h3" component="h3" className="text-2xl font-bold text-brand-500 mb-2">Thank You!</Typography>
        <Typography component="p" className="text-gray-400">Your request has been received. Our team will contact you shortly.</Typography>
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Box className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required 
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-dark-800 border ${errors.name ? 'border-red-500' : 'border-dark-600'} rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500`}
          />
          {errors.name && <Typography component="p" className="text-red-400 text-xs mt-1">{errors.name}</Typography>}
        </Box>
        <Box className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            required 
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-dark-800 border ${errors.phone ? 'border-red-500' : 'border-dark-600'} rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500`}
          />
          {errors.phone && <Typography component="p" className="text-red-400 text-xs mt-1">{errors.phone}</Typography>}
        </Box>
      </Box>
      
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Box className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required 
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-dark-800 border ${errors.email ? 'border-red-500' : 'border-dark-600'} rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500`}
          />
          {errors.email && <Typography component="p" className="text-red-400 text-xs mt-1">{errors.email}</Typography>}
        </Box>
        <Box className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Required</label>
          <select 
            id="service" 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
          >
            <option value="toughened-glass">Toughened Glass</option>
            <option value="aluminium-partitions">Aluminium Partitions</option>
            <option value="shower-enclosures">Shower Enclosures</option>
            <option value="office-interiors">Office Interiors</option>
            <option value="decorative-glass">Decorative Glass</option>
            <option value="other">Other</option>
          </select>
        </Box>
      </Box>

      <Box className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message / Requirements</label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500 resize-none"
        />
      </Box>

      {errors.submit && (
        <Typography component="p" className="text-red-400 text-sm mt-2">{errors.submit}</Typography>
      )}

      <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Quote"}
      </Button>
    </form>
  );
}
