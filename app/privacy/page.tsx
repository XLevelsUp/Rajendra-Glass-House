"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 19, 2026";

  return (
    <div className="bg-surface-body min-h-screen pt-20">
      <section className="py-24 border-b border-ink-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedContainer>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Legal Information</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-950 font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-ink-500 font-medium text-sm">Last updated: {lastUpdated}</p>
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedContainer delay={0.1}>
            <div className="bg-white p-10 md:p-14 rounded-2xl border border-ink-200 shadow-sm space-y-10 text-ink-600 font-medium leading-relaxed">
              
              <section>
                <h2 className="font-serif text-2xl text-ink-950 font-bold mb-4">1. Introduction</h2>
                <p>
                  Welcome to Rajendra Glass House ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-ink-950 font-bold mb-4">2. The Data We Collect About You</h2>
                <p className="mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-ink-600">
                  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-ink-950 font-bold mb-4">3. How We Use Your Personal Data</h2>
                <p className="mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-ink-600">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-ink-950 font-bold mb-4">4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-ink-950 font-bold mb-4">5. Contact Details</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  <br /><br />
                  <strong className="text-ink-900">Rajendra Glass House</strong><br />
                  847, MTP Road, (Near Flower Market), Coimbatore - 02.<br />
                  Email: rajendraglasshouse@gmail.com<br />
                  Phone: +91 93610 77777
                </p>
              </section>

            </div>
          </AnimatedContainer>
        </div>
      </section>
    </div>
  );
}
