"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-brand-500/10 rounded-2xl border border-brand-500/20">
        <h3 className="text-2xl font-bold text-brand-500 mb-2">Thank You!</h3>
        <p className="text-gray-400">Your request has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
          <input 
            type="email" 
            id="email" 
            required 
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Required</label>
          <select 
            id="service" 
            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500"
          >
            <option value="toughened-glass">Toughened Glass</option>
            <option value="aluminium-partitions">Aluminium Partitions</option>
            <option value="shower-enclosures">Shower Enclosures</option>
            <option value="office-interiors">Office Interiors</option>
            <option value="decorative-glass">Decorative Glass</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message / Requirements</label>
        <textarea 
          id="message" 
          rows={4} 
          required 
          className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-brand-500 resize-none"
          placeholder="Please describe your project..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Quote"}
      </Button>
    </form>
  );
}
