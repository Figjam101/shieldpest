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
    name: 'Western Sydney',
    slug: 'western-sydney',
    suburbs: [
      {
        name: 'Parramatta',
        slug: 'parramatta',
        uniqueContent: "As one of Sydney's oldest settlements, Parramatta's mix of heritage timber homes and modern developments creates varied pest challenges. Older properties near the Parramatta River are particularly susceptible to termite activity due to high soil moisture levels.",
        commonPests: ['termites', 'cockroaches', 'rodents'],
        nearbySuburbs: ['Granville', 'Harris Park', 'North Parramatta'],
      },
      {
        name: 'Blacktown',
        slug: 'blacktown',
        uniqueContent: "Blacktown's rapid residential growth means many homes sit on previously cleared bushland — ideal conditions for subterranean termites. New developments can be especially vulnerable during the first 5 years before chemical barriers degrade.",
        commonPests: ['termites', 'ants', 'spiders'],
        nearbySuburbs: ['Seven Hills', 'Rooty Hill', 'Mount Druitt'],
      },
      {
        name: 'Penrith',
        slug: 'penrith',
        uniqueContent: "Penrith's position at the base of the Blue Mountains means higher rainfall and humidity — conditions that attract termites, cockroaches, and rodents. Properties backing onto bushland are particularly at risk during cooler months when pests seek warmth.",
        commonPests: ['termites', 'rodents', 'spiders'],
        nearbySuburbs: ['Emu Plains', 'Glenmore Park', 'Kingswood'],
      },
    ],
  },
  {
    name: 'Hills District',
    slug: 'hills-district',
    suburbs: [
      {
        name: 'Castle Hill',
        slug: 'castle-hill',
        uniqueContent: "Castle Hill's established tree-lined streets and mature gardens create ideal harbourage for termites and possums. Many homes in the area are 20–40 years old — an age where original termite barriers may have broken down.",
        commonPests: ['termites', 'possums', 'cockroaches'],
        nearbySuburbs: ['Baulkham Hills', 'Cherrybrook', 'West Pennant Hills'],
      },
      {
        name: 'Bella Vista',
        slug: 'bella-vista',
        uniqueContent: "Bella Vista's newer housing estates offer modern construction but aren't immune to pest pressure. The mix of landscaped gardens and nearby open spaces means ant, spider, and rodent issues are common, especially in warmer months.",
        commonPests: ['ants', 'spiders', 'rodents'],
        nearbySuburbs: ['Norwest', 'Kellyville', 'Baulkham Hills'],
      },
    ],
  },
  {
    name: 'Northern Beaches',
    slug: 'northern-beaches',
    suburbs: [
      {
        name: 'Manly',
        slug: 'manly',
        uniqueContent: "Manly's coastal position means high humidity and salt air — conditions that accelerate timber decay and attract termites. Properties near the foreshore and older federation homes require regular pest inspections to catch issues early.",
        commonPests: ['termites', 'cockroaches', 'ants'],
        nearbySuburbs: ['Fairlight', 'Queenscliff', 'North Head'],
      },
    ],
  },
  {
    name: 'Inner West',
    slug: 'inner-west',
    suburbs: [
      {
        name: 'Newtown',
        slug: 'newtown',
        uniqueContent: "Newtown's dense terrace housing, shared walls, and older construction make it a hotspot for cockroach, rodent, and bed bug infestations. The proximity of restaurants and cafes along King Street adds to pest pressure in nearby residential streets.",
        commonPests: ['cockroaches', 'rodents', 'bed bugs'],
        nearbySuburbs: ['Enmore', 'Erskineville', 'Camperdown'],
      },
    ],
  },
];
