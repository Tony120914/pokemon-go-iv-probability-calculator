import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Pokemon GO IV Probability Calculator',
    description: 'Given the encounter\'s IV floor, calculate the probabilities of obtaining a Pokemon with the desirable IVs or higher in Pokemon GO.',
    keywords: 'pokemon, go, iv, probability, calculator, min, minimum, floor, cumulative',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
