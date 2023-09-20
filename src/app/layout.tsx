import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap', })

export const metadata: Metadata = {
  title: 'AreaTec Consultoria',
  description: 'Cidades Inteligentes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
