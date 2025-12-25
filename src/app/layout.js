import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Web Developer | High-Performance Websites",
  description:
    "I build fast, scalable, and conversion-focused websites for businesses."
};


