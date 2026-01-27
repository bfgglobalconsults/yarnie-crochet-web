import { BestsellersSection } from '@/components/BestsellersSection'
import { CustomOrderSection } from '@/components/CustomOrderSection'
import { FAQ } from '@/components/FAQ'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Testimonials } from '@/components/Testimonials'
import { WhyCrochet } from '@/components/WhyCrochet'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

export default async function HomePage() {
  return (
    <>
      <Hero />
      <WhyCrochet />
      <BestsellersSection />
      <CustomOrderSection />
      <Testimonials />
      <FAQ />

      <Newsletter />
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })

  const page = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  return generateMeta({ doc: page.docs?.[0] })
}
