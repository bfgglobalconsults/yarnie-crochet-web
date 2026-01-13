// Seed data for collections based on your structure
// Run this through Payload's seed functionality or manually create via admin

export const collectionsData = {
  patterns: {
    title: 'Patterns',
    type: 'patterns',
    children: [
      {
        title: 'New In',
        slug: 'new-in',
        children: [
          { title: 'Clothing', slug: 'new-in-clothing' },
          { title: 'Dresses', slug: 'new-in-dresses' },
          { title: 'Tops', slug: 'new-in-tops' },
          { title: 'Vests', slug: 'new-in-vests' },
          { title: 'Cardigans & Jumper', slug: 'new-in-cardigans-jumper' },
          { title: 'Beachwear', slug: 'new-in-beachwear' },
          { title: 'Sweater', slug: 'new-in-sweater' },
          { title: 'Swinset', slug: 'new-in-swinset' },
          { title: 'Lounge wear', slug: 'new-in-lounge-wear' },
          { title: 'Hats', slug: 'new-in-hats' },
          { title: 'Jackets', slug: 'new-in-jackets' },
          { title: 'Kimono', slug: 'new-in-kimono' },
          { title: 'Shirts', slug: 'new-in-shirts' },
          { title: 'Skirts', slug: 'new-in-skirts' },
        ],
      },
      {
        title: 'Women',
        slug: 'women',
        children: [
          { title: 'Dresses', slug: 'women-dresses' },
          { title: 'Tops', slug: 'women-tops' },
          { title: 'Kimono', slug: 'women-kimono' },
          { title: 'Jackets', slug: 'women-jackets' },
          { title: 'Lounge wear', slug: 'women-lounge-wear' },
          { title: 'Twin set', slug: 'women-twin-set' },
          { title: 'Beach wear', slug: 'women-beach-wear' },
          { title: 'Cardigans & Jumper', slug: 'women-cardigans-jumper' },
          { title: 'Trousers', slug: 'women-trousers' },
          { title: 'Shirts', slug: 'women-shirts' },
          { title: 'Skirts', slug: 'women-skirts' },
        ],
      },
      {
        title: 'Men',
        slug: 'men',
        children: [
          { title: 'Vests', slug: 'men-vests' },
          { title: 'Sweater', slug: 'men-sweater' },
          { title: 'Shirts', slug: 'men-shirts' },
          { title: 'Tops', slug: 'men-tops' },
          { title: 'Cardigan & Jumper', slug: 'men-cardigan-jumper' },
        ],
      },
      {
        title: 'Kids',
        slug: 'kids',
        children: [
          { title: 'Kids sweater', slug: 'kids-sweater' },
          { title: 'Kids Tops', slug: 'kids-tops' },
          { title: 'Kids Vests', slug: 'kids-vests' },
          { title: 'Hats', slug: 'kids-hats' },
        ],
      },
      {
        title: 'Accessories',
        slug: 'accessories',
        children: [
          { title: 'Hats', slug: 'accessories-hats' },
          { title: 'Scarves', slug: 'accessories-scarves' },
          { title: 'Scrunchies & Muffler', slug: 'accessories-scrunchies-muffler' },
          { title: 'Headbands', slug: 'accessories-headbands' },
          { title: 'Bags & Purses', slug: 'accessories-bags-purses' },
          { title: 'Earings', slug: 'accessories-earings' },
        ],
      },
      {
        title: 'Home & Living',
        slug: 'home-living',
        children: [
          { title: 'Cushion', slug: 'home-cushion' },
          { title: 'Curtains', slug: 'home-curtains' },
          { title: 'Blankets', slug: 'home-blankets' },
          { title: 'Rugs & Mats', slug: 'home-rugs-mats' },
        ],
      },
    ],
  },
  material: {
    title: 'Material',
    type: 'material',
    children: [
      {
        title: 'Yarn',
        slug: 'yarn',
        children: [
          { title: 'Colours New', slug: 'yarn-colours-new' },
          { title: 'New Yarn Lines', slug: 'yarn-new-lines' },
          { title: 'Our Favourites', slug: 'yarn-favourites' },
          { title: 'Glow-in-the-dark yarns', slug: 'yarn-glow-dark' },
          { title: 'Undyed Bare Yarn', slug: 'yarn-undyed-bare' },
          { title: 'View All', slug: 'yarn-view-all' },
        ],
      },
      {
        title: 'Hooks',
        slug: 'hooks',
        children: [
          { title: 'New In', slug: 'hooks-new-in' },
          { title: 'Single Crochet Hooks or Sizes', slug: 'hooks-single-sizes' },
          { title: 'Crochet Hook Sets', slug: 'hooks-sets' },
          { title: 'Crochet Pins', slug: 'hooks-pins' },
          { title: 'View All', slug: 'hooks-view-all' },
        ],
      },
      {
        title: 'Hook Type',
        slug: 'hook-type',
        children: [
          { title: 'Ergonomic Handles', slug: 'hook-type-ergonomic' },
          { title: 'Tunisian Hooks', slug: 'hook-type-tunisian' },
          { title: 'Inline Hooks', slug: 'hook-type-inline' },
          { title: 'Tapered Hooks', slug: 'hook-type-tapered' },
          { title: 'Darning Needle', slug: 'hook-type-darning' },
        ],
      },
      {
        title: 'Tools',
        slug: 'tools',
        children: [
          { title: 'Row Counters & Stitch Marker', slug: 'tools-counters-markers' },
          { title: 'Gauge & Measuring Tools', slug: 'tools-gauge-measuring' },
          { title: 'Filling & Stuffing', slug: 'tools-filling-stuffing' },
          { title: 'Fibre Dyes & Washes', slug: 'tools-dyes-washes' },
          { title: 'Blocking Tools', slug: 'tools-blocking' },
          { title: 'Emblishment & Finishing', slug: 'tools-emblishment-finishing' },
          { title: 'Storage & Organization', slug: 'tools-storage-organization' },
          { title: 'Ball Winders & Yarn Swifts', slug: 'tools-ball-winders-swifts' },
        ],
      },
    ],
  },
}
