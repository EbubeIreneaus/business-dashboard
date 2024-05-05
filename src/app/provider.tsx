// app/providers.tsx
"use client";
import React from 'react'
import { NextUIProvider } from "@nextui-org/react";

const BackendUrl = 'http://127.0.0.1:8000/api'

export const AppBackendUrl = React.createContext(BackendUrl)

export function Providers({ children }: { children: React.ReactNode }) {
  return(
     <NextUIProvider>
      <AppBackendUrl.Provider value={BackendUrl}>
        {children}
      </AppBackendUrl.Provider>
      </NextUIProvider>
  )
}
