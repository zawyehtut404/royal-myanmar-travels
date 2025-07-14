// ပုံတွေကို import လုပ်ပါ
import baganImg from '../assets/bagan.jpg';
import inleLakeImg from '../assets/inle-lake.jpg';
import mandalayImg from '../assets/mandalay.jpg';
import goldenRockImg from '../assets/golden-rock.jpg';
import ngapaliImg from '../assets/ngapali.jpg';
import kalawImg from '../assets/kalaw.jpg';

export const tourPackages = [
  {
    id: 1,
    slug: 'ancient-bagan-exploration',
    name: 'Ancient Bagan Exploration',
    description: 'Discover thousands of ancient temples and pagodas by e-bike.',
    longDescription: 'Spend three days exploring the breathtaking plains of Bagan, home to over 2,000 ancient temples. This tour includes a sunrise hot air balloon ride, an e-bike rental for personal exploration, and guided tours of the most famous pagodas like Shwezigon and Ananda Temple.',
    price: '$250',
    duration: '3 Days, 2 Nights',
    image: baganImg,
  },
  {
    id: 2,
    slug: 'inle-lake-cultural-tour',
    name: 'Inle Lake Cultural Tour',
    description: 'Experience the unique leg-rowing fishermen and floating villages.',
    longDescription: 'Immerse yourself in the unique culture of Inle Lake. This tour includes a boat trip to see the famous leg-rowing fishermen, visits to floating villages and markets, a stop at a traditional lotus weaving workshop, and a visit to Phaung Daw Oo Pagoda.',
    price: '$180',
    duration: '2 Days, 1 Night',
    image: inleLakeImg,
  },
  {
    id: 3,
    slug: 'mandalay-royal-palace',
    name: 'Mandalay Royal Palace',
    description: 'Visit the last royal palace and climb Mandalay Hill for a sunset view.',
    longDescription: 'Explore the grandeur of Mandalay, the last royal capital of Myanmar. This tour includes a visit to the magnificent Mandalay Palace, the sacred Kuthodaw Pagoda with the world\'s largest book, Shwenandaw Monastery known for its intricate wood carvings, and a beautiful sunset from the top of Mandalay Hill.',
    price: '$150',
    duration: '2 Days, 1 Night',
    image: mandalayImg,
  },
  {
    id: 4,
    slug: 'golden-rock-pagoda-trip',
    name: 'Golden Rock Pagoda Trip',
    description: 'A pilgrimage to the gravity-defying Kyaiktiyo Pagoda.',
    longDescription: 'Embark on a spiritual journey to the famous Kyaiktiyo Pagoda, also known as the Golden Rock. Perched precariously on the edge of a cliff, this gilded boulder is a major pilgrimage site. The journey includes a scenic drive and an exciting open-truck ride up the mountain.',
    price: '$170',
    duration: '2 Days, 1 Night',
    image: goldenRockImg,
  },
  {
    id: 5,
    slug: 'ngapali-beach-relaxation',
    name: 'Ngapali Beach Relaxation',
    description: 'Relax and unwind on the pristine white sands of Ngapali Beach.',
    longDescription: 'Escape to paradise at Ngapali Beach, Myanmar\'s premier coastal destination. With its pristine white sands, clear turquoise waters, and swaying palm trees, it\'s the perfect place to relax and rejuvenate. Enjoy fresh seafood, go snorkeling, or simply unwind and watch the beautiful sunsets.',
    price: '$350',
    duration: '4 Days, 3 Nights',
    image: ngapaliImg,
  },
  {
    id: 6,
    slug: 'trekking-in-kalaw',
    name: 'Trekking in Kalaw',
    description: 'An adventurous trek through the scenic hills of Shan State.',
    longDescription: 'For the adventurous spirit, this trek from the former British hill station of Kalaw to the stunning Inle Lake is a must. You\'ll pass through scenic mountain landscapes, diverse farmlands, and visit remote villages of various ethnic groups like the Pa\'O, Danu, and Taung Yo.',
    price: '$120',
    duration: '3 Days, 2 Nights',
    image: kalawImg,
  },
];