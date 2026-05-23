//with this better auth is not able to connect with mongodb
import dns from "node:dns";
dns.setServers(["1.1.1.1", "1.0.0.1"]);

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

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
        <Footer />

        <Toaster
          position="bottom-right"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast: 'w-full flex items-center gap-3 p-4 rounded-xl border backdrop-blur-md shadow-lg font-sans text-sm',
              success: 'bg-emerald-500/40 border-emerald-500/50 text-emerald-600',
              error: 'bg-rose-500/30 border-rose-500/50 text-rose-700',
              info: 'bg-blue-500/40 border-blue-500/50 text-blue-600',
            }
          }}
        />

      </body>
    </html>
  );
}
