import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Header } from './components/navigation/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'binx Healthcare - Enlightenment',
  description: 'Training management',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Header/>
        <div className='px-3'>
        {children}
        </div>
        </body>
    </html>
  )
}
