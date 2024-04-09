import Link from 'next/link'
import Header from '@/app/header'

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href='/about'>about</Link>
      </p>
    </main>
  )
}
