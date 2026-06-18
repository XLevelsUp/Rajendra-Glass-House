"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Gokulnath Chandramohan",
    role: "Customer",
    text: "I purchased two LED mirrors for my studio. I checked the price in other shops and found it affordable in Rajendra Glass House. I received the product with the highest quality. WORTH EVERY PENNY.",
    initials: "GC",
  },
  {
    id: 2,
    name: "SISTER'S QUARANTINE",
    role: "Customer",
    text: "I had a very good experience with my orders with them, they were too kind to even replace my frosted glass when there was a mistake from our end... Really in customer satisfaction they are 10/10. And quality wise very perfect.",
    initials: "SQ",
  },
  {
    id: 3,
    name: "Parthiban Elango",
    role: "Customer",
    text: "Aesthetic collection of mirrors. Well explained about the sustainability of the different types of frames... Reasonably priced. Didn't feel negotiating. Placed the order with in a very short time.",
    initials: "PE",
  },
  {
    id: 4,
    name: "Rakesh Suthar",
    role: "Customer",
    text: "It is a very good shop with excellent staff; the work is neat and clean, and delivery is on time.",
    initials: "RS",
  },
  {
    id: 5,
    name: "Karthik SR",
    role: "Customer",
    text: "I got 3 toughened glasses done from Rajendra Glass. They were very clear, prompt and genuine and Naresh has followed up and maintained good communication throughout the process which I greatly appreciate.",
    initials: "KS",
  },
  {
    id: 6,
    name: "Syed Usman",
    role: "Customer",
    text: "Great collection of products and excellent customer service. Highly recommend if you are looking for Mirrors and glass partitions.",
    initials: "SU",
  },
  {
    id: 7,
    name: "Harshitha RS",
    role: "Customer",
    text: "Absolutely Stunning Collection! Their glassware collection is absolutely beautiful—each piece is crafted with incredible attention to detail... If you're looking for elegance, reliability, and top-tier customer service, this is the place to go.",
    initials: "HR",
  },
  {
    id: 8,
    name: "Muthuram Subram",
    role: "Customer",
    text: "I have ordered for the dining table top 8mm Glass materials with high polish outfit, Received the glass in good condition... Glass House offers a great variety of glass materials and is a solid choice.",
    initials: "MS",
  },
  {
    id: 9,
    name: "JAGAN JK",
    role: "Customer",
    text: "Good Collections of Mirrors and Wide variety of Customization available. Super Fast Delivery. Reliable Quality at right price. Highly Recommended.",
    initials: "JJ",
  },
  {
    id: 10,
    name: "Kavita Jain",
    role: "Customer",
    text: "Satisfied with their customer service. Best glass with many options to buy at reasonable price. My home looks pretty good with their glass decors. I give seven stars to Rajendra Glass House.",
    initials: "KJ",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds auto-rotate
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-28 bg-[#F8FAFC] border-t border-ink-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <AnimatedContainer className="mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-950 font-bold mb-6">Client Success Stories</h2>
          <div className="inline-flex items-center gap-2 text-sm text-ink-700 bg-white border border-gold/30 shadow-sm px-5 py-2.5 rounded-full justify-center font-medium">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            4.9 · Google Reviews
          </div>
        </AnimatedContainer>

        <div className="relative max-w-4xl mx-auto h-[550px] sm:h-[450px] md:h-[380px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="modern-glass rounded-3xl p-8 md:p-12 h-full flex flex-col items-center justify-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg md:text-xl text-ink-950 italic leading-relaxed mb-8 flex-1 flex items-center justify-center">
                  <span>&ldquo;{currentTestimonial.text}&rdquo;</span>
                </blockquote>
                <div className="flex flex-col items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-gold text-sm font-bold mb-3 shadow-sm">
                    {currentTestimonial.initials}
                  </div>
                  <div className="text-ink-900 font-semibold">{currentTestimonial.name}</div>
                  <div className="text-ink-600 text-sm mt-1 font-medium">{currentTestimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-16 pointer-events-none">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-ink-200 shadow-sm flex items-center justify-center text-ink-600 hover:text-gold hover:border-gold pointer-events-auto transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-ink-200 shadow-sm flex items-center justify-center text-ink-600 hover:text-gold hover:border-gold pointer-events-auto transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-gold' : 'bg-ink-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
