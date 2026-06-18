"use client"

import * as React from "react"
import { FAQItem } from "@/types"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

const faqs: FAQItem[] = [
  {
    question: "How long does it take to get set up?",
    answer: "You can be up and running in less than 5 minutes. Our simple deployment process and comprehensive documentation make it incredibly easy to get started.",
  },
  {
    question: "Can I use my own custom domain?",
    answer: "Absolutely. All of our plans include custom domain support. We provide easy-to-follow instructions to help you configure your DNS settings.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with our platform, just let us know and we'll refund your payment in full.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for all customers. Pro users get priority 1-hour response times, and Enterprise customers have access to a dedicated success manager and 24/7 phone support.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Have a different question and can't find the answer you're looking for? Reach out to our support team.
          </p>
        </div>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg overflow-hidden bg-background"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 px-6 font-medium transition-all hover:bg-brand-50/50 dark:hover:bg-brand-900/10 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-foreground/50 transition-transform duration-200" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-foreground/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-4 pt-0">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
