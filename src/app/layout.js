import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  fallback: ["sans-serif", "Open-Sans"],
})


export const metadata = {
  title: 'MediQueue - Tutor Booking System',
  description: 'Find and book professional tutors for your learning needs',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}

      </body>
    </html>
  );
}
