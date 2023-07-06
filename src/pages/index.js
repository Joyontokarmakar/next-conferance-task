import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from "@/components/HeroBanner";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <HeroBanner/>
      <Sponsor/>
      <Footer/>
    </main>
  )
}
