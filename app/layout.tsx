import type { Metadata } from "next"
import "./globals.css"
import { Montserrat, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });


import { SITE_NAME, BASE_URL, CONTACT_INFO, PHONE } from "@/lib/constants"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rajendra Glass House | Saint Gobain Glass in Coimbatore – Toughened Glass, Mirrors & Glass Partitions in RS Puram",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Rajendra Glass House is Coimbatore's trusted glass shop near RS Puram, offering Saint Gobain glass, toughened glass, LED mirrors, shower enclosures, glass railings & partitions. As leading glass dealers in Coimbatore, call 098898 82014.",
  keywords: [
    "glass shop in Coimbatore",
    "toughened glass Coimbatore",
    "Saint Gobain glass dealer Coimbatore",
    "best glass shop in Coimbatore",
    "glass house Coimbatore",
    "glass dealers Coimbatore",
    "mirror shop Coimbatore",
    "frameless shower enclosure Coimbatore",
    "glass partition Coimbatore",
    "glass railing Coimbatore",
    "LED mirror Coimbatore",
    "glass shop RS Puram",
    "Rajendra Glass House",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: "Rajendra Glass House | Premium Glass & Mirror Shop in Coimbatore",
    description:
      "Coimbatore's trusted glass shop since 1977. Toughened glass, mirrors, shower enclosures, office partitions & more.",
    images: [{ url: "/Rajendra_Logo.svg", width: 800, height: 800, alt: "Rajendra Glass House Logo" }],
  },
  icons: {
    icon: "/Rajendra_Logo.svg",
    apple: "/Rajendra_Logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajendra Glass House | Premium Glass Coimbatore",
    description: "Coimbatore's leading glass & mirror specialist since 1977.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  "name": SITE_NAME,
  "description": "Premium architectural glass and mirror solutions in Coimbatore since 1977.",
  "url": BASE_URL,
  "telephone": PHONE,
  "email": CONTACT_INFO.email,
  "foundingDate": "1977",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sir Shanmugam Road",
    "addressLocality": "R.S. Puram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641002",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0074786,
    "longitude": 76.9543678,
  },
  "openingHours": ["Mo-Sa 09:30-19:30"],
  "priceRange": "₹₹",
  "image": `${BASE_URL}/Rajendra_glass_house_logo.svg`,
  "sameAs": [
    "https://facebook.com/rajendraglasshouse",
    "https://instagram.com/rajendraglasshouse",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Glass & Mirror Products",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Toughened Glass Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frameless Shower Enclosures" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Railings & Balcony" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Glass Partitions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LED Smart Mirrors" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Decorative Glass" } },
    ],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col bg-surface-body relative">
              <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay z-0" />
              <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
