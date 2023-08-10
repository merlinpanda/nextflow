"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider withGlobalStyles withNormalizeCSS withCSSVariables>
        {children}
        </MantineProvider>
      </body>
    </html>
  )
}
