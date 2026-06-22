"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Box, Typography } from "@mui/material";
import { submitContactForm } from "@/app/actions/contact";


export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
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
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
            placeholder="John Doe"
          />
        </Box>
        <Box className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            required 
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
            placeholder="+91 98765 43210"
          />
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
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
            placeholder="john@example.com"
          />
        </Box>
        <Box className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Required</label>
          <select 
            id="service" 
            name="service"
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
          required 
          className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500 resize-none"
          placeholder="Please describe your project..."
        />
      </Box>

      {error && (
        <Typography component="p" className="text-red-400 text-sm mt-2">{error}</Typography>
      )}

      <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Quote"}
      </Button>
    </form>
  );
}
