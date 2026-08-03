import { Room, Facility, FAQ, Attraction, Plan } from './types';

export const CONTACT_INFO = {
  address: '南投縣埔里鎮一新里永興路33-3號',
  phone: '0911-382525',
  line: '@469pofut',
  email: 'a0911382525@gmail.com',
  fb: 'https://facebook.com/profile.php?id=61576922006701',
  ig: 'https://instagram.com/sen333mori',
  bookingUrl: 'https://a0911382525.bvtrip.tw/booking'
};

// Images using picsum with specific seeds to keep them consistent across reloads
// Hero: 16:9 (1920x1080)
export const HERO_IMAGE = '/hero.webp';
export const PLAN_FULL_BG = '/plan-full-bg.png';

// Rooms: 4:3 (800x600)
export const ROOMS: Room[] = [
  {
    id: '1f-double',
    name: '1F 雙人房',
    capacity: '2人',
    beds: '1加大雙人床',
    features: ['靜謐浪漫空間', '窗戶', 'WiFi', '冷氣', '吹風機', '毛巾浴巾', '洗髮精', '沐浴乳'],
    images: [
      '/room-1f-1.webp',
      '/room-1f-2.webp',
      '/room-1f-3.webp'
    ]
  },
  {
    id: '2f-double',
    name: '2F 雙人房',
    capacity: '2人',
    beds: '1加大雙人床',
    features: ['好採光', '窗戶', '獨立衛浴', 'WiFi', '冷氣', '吹風機', '毛巾浴巾', '洗髮精', '沐浴乳'],
    images: [
      '/room-2f-1.webp',
      '/room-2f-2.webp',
      '/room-2f-3.webp'
    ]
  },
  {
    id: '2f-triple',
    name: '2F 三人房',
    capacity: '3人',
    beds: '3張加大單人床',
    features: ['木地板和室', '寬敞舒適', '窗戶', '陽台', '獨立衛浴', '乾濕分離', 'WiFi', '冷氣', '吹風機', '毛巾浴巾', '洗髮精', '沐浴乳'],
    images: [
      '/room-2ft-1.webp',
      '/room-2ft-2.webp',
      '/room-2ft-3.webp'
    ]
  },
  {
    id: '3f-quintuple',
    name: '3F 五人房',
    capacity: '5人',
    beds: '5張加大單人床',
    features: ['大空間', '木地板和室', '窗戶', '大陽臺', '獨立衛浴', 'WiFi', '冷氣', '吹風機', '毛巾浴巾', '洗髮精', '沐浴乳'],
    images: [
      '/room-3f-1.webp',
      '/room-3f-2.webp',
      '/room-3f-3.webp'
    ]
  }
];

// Facilities: 4:5 (1200x1500)
export const FACILITIES: Facility[] = [
  {
    id: 'living-1f',
    name: '1F 迎賓客廳',
    description: '寬敞明亮的交誼空間，大面落地窗引入自然光，適合家人朋友齊聚一堂，享受悠閒時光。',
    image: '/facility-living.webp'
  },
  {
    id: 'kitchen',
    name: '中島廚房',
    description: '配備完整餐具、大冰箱與飲水機。歡迎自由使用開火煮食，像在自己家一樣自在，用後請歸位。',
    image: '/facility-kitchen.webp'
  },
  {
    id: 'ktv-2f',
    name: 'KTV 視聽室',
    description: '真空管擴大器搭配高音質喇叭，打造沉浸式KTV饗宴，讓每首歌更有層次。每日開放 08:00–22:00，盡情歡唱。',
    image: '/facility-ktv.webp'
  },
  {
    id: 'mahjong',
    name: '電動麻將桌',
    description: '親友聚會必備，自動洗牌省時省力，讓您與親友盡情享受方城之戰的樂趣。',
    image: '/facility-mahjong.webp'
  },
  {
    id: 'courtyard',
    name: '前後庭院',
    description: '前院綠意迎賓，後院靜謐私密。在自然環抱中放鬆身心，享受山城獨有的寧靜氛圍。',
    image: '/facility-courtyard.webp'
  }
];

export const ATTRACTIONS: Attraction[] = [
  { name: '萊爾富 (24h)', time: '約 5 分鐘' },
  { name: '中台禪寺', time: '約 6 分鐘' },
  { name: '埔里酒廠', time: '約 14 分鐘' },
  { name: '日月老茶廠', time: '約 23 分鐘' },
  { name: '日月潭', time: '約 30 分鐘' }
];

// Package plans (包棟方案) — 官網短名（平日限定以卡片 tag 標註，名稱不必與 BV Trip 全名一致）
export const PLANS: Plan[] = [
  {
    id: 'full-12',
    name: '12人全包方案',
    capacity: '最多 12 人',
    rooms: '全棟 4 間',
    openRooms: ['1F 雙人房', '2F 雙人房', '2F 三人房', '3F 五人房'],
    description: '適合家族團聚、朋友揪團。\n整個家都是你們的，想住哪間就住哪間。',
    weekdayOnly: false,
  },
  {
    id: 'mid-5to7',
    name: '5-7人包棟方案',
    capacity: '5-7 人',
    rooms: '3 間',
    openRooms: ['1F 雙人房', '2F 雙人房', '2F 三人房'],
    description: '人數彈性，5 人到 7 人都適用同價。\n三間房剛剛好，其餘空間一樣都是你們的。',
    weekdayOnly: true,
  },
  {
    id: 'mini-4',
    name: '4人包棟方案',
    capacity: '4 人',
    rooms: '2 間',
    openRooms: ['1F 雙人房', '2F 雙人房'],
    description: '兩人世界、小家庭、閨蜜小旅行都剛好。\n兩間房靜靜的，整棟還是只有你們。',
    weekdayOnly: true,
  },
];

export const FAQS: FAQ[] = [
  {
    question: '可以烤肉嗎？',
    answer: '全區禁止烤肉（包含庭院），敬請見諒。建議使用民宿廚房自行料理。'
  },
  {
    question: '有供應早餐嗎？',
    answer: '無供應早餐。民宿廚房備有基本餐具與冰箱，歡迎自備食材料理；或可至車程 15 分鐘內的埔里市區用餐。'
  },
  {
    question: '可以帶寵物嗎？',
    answer: '恕不接待寵物入住。為維持無過敏、高潔淨的住宿品質，目前不開放毛小孩同行。'
  },
  {
    question: '押金怎麼收？什麼時候退還？',
    answer: '入住時收取押金 $5,000 元。退房後確認屋內設施無損壞、無違規後，將於 3 天內退還至指定帳戶。'
  },
  {
    question: '幾點可以入住？幾點要退房？',
    answer: '入住時間為下午 15:00 起，退房時間為上午 11:00 前。最晚入住時間為晚上 22:00。'
  },
  {
    question: '有停車位嗎？',
    answer: '有，民宿圍牆旁可免費停放 4 台自小客車。請沿圍牆停放，勿佔用隔壁鄰居空間。'
  },
  {
    question: '廚房可以用嗎？',
    answer: '一樓廚房可自由開火煮食，提供基本餐具、大冰箱、飲水機。使用後請隨手清潔歸位。'
  },
  {
    question: '可以幾個人入住？',
    answer: '整棟最多入住 12 人，現場備品也僅準備 12 人份；恕無法加人入住。另有 5-7人／4人精簡方案，詳見「包棟方案」。'
  },
  {
    question: '怎麼入屋？',
    answer: '我們採用 QR Code 掃碼入屋。入住當天下午會透過 LINE 傳送專屬 QR Code 給您，抵達後掃碼即可進入。'
  },
  {
    question: '民宿有電梯嗎？',
    answer: '有室內電梯，方便長輩及搬運行李。'
  },
  {
    question: '可以抽菸嗎？',
    answer: '全館室內禁菸（包含電子煙與加熱菸），包含客房與陽臺。吸菸請移步至一樓戶外庭院。'
  }
];
