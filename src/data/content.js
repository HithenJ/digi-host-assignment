/*
  Single source of truth for all page copy & structure.
  Replace `image: null` with an imported asset (or a /public path)
  once the real images are available — the components already
  render a styled placeholder when `image` is null.
*/

export const nav = {
  brand: 'ALKESH',
  links: [
    { label: 'Brand Soul', href: '#brand-soul' },
    { label: 'Building For Bharat', href: '#next-chapter' },
    { label: 'Learn with AG', href: '#brands' },
  ],
  cta: { label: 'Work With Me', href: '#next-chapter' },
}

export const questions = [
  "Why do some brands connect deeply while others don't?",
  'Why do some founders feel aligned, while others burn out chasing trends?',
]

export const philosophyCards = [
  { title: 'SOUL', image: null },
  { title: 'STYLE', image: null },
  { title: 'SCALE', image: null },
]

export const brands = [
  { name: 'DiigiiHost', desc: 'Making Digital Affordable And Human For Small Businesses', featured: true, image: null },
  { name: 'Best Rate Websites', desc: 'Making Digital Affordable And Human For Small Businesses' },
  { name: 'Anuved', desc: 'Rediscovering Purity Through Session' },
  { name: 'Soupherb', desc: 'Reimagining Wellness With Purpose' },
  { name: 'NM Fest', desc: 'Giving A City Its Symbol, Its Pride, And Its Global Identity' },
  { name: 'Combo Jumbo & COJ', desc: 'Turning Restaurants Into Communities Built On Togetherness' },
  { name: 'Learn & Achieve', desc: 'Turning Fragmented Learning Into A Nationwide Education Ecosystem' },
  { name: 'Akirhs', desc: 'Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.' },
  { name: 'NAFSCOB', desc: 'Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.' },
  { name: 'HEFT', desc: 'Transforming Heavy Lifting Certifications Into A 3-Day Intelligent, Automated System.' },
  { name: 'World Flair', desc: 'Unifying Global Sports Procurement Into One Smart, Consolidated Engine.' },
  { name: 'Dr. Gaikwad', desc: 'Proof That Science, Design, And Soul Can Coexist.' },
  { name: 'Loma Dental', desc: 'Proof That Science, Design, And Soul Can Coexist.' },
]

export const manifesto = [
  {
    lead: 'A BRAND',
    body: 'is not a logo. It’s a living system of emotion and intention.',
    image: null,
    align: 'left',
  },
  {
    lead: 'A FOUNDER',
    body: 'is Not A Title. It’s The Discipline To Build What Others Only Imagine.',
    image: null,
    align: 'right',
  },
  {
    lead: 'And BUSINESS',
    body: 'is Not About The Market. It’s About The Value You Choose To Create, Consistently.',
    image: null,
    align: 'left',
  },
]

export const testimonials = [
  { quote: 'Alkesh doesn’t just build brands — he understands their soul. Working with him changed how we see our own business.', name: 'A Founder', role: 'Small Business Owner' },
  { quote: 'The clarity he brings is rare. Every decision suddenly had a reason behind it, aligned with who we truly are.', name: 'A Creator', role: 'Community Builder' },
  { quote: 'It never felt like an agency. It felt like a partner who genuinely cared about the people behind the brand.', name: 'A Partner', role: 'Startup Founder' },
]

export const nextChapter = {
  lines: [
    'My next chapter is about building with people, not just for them.',
    'Through The Bharat Building Mission, I\'m creating a community of founders from every corner of India — Tier 2, Tier 3, and beyond',
    'who want to grow with purpose, not pressure. Because someday, when someone says "Bharat is rising," I want to know we helped build that rise, with soul.',
  ],
  cta: {
    title: 'This is not my story,',
    subtitle: 'It’s a reminder,',
    tagline: 'that every founder’s story can have a soul.',
    button: 'Work With Me',
  },
}




