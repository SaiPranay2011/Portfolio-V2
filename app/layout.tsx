import "@/public/styles/globals.scss"
import type { Metadata } from 'next'
import { NextScript } from "next/document"
export const metadata: Metadata = {
  title: 'Sai Pranay',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* <head><title>Sai Pranay</title></head> */}
      </head>
      <body className="loading">
       {children}
      </body>
      </html>
  )
}
