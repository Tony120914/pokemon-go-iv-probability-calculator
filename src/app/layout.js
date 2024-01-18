import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Pokemon GO IV Probability Calculator',
    description: 'Calculates the probability of obtaining a Pokemon given an IV floor in Pokemon GO.',
    keywords: 'pokemon go, iv, probability, calculator, floor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
