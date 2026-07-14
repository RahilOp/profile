import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Syed Ali Abbas Rahil | AI Engineer',
  description: 'AI Engineer specializing in LLMs, agentic architectures, and RAG pipelines.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${jakarta.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
