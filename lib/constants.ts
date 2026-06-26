import { NavLink } from "@/types";

export const SITE_NAME = "Rajendra Glass House";
export const BASE_URL = "https://rajendraglasshouse.com";

export const PHONE = "+919443555522";
export const PHONE_DISPLAY = "+91 94435 55522";
export const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20glass%20services.`;
export const MAPS_URL = "https://maps.app.goo.gl/HkXdWiF5vUwinxM97";
export const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d978.6011766547734!2d76.9543678!3d11.0074786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858e9dfa9cf7f%3A0x25e3d6f5e3b8b5cd!2sRajendra%20Glass%20House!5e0!3m2!1sen!2sin!4v1718700000000!5m2!1sen!2sin";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_INFO = {
  address: "847, MTP Road, (Near Flower Market), Coimbatore - 02.",
  phone: PHONE_DISPLAY,
  email: "rajendraglasshouse@gmail.com",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/rajendraglasshouse",
  instagram: "https://www.instagram.com/rajendra_glass_house/?hl=en",
  whatsapp: WHATSAPP_URL,
};
