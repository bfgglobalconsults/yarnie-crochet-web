import configPromise from '@payload-config'
import clsx from 'clsx'
import { getPayload } from 'payload'
import React, { Suspense } from 'react'

import { Item } from './Item'

async function List() {
  const payload = await getPayload({ config: configPromise })
  const collectionsData = await payload.find({
    collection: 'collections',
    sort: 'order',
    where: {
      status: {
        equals: 'active',
      },
    },
  })

  const collections = collectionsData.docs?.map((collection) => {
    return {
      href: `/collections/${collection.slug}`,
      title: collection.title,
    }
  })

  return (
    <React.Fragment>
      <nav>
        <ul className="flex gap-3">
          <Item title="All" href="/collections" />
          <Suspense fallback={null}>
            {collections.map((collection) => {
              return <Item {...collection} key={collection.href} />
            })}
          </Suspense>
        </ul>
      </nav>
    </React.Fragment>
  )
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded'
const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300'
const items = 'bg-neutral-400 dark:bg-neutral-700'

export function CategoryTabs() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <List />
    </Suspense>
  )
}
