import { Collection } from '@/payload-types'
import Link from 'next/link'

interface CollectionLinkProps {
  collection: Collection
  className?: string
  children?: React.ReactNode
}

export function CollectionLink({ collection, className, children }: CollectionLinkProps) {
  return (
    <Link href={`/collections/${collection.slug}`} className={className}>
      {children || collection.title}
    </Link>
  )
}
