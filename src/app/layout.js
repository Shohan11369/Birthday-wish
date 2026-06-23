"use client"; 

import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"><body className="bg-black text-white">
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}