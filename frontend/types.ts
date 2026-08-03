export interface Room {
  id: string;
  name: string;
  capacity: string;
  beds: string;
  features: string[];
  images: string[]; // Expecting 3 images, 4:3 ratio
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image?: string; // Expecting 4:5 ratio, optional for text-only facilities
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Attraction {
  name: string;
  time: string;
}

export interface Plan {
  id: string;
  name: string;
  capacity: string;    // 人數
  rooms: string;       // 開房數
  openRooms: string[]; // 開放房間（每個房型一個元素，分段顯示）
  description: string; // 說明
  weekdayOnly: boolean; // 是否平日限定
}
