import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/Header'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ConecteOng',
  description:
    'ConecteOng é um app que conecta voluntários a ONGs, facilitando a realização de ações solidárias e o engajamento em causas sociais. Junte-se a nós e faça a diferença!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  )
}
