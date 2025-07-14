// src/data/tours.js
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
    name: {
      en: 'Ancient Bagan Exploration',
      my: 'ရှေးဟောင်းပုဂံခရီးစဉ်'
    },
    description: {
      en: 'Discover thousands of ancient temples and pagodas by e-bike.',
      my: 'ရှေးဟောင်းဘုရားပုထိုးပေါင်းများစွာကို e-bike ဖြင့် လေ့လာလိုက်ပါ။'
    },
    longDescription: {
      en: 'Spend three days exploring the breathtaking plains of Bagan, home to over 2,000 ancient temples. This tour includes a sunrise hot air balloon ride, an e-bike rental for personal exploration, and guided tours of the most famous pagodas like Shwezigon and Ananda Temple.',
      my: 'ဘုရားစေတီပေါင်း ၂,၀၀၀ ကျော်တည်ရှိရာ ပုဂံမြေသို့ သုံးရက်ကြာခရီးစဉ်။ နေထွက်ချိန်တွင် မီးပုံးပျံစီးခြင်း၊ e-bike ဖြင့် ကိုယ်တိုင်လှည့်လည်ခြင်း နှင့် ရွှေစည်းခုံ၊ အာနန္ဒာ ဘုရားများသို့ လမ်းညွှန်ဖြင့် သွားရောက်ခြင်းတို့ ပါဝင်သည်။'
    },
    price: '$250',
    duration: {
      en: '3 Days, 2 Nights',
      my: '၃ ရက်, ၂ ည'
    },
    image: baganImg,
  },
  {
    id: 2,
    slug: 'inle-lake-cultural-tour',
    name: {
      en: 'Inle Lake Cultural Tour',
      my: 'အင်းလေးကန် ယဉ်ကျေးမှုခရီးစဉ်'
    },
    description: {
      en: 'Experience the unique leg-rowing fishermen and floating villages.',
      my: 'ခြေထောက်ဖြင့်လှော်ခတ်သော တံငါသည်များနှင့် ရေပေါ်ကျေးရွာများကို ခံစားလိုက်ပါ။'
    },
    longDescription: {
      en: 'Immerse yourself in the unique culture of Inle Lake. This tour includes a boat trip to see the famous leg-rowing fishermen, visits to floating villages and markets, a stop at a traditional lotus weaving workshop, and a visit to Phaung Daw Oo Pagoda.',
      my: 'အင်းလေးကန်၏ သီးသန့်ယဉ်ကျေးမှုတွင် နစ်မြောလိုက်ပါ။ ခြေพายတံငါသည်များ၊ ရေပေါ်ဈေး၊ ကြာထည်ယက်လုပ်ငန်း နှင့် ဖောင်တော်ဦးဘုရားသို့ လှေဖြင့် သွားရောက်လည်ပတ်ခြင်းများ ပါဝင်သည်။'
    },
    price: '$180',
    duration: {
      en: '2 Days, 1 Night',
      my: '၂ ရက်, ၁ ည'
    },
    image: inleLakeImg,
  },
  {
    id: 3,
    slug: 'mandalay-royal-palace',
    name: {
        en: 'Mandalay Royal Palace',
        my: 'မန္တလေး နန်းတော်'
    },
    description: {
        en: 'Visit the last royal palace and climb Mandalay Hill for a sunset view.',
        my: 'နောက်ဆုံးမင်းနေပြည်တော်သို့ သွားရောက်ပြီး နေဝင်ချိန်ရှုခင်းအတွက် မန္တလေးတောင်သို့ တက်ရောက်ပါ။'
    },
    longDescription: {
        en: 'Explore the grandeur of Mandalay, the last royal capital of Myanmar. This tour includes a visit to the magnificent Mandalay Palace, the sacred Kuthodaw Pagoda, and a beautiful sunset from the top of Mandalay Hill.',
        my: 'မြန်မာနိုင်ငံ၏ နောက်ဆုံးမင်းနေပြည်တော်ဖြစ်သော မန္တလေးမြို့၏ ခန့်ညားထည်ဝါမှုကို စူးစမ်းလေ့လာပါ။ ဤခရီးစဉ်တွင် မန္တလေးနန်းတော်၊ ကမ္ဘာ့အကြီးဆုံးစာအုပ်ကြီးရှိရာ ကုသိုလ်တော်ဘုရား နှင့် မန္တလေးတောင်ပေါ်မှ လှပသောနေဝင်ချိန်ရှုခင်းတို့ ပါဝင်သည်။'
    },
    price: '$150',
    duration: {
        en: '2 Days, 1 Night',
        my: '၂ ရက်, ၁ ည'
    },
    image: mandalayImg
  },
  {
    id: 4,
    slug: 'golden-rock-pagoda-trip',
    name: {
        en: 'Golden Rock Pagoda Trip',
        my: 'ကျိုက်ထီးရိုး ဘုရားဖူးခရီးစဉ်'
    },
    description: {
        en: 'A pilgrimage to the gravity-defying Kyaiktiyo Pagoda.',
        my: 'ဆွဲငင်အားကိုဆန့်ကျင်နေသော ကျိုက်ထီးရိုးစေတီတော်သို့ ဘုရားဖူးခရီးစဉ်။'
    },
    longDescription: {
        en: 'Embark on a spiritual journey to the famous Kyaiktiyo Pagoda, also known as the Golden Rock. Perched precariously on the edge of a cliff, this gilded boulder is a major pilgrimage site. The journey includes a scenic drive and an exciting open-truck ride up the mountain.',
        my: 'ရွှေရောင်ကျောက်တုံးကြီးဟုလည်း လူသိများသော ကျိုက်ထီးရိုးစေတီတော်သို့ စိတ်ကြည်နူးဖွယ်ရာ ခရီးစဉ်တစ်ခု စတင်လိုက်ပါ။ တောင်စောင်းပေါ်တွင် မတင်မကျတည်ရှိနေသော ဤရွှေရောင်ကျောက်တုံးကြီးသည် အဓိကဘုရားဖူးနေရာတစ်ခုဖြစ်သည်။'
    },
    price: '$170',
    duration: {
        en: '2 Days, 1 Night',
        my: '၂ ရက်, ၁ ည'
    },
    image: goldenRockImg
  },
  {
    id: 5,
    slug: 'ngapali-beach-relaxation',
    name: {
        en: 'Ngapali Beach Relaxation',
        my: 'ငပလီကမ်းခြေ အပန်းဖြေခရီး'
    },
    description: {
        en: 'Relax and unwind on the pristine white sands of Ngapali Beach.',
        my: 'ငပလီကမ်းခြေ၏ ဖြူစင်သောသဲသောင်ပြင်ပေါ်တွင် အနားယူအပန်းဖြေလိုက်ပါ။'
    },
    longDescription: {
        en: 'Escape to paradise at Ngapali Beach, Myanmar\'s premier coastal destination. With its pristine white sands, clear turquoise waters, and swaying palm trees, it\'s the perfect place to relax and rejuvenate. Enjoy fresh seafood, go snorkeling, or simply unwind.',
        my: 'မြန်မာနိုင်ငံ၏ အကောင်းဆုံးကမ်းခြေဖြစ်သော ငပလီတွင် အပန်းဖြေလိုက်ပါ။ ဖြူစင်သောသဲသောင်ပြင်၊ ကြည်လင်သောရေပြင်နှင့် ယိမ်းနွဲ့နေသော အုန်းပင်များဖြင့် အနားယူရန် အကောင်းဆုံးနေရာတစ်ခုဖြစ်သည်။ လတ်ဆတ်သော ပင်လယ်စာများကို မြည်းစမ်းပြီး အပန်းဖြေလိုက်ပါ။'
    },
    price: '$350',
    duration: {
        en: '4 Days, 3 Nights',
        my: '၄ ရက်, ၃ ည'
    },
    image: ngapaliImg
  },
  {
    id: 6,
    slug: 'trekking-in-kalaw',
    name: {
        en: 'Trekking in Kalaw',
        my: 'ကလောမြို့တွင် တောင်တက်ခရီး'
    },
    description: {
        en: 'An adventurous trek through the scenic hills of Shan State.',
        my: 'ရှမ်းပြည်နယ်၏ သာယာလှပသောတောင်တန်းများပေါ်တွင် စွန့်စားခန်းတောင်တက်ခရီးစဉ်။'
    },
    longDescription: {
        en: 'For the adventurous spirit, this trek from the former British hill station of Kalaw to the stunning Inle Lake is a must. You\'ll pass through scenic mountain landscapes, diverse farmlands, and visit remote villages of various ethnic groups.',
        my: 'စွန့်စားလိုသူများအတွက် ဗြိတိသျှတို့၏ တောင်စခန်းမြို့ဖြစ်သော ကလောမှ အင်းလေးကန်သို့ ဤတောင်တက်ခရီးစဉ်သည် မဖြစ်မနေသွားသင့်သည်။ သာယာလှပသော တောင်တန်းရှုခင်းများ၊ လယ်ယာမြေများနှင့် တိုင်းရင်းသားကျေးရွာများကို ဖြတ်သန်းသွားရမည်ဖြစ်သည်။'
    },
    price: '$120',
    duration: {
        en: '3 Days, 2 Nights',
        my: '၃ ရက်, ၂ ည'
    },
    image: kalawImg
  }
];