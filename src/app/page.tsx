import { Header, Hero, PrayerTimes, MissionVision, Activities, Donate, Shabapp, Footer } from "@/components/sections"
import { generateMetadata as genMeta, generateStructuredData } from "@/lib/metadata"
import { StructuredData } from "@/components/StructuredData"

export const metadata = genMeta('home')

export default function Home() {
  const structuredData = generateStructuredData('home')
  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      <Header />
      <main id="main-content">
        <Hero />
        <PrayerTimes />
        <MissionVision />
        <Activities />
        <Donate />
        <Shabapp />
      </main>
      <Footer />
    </>
  );
}