import './globals.css'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
