import '../styles/globals.css'
import { Cairo } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const cairo = Cairo({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={cairo.className}>
      <Component {...pageProps} />
    </main>
  )
}