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
