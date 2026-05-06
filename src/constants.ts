export interface Product {
  id: string;
  name: string;
  category: 'Industrial' | 'Commercial' | 'Residential';
  rating: number;
  features: string[];
  specs: {
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
}

export const PRODUCTS: Product[] = [
  {
    id: 'arctic-x-500',
    name: 'Arctic-X 500',
    category: 'Industrial',
    rating: 4.9,
    segment: 'antarctica',
    features: ['High Static Pressure', '100L Tank', 'Auto-Drain', 'Heavy-duty axial fan'],
    specs: [
      { label: 'Air Delivery', value: '18,000 m³/hr' },
      { label: 'Cooling Area', value: '2,500 sq. ft.' },
      { label: 'Power Consumption', value: '450 Watts' }
    ],
    description: 'The Arctic-X 500 is a thermal powerhouse designed for large-scale manufacturing floors.',
    price: '$899',
    bg: 'bg-positivus-grey',
    tagBg: 'bg-positivus-green',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&q=80',
  },
  {
    id: 'mist-pro-2k',
    name: 'Mist-Pro 2k',
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
    bg: 'bg-positivus-green',
    tagBg: 'bg-white',
    image: 'https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?w=800&q=80',
  },
  {
    id: 'homechill-z1',
    name: 'HomeChill Z1',
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
    bg: 'bg-positivus-dark',
    tagBg: 'bg-white',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1574635391489-4b551ac9e3f9?w=800&q=80',
  },
  {
    id: 'cyclone-max',
    name: 'Cyclone Max',
    category: 'Industrial',
    rating: 4.9,
    segment: 'antarctica',
    features: ['Turbo Airflow', 'Quad-Pad Cooling', 'Anti-Corrosive'],
    specs: [
      { label: 'Air Delivery', value: '22,000 m³/hr' },
      { label: 'Cooling Area', value: '3,000 sq. ft.' },
      { label: 'Tank Capacity', value: '150L' }
    ],
    description: 'Maximum velocity cooling for open-air construction sites and heavy welding zones.',
    price: '$1,299',
    bg: 'bg-positivus-grey',
    tagBg: 'bg-positivus-green',
    image: 'https://images.unsplash.com/photo-1495556650867-99590cea3657?w=800&q=80',
  },
  {
    id: 'eco-breeze-v2',
    name: 'Eco-Breeze V2',
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

