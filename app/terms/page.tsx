"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Box, Typography } from "@mui/material";


export default function TermsOfServicePage() {
  const lastUpdated = "June 19, 2026";

  return (
    <Box className="bg-surface-body min-h-screen pt-20">
      <Box component="section" className="py-24 border-b border-ink-200 bg-white">
        <Box className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedContainer>
            <Typography component="p" className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Legal Information</Typography>
            <Typography variant="h1" component="h1" className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-950 font-bold mb-6 leading-tight">
              Terms of Service
            </Typography>
            <Typography component="p" className="text-ink-500 font-medium text-sm">Last updated: {lastUpdated}</Typography>
          </AnimatedContainer>
        </Box>
      </Box>

      <Box component="section" className="py-20">
        <Box className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedContainer delay={0.1}>
            <Box className="bg-white p-10 md:p-14 rounded-2xl border border-ink-200 shadow-sm space-y-10 text-ink-600 font-medium leading-relaxed">
              
              <Box component="section">
                <Typography variant="h2" component="h2" className="font-serif text-2xl text-ink-950 font-bold mb-4">1. Agreement to Terms</Typography>
                <Typography component="p">
                  By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                </Typography>
              </Box>

              <Box component="section">
                <Typography variant="h2" component="h2" className="font-serif text-2xl text-ink-950 font-bold mb-4">2. Products and Services</Typography>
                <Typography component="p" className="mb-4">
                  Rajendra Glass House provides architectural glass products, installation services, and related goods. All products and services are subject to availability.
                </Typography>
                <Box component="ul" className="list-disc pl-5 space-y-2 text-ink-600">
                  <Box component="li">We reserve the right to modify or discontinue any product without notice.</Box>
                  <Box component="li">Custom glass cutting and orders are final once production begins.</Box>
                  <Box component="li">Installation timelines are estimates and may be subject to delays beyond our control.</Box>
                  <Box component="li">Warranties on Saint Gobain glass or hardware are subject to the original manufacturer's terms.</Box>
                </Box>
              </Box>

              <Box component="section">
                <Typography variant="h2" component="h2" className="font-serif text-2xl text-ink-950 font-bold mb-4">3. Quotations and Pricing</Typography>
                <Typography component="p">
                  All quotes provided through our website or via direct contact are valid for 15 days unless otherwise specified. Pricing may be subject to change based on exact site measurements, material availability, or unforeseen structural requirements discovered during installation. Full payment terms will be provided prior to project commencement.
                </Typography>
              </Box>

              <Box component="section">
                <Typography variant="h2" component="h2" className="font-serif text-2xl text-ink-950 font-bold mb-4">4. Limitations</Typography>
                <Typography component="p">
                  In no event shall Rajendra Glass House or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if Rajendra Glass House or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </Typography>
              </Box>

              <Box component="section">
                <Typography variant="h2" component="h2" className="font-serif text-2xl text-ink-950 font-bold mb-4">5. Governing Law</Typography>
                <Typography component="p">
                  These terms and conditions are governed by and construed in accordance with the laws of Tamil Nadu, India, and you irrevocably submit to the exclusive jurisdiction of the courts in Coimbatore.
                </Typography>
              </Box>

            </Box>
          </AnimatedContainer>
        </Box>
      </Box>
    </Box>
  );
}
