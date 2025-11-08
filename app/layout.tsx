import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intelliwave - Agence d\'Automatisation AI & Chatbots',
  description: 'Spécialistes en création de chatbots sur mesure avec n8n. Automatisez vos processus avec l\'intelligence artificielle.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
