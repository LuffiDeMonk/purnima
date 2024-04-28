import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/components/fonts/Fonts";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/common/ScrollToTop";


export const metadata: Metadata = {
  title: "Purnima Karki - UX Designer from Detroit, Michigan",
  description: "Emi Lantz delivers expert UX Design and Digital Strategy solutions, focusing on practical business applications to enhance execution, drive conversions, and improve user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, 'bg-black')}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
