import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Pokemon GO IV Probability Calculator',
    description: 'Finds the probability of obtaining a Pokemon above a certain amount of IVs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
