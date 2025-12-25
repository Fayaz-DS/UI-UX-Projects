import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Web Developer | High-Performance Websites",
    template: "%s | Web Developer"
  },
  description:
    "I build fast, scalable, and conversion-focused websites for startups, agencies, and businesses.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "High-Performance Web Developer",
    description:
      "Modern, fast, and conversion-focused websites built for real business results.",
    url: "https://your-domain.com",
    siteName: "Your Name / Brand",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
