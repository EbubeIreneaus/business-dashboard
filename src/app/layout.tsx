"use client"
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import Tailwind from "primereact/passthrough/tailwind";
import 'primeicons/primeicons.css';
import { Providers } from "./provider";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <Providers>
            <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            {children}
          </PrimeReactProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
