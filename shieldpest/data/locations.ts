export interface Suburb {
  name: string;
  slug: string;
  uniqueContent: string;
  commonPests: string[];
  nearbySuburbs: string[];
}

export interface Region {
  name: string;
  slug: string;
  suburbs: Suburb[];
}

export const locations: Region[] = [
  {
    name: 'Southern Adelaide',
    slug: 'southern-adelaide',
    suburbs: [
      {
        name: 'Seaford',
        slug: 'seaford',
        uniqueContent: "Seaford's coastal position means high humidity and salt air — conditions that accelerate timber decay and attract termites. Properties near the foreshore and older homes require regular pest inspections to catch issues early.",
        commonPests: ['termites', 'cockroaches', 'spiders'],
        nearbySuburbs: ['Moana', 'Port Noarlunga', 'Seaford Rise'],
      },
      {
        name: 'Moana',
        slug: 'moana',
        uniqueContent: "Moana's mix of beachside properties and newer developments creates varied pest challenges. Properties backing onto scrubland are particularly at risk during cooler months when pests seek warmth.",
        commonPests: ['termites', 'ants', 'spiders'],
        nearbySuburbs: ['Seaford', 'Maslin Beach', 'Seaford Meadows'],
      },
      {
        name: 'Aldinga Beach',
        slug: 'aldinga-beach',
        uniqueContent: "Aldinga Beach's rapid residential growth means many homes sit on previously cleared land — ideal conditions for subterranean termites. New developments can be especially vulnerable.",
        commonPests: ['termites', 'rodents', 'spiders'],
        nearbySuburbs: ['Port Willunga', 'Sellicks Beach', 'Aldinga'],
      },
    ],
  },
  {
    name: 'Fleurieu Peninsula',
    slug: 'fleurieu-peninsula',
    suburbs: [
      {
        name: 'Victor Harbor',
        slug: 'victor-harbor',
        uniqueContent: "Victor Harbor's established tree-lined streets and mature gardens create ideal harbourage for termites and possums. Many homes in the area are older — an age where original termite barriers may have broken down.",
        commonPests: ['termites', 'possums', 'cockroaches'],
        nearbySuburbs: ['Encounter Bay', 'Port Elliot', 'Hindmarsh Valley'],
      },
      {
        name: 'Port Elliot',
        slug: 'port-elliot',
        uniqueContent: "Port Elliot's coastal heritage homes offer beautiful architecture but aren't immune to pest pressure. The mix of landscaped gardens and nearby coastal reserves means ant, spider, and rodent issues are common.",
        commonPests: ['ants', 'spiders', 'rodents'],
        nearbySuburbs: ['Middleton', 'Victor Harbor', 'Goolwa'],
      },
    ],
  },
  {
    name: 'Marion Council',
    slug: 'marion',
    suburbs: [
      {
        name: 'Hallett Cove',
        slug: 'hallett-cove',
        uniqueContent: "Hallett Cove's rocky terrain and coastal proximity make it a hotspot for spiders and rodents. The unique conservation park nearby means properties on the fringe need robust pest barriers.",
        commonPests: ['spiders', 'rodents', 'ants'],
        nearbySuburbs: ['Sheidow Park', 'Trott Park', 'Marino'],
      },
    ],
  },
];
