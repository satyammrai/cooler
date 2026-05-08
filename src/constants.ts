export interface Product {
  id: string;
  name: string;
  modelCode: string;
  category: 'Industrial' | 'Commercial' | 'Residential';
  rating: number;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  fullSpecs?: {
    label: string;
    value: string;
  }[];
  description: string;
  price: string;
  bg: string;
  tagBg: string;
  image: string;
  textColor?: string;
  segment: 'antarctica' | 'himalaya';
  trending?: boolean;
  warranty?: string;
  applications?: string[];
  benefits?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'ak09lc',
    name: 'Antarctica AK09LC',
    modelCode: 'AK09LC',
    category: 'Industrial',
    rating: 4.9,
    segment: 'antarctica',
    trending: true,
    warranty: '1200 Days',
    features: ['30-Inch Aluminum Fan', 'Premium Knob Controls', 'Auto Swing Louver', 'Extended Cooling Pad', 'Low Maintenance'],
    specs: [
      { label: 'Tank Capacity', value: '90 Litr.' },
      { label: 'Cooling Area', value: '2,500 sq. ft.' },
      { label: 'Air Flow', value: '18,000 m³/h' }
    ],
    fullSpecs: [
      { label: 'Motor Type', value: 'Single Phase, 3 Speed' },
      { label: 'Motor Rotation', value: '900 RPM' },
      { label: 'Wattage', value: '490W' },
      { label: 'Fan Type', value: 'Axial Fan' },
      { label: 'Fan Noise', value: '68 db' },
      { label: 'Cooling Pad Size', value: '1095 × 100 × 1180 mm' },
      { label: 'Gross Weight', value: '54 Kgs' },
      { label: 'Product Dimensions', value: '1130 × 705 × 1550 mm' }
    ],
    description: 'The ANTARCTICA AK09LC is a premium air cooler offering the perfect balance of cooling power and water efficiency. With its 90-liter tank and powerful 30-inch fan, it provides extended cooling for industrial spaces.',
    price: '₹18,999',
    bg: 'bg-blue-50',
    tagBg: 'bg-green-500',
    image: '/images/coolers/ak09lc.webp',
    applications: ['Industrial workshops', 'Manufacturing facilities', 'Commercial warehouses', 'Agricultural buildings'],
    benefits: ['Eco-friendly cooling', 'Energy efficient', 'Low maintenance', 'Fast cooling effect (7-10°C reduction)']
  },
  {
    id: 'ak09pc',
    name: 'Antarctica AK09PC',
    modelCode: 'AK09PC',
    category: 'Commercial',
    rating: 4.8,
    segment: 'antarctica',
    warranty: '1200 Days',
    features: ['30-Inch Aluminum Fan', 'Portable Design', 'Auto Swing Louver', 'Premium Controls', 'Durable Construction'],
    specs: [
      { label: 'Tank Capacity', value: '90 Litr.' },
      { label: 'Cooling Area', value: '2,200 sq. ft.' },
      { label: 'Air Flow', value: '17,000 m³/h' }
    ],
    description: 'The ANTARCTICA AK09PC offers portable cooling excellence for commercial spaces with flexible deployment options.',
    price: '₹17,499',
    bg: 'bg-slate-50',
    tagBg: 'bg-green-500',
    image: '/images/coolers/ak09pc.webp',
    applications: ['Commercial spaces', 'Event venues', 'Temporary structures', 'Retail spaces'],
    benefits: ['Portable and flexible', 'Energy efficient', 'Easy maintenance', 'Rapid cooling']
  },
  {
    id: 'ak12lc',
    name: 'Antarctica AK12LC',
    modelCode: 'AK12LC',
    category: 'Industrial',
    rating: 4.9,
    segment: 'antarctica',
    warranty: '1200 Days',
    features: ['Large Cooling Pad', 'Heavy Duty Motor', 'Triple Speed Control', 'Auto Drain System', 'Durable Frame'],
    specs: [
      { label: 'Tank Capacity', value: '120 Litr.' },
      { label: 'Cooling Area', value: '3,200 sq. ft.' },
      { label: 'Air Flow', value: '22,000 m³/h' }
    ],
    description: 'The ANTARCTICA AK12LC provides superior cooling performance for large industrial complexes with enhanced water tank capacity and airflow.',
    price: '₹22,999',
    bg: 'bg-cyan-50',
    tagBg: 'bg-green-500',
    image: '/images/coolers/ak12lc.webp',
    applications: ['Large manufacturing units', 'Heavy industrial zones', 'Warehouses', 'Large commercial spaces'],
    benefits: ['High cooling capacity', 'Extended runtime', 'Heavy-duty construction', 'Cost-effective']
  },
  {
    id: 'ak12pc',
    name: 'Antarctica AK12PC',
    modelCode: 'AK12PC',
    category: 'Commercial',
    rating: 4.8,
    segment: 'antarctica',
    warranty: '1200 Days',
    features: ['Portable Platform', 'Adjustable Louver', 'Easy Maintenance', 'Triple Speed', 'Quality Cooling Pads'],
    specs: [
      { label: 'Tank Capacity', value: '120 Litr.' },
      { label: 'Cooling Area', value: '3,000 sq. ft.' },
      { label: 'Air Flow', value: '21,000 m³/h' }
    ],
    description: 'The ANTARCTICA AK12PC brings portability to commercial cooling with high-capacity water tank and powerful performance.',
    price: '₹21,499',
    bg: 'bg-indigo-50',
    tagBg: 'bg-green-500',
    image: '/images/coolers/ak12pc.webp',
    applications: ['Corporate offices', 'Shopping centers', 'Event management', 'Temporary setups'],
    benefits: ['Highly portable', 'Professional cooling', 'Easy setup', 'Reliable performance']
  },
  {
    id: 'ak20lc',
    name: 'Antarctica AK20LC',
    modelCode: 'AK20LC',
    category: 'Industrial',
    rating: 4.9,
    segment: 'antarctica',
    warranty: '1200 Days',
    features: ['Premium Quality', 'Extended Pad Area', 'Robust Construction', 'High Efficiency', 'Advanced Motor'],
    specs: [
      { label: 'Tank Capacity', value: '200 Litr.' },
      { label: 'Cooling Area', value: '4,500 sq. ft.' },
      { label: 'Air Flow', value: '28,000 m³/h' }
    ],
    description: 'The ANTARCTICA AK20LC is the flagship industrial cooler delivering maximum cooling capacity for ultra-large spaces with superior efficiency.',
    price: '₹28,999',
    bg: 'bg-teal-50',
    tagBg: 'bg-green-500',
    image: '/images/coolers/ak20lc.webp',
    applications: ['Large factories', 'Mining operations', 'Construction sites', 'Outdoor industrial zones'],
    benefits: ['Maximum cooling output', 'Extended operation time', 'Professional-grade', 'Cost-effective for large spaces']
  },
  {
    id: 'ak20pc',
    name: 'Antarctica AK20PC',
    modelCode: 'AK20PC',
    category: 'Commercial',
    rating: 4.8,
    segment: 'antarctica',
    warranty: '1200 Days',
    features: ['Mobile Base', 'Large Tank', 'Professional Design', 'Quiet Operation', 'Premium Build'],
    specs: [
      { label: 'Tank Capacity', value: '200 Litr.' },
      { label: 'Cooling Area', value: '4,200 sq. ft.' },
      { label: 'Air Flow', value: '27,000 m³/h' }
    ],
    description: 'The ANTARCTICA AK20PC offers premium commercial cooling with maximum tank capacity and professional-grade cooling performance.',
    price: '₹27,499',
    bg: 'bg-emerald-50',
    tagBg: 'bg-green-500',
    image: '/images/coolers/ak20pc.webp',
    applications: ['Convention centers', 'Large retail spaces', 'Industrial commercial zones', 'Major events'],
    benefits: ['Enterprise-grade cooling', 'High portability', 'Professional appearance', 'Reliable & durable']
  },
  {
    id: 'mist-pro-2k',
    name: 'Mist-Pro 2k',
    modelCode: 'MP-2K',
    category: 'Commercial',
    rating: 4.8,
    segment: 'himalaya',
    features: ['Ultra-Fine Mist', 'Smart IoT Control', 'Low Noise'],
    specs: [
      { label: 'Air Delivery', value: '12,000 m³/hr' },
      { label: 'Cooling Area', value: '1,500 sq. ft.' },
      { label: 'Noise Level', value: '55 dB' }
    ],
    description: 'Engineered for high-traffic commercial spaces with ultrasonic misting technology.',
    price: '$649',
    bg: 'bg-lime-50',
    tagBg: 'bg-green-500',
    image: '/images/coolers/mist-pro-2k.jpg',
  },
  {
    id: 'homechill-z1',
    name: 'HomeChill Z1',
    modelCode: 'HC-Z1',
    category: 'Residential',
    rating: 4.7,
    segment: 'himalaya',
    features: ['Honeycomb Cooling', 'Remote Operation', 'Portable'],
    specs: [
      { label: 'Air Delivery', value: '4,500 m³/hr' },
      { label: 'Cooling Area', value: '600 sq. ft.' },
      { label: 'Power Consumption', value: '120 Watts' }
    ],
    description: 'Brings laboratory-grade cooling to the residential sector with a 4D honeycomb matrix.',
    price: '$299',
    bg: 'bg-slate-800',
    tagBg: 'bg-white',
    textColor: 'text-white',
    image: '/images/coolers/homechill-z1.jpg',
  },
  {
    id: 'eco-breeze-v2',
    name: 'Eco-Breeze V2',
    modelCode: 'EB-V2',
    category: 'Residential',
    rating: 4.6,
    segment: 'himalaya',
    features: ['Solar Ready', 'Air Purifier', 'Dust Filter'],
    specs: [
      { label: 'Efficiency', value: 'A++ Rated' },
      { label: 'Decibel Level', value: '38 dB' },
      { label: 'Weight', value: '9 kg' }
    ],
    description: 'The world’s most sustainable evaporation unit with integrated solar input support.',
    price: '$349',
    bg: 'bg-positivus-green',
    tagBg: 'bg-white',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&q=80',
  },
  {
    id: 'retail-tower',
    name: 'Retail Tower',
    category: 'Commercial',
    rating: 4.7,
    segment: 'himalaya',
    features: ['Vertical Design', 'Foot-Pedal Control', '360 Swing'],
    specs: [
      { label: 'Footprint', value: '1.5 sq. ft.' },
      { label: 'Height', value: '6.2 ft' },
      { label: 'Swing', value: 'Full 360°' }
    ],
    description: 'Space-saving vertical tower designed for boutique retail and narrow aisle cooling.',
    price: '$499',
    bg: 'bg-positivus-dark',
    tagBg: 'bg-positivus-green',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=800&q=80',
  },
  {
    id: 'desert-storm',
    name: 'Desert-Storm',
    category: 'Industrial',
    rating: 5.0,
    segment: 'antarctica',
    features: ['Arid Optimized', 'Grit Prevention', 'Steel Body'],
    specs: [
      { label: 'Operating Temp', value: 'Up to 60°C' },
      { label: 'Static Pressure', value: 'High' },
      { label: 'Build', value: 'Galvanized Steel' }
    ],
    description: 'Specifically built for extreme desert climates with high dust resistance and zero-rust.',
    price: '$1,599',
    bg: 'bg-positivus-grey',
    tagBg: 'bg-positivus-green',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
  },
  {
    id: 'office-quiet',
    name: 'Office-Quiet',
    category: 'Commercial',
    rating: 4.9,
    segment: 'himalaya',
    features: ['Silent Fan', 'PM2.5 Sensor', 'App Control'],
    specs: [
      { label: 'Noise', value: '32 dB' },
      { label: 'Filter', value: 'Plasma-Life' },
      { label: 'Wifi', value: 'Included' }
    ],
    description: 'The quietest commercial cooler ever built. Perfect for boardrooms and open-plan offices.',
    price: '$549',
    bg: 'bg-positivus-green',
    tagBg: 'bg-white',
    image: 'https://images.unsplash.com/photo-1533227268408-a774ad5c5cfc?w=800&q=80',
  },
  {
    id: 'outdoor-party',
    name: 'Outdoor Party',
    category: 'Residential',
    rating: 4.5,
    segment: 'himalaya',
    features: ['BT Speakers', 'Mood Lighting', 'Ice Chamber'],
    specs: [
      { label: 'Battery Life', value: '8 Hours' },
      { label: 'Water Usage', value: 'Eco-Mode' },
      { label: 'BT Ver', value: '5.2' }
    ],
    description: 'A lifestyle cooler designed for patios and pool parties with integrated entertainment.',
    price: '$399',
    bg: 'bg-positivus-grey',
    tagBg: 'bg-positivus-green',
    image: 'https://images.unsplash.com/photo-1534346738545-72863004313b?w=800&q=80',
  },
  {
    id: 'datacenter-d1',
    name: 'DataCenter D1',
    category: 'Industrial',
    rating: 4.8,
    segment: 'antarctica',
    features: ['Rack Compatible', 'Redundant Pumps', 'SNMP Support'],
    specs: [
      { label: 'Form Factor', value: 'Portable Rack' },
      { label: 'Precision', value: '±0.5°C' },
      { label: 'Alerts', value: 'Real-time' }
    ],
    description: 'Precision evaporative cooling for edge data centers and server closets.',
    price: '$2,100',
    bg: 'bg-positivus-dark',
    tagBg: 'bg-white',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=800&q=80',
  },
];

