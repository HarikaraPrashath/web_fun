import { Hero } from '@/components/Hero'
import { Memories } from '@/components/Memories'
import { Letter } from '@/components/Letter'
import { Valentine } from '@/components/Valentine'
import { Countdown } from '@/components/Countdown'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Memories />
      <Letter />
      <Valentine />
      <Countdown />
      <Footer />
    </main>
  )
}
