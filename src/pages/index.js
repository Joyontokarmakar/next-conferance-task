import { Inter } from 'next/font/google'
import Conferences from "@/components/Conferences";
import Sponsor from "@/components/Sponsor";
import HeroBanner from "@/components/HeroBanner";

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={`${inter.className}`}>
      <HeroBanner/>
      <Conferences/>
      <Sponsor/>
    </main>
  )
}

export default Home;