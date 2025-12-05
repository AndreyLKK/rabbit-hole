export enum PrizeType {
  CUTE_ANIMAL = 'CUTE_ANIMAL',
  WEBSITE_LINK = 'WEBSITE_LINK',
}

export interface Prize {
  type: PrizeType;
  content: string; // Image URL or Website URL
  label: string;   // Name/Description
}

export type AppStatus = 'IDLE' | 'PAYMENT' | 'VERIFYING' | 'REVEALED';