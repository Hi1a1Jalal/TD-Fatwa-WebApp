


export interface FatwaDetailed {
  question: string;
  answer: string;
  createdDate: string;
  answeredBy: string;
  baseCategory: string;
  subCategory: string
}


export interface FatwaSummarised {
  id: number;
  question: string;
  answer: string;
  createdDate: string;
  answeredBy: string;
}


export const sampleQuestions: string[] = [
  "Is it permissible to combine prayers while travelling?",
  "Does touching one's spouse invalidate wudu?",
  "Can I pray wearing shoes?",
  "Is my fast valid if I accidentally ate after Fajr?",
  "Can I recite the Qur'an from my phone without wudu?",
  "Who is eligible to receive zakah?",
  "Does laughing during prayer invalidate the salah?",
  "Can I shorten my prayers while travelling?",
  "What should I do if I miss the Witr prayer?",
  "Is it permissible to wipe over socks for wudu?",
  "How should I make up missed fasts from Ramadan?",
  "Can zakah be given to family members?",
  "What are the conditions for a valid nikah?",
  "Is it permissible to pray Tahajjud every night?",
  "What breaks wudu?",
  "How should I perform ghusl correctly?",
  "Is it permissible to combine intentions for voluntary fasts?",
  "Can I make dua in my own language during salah?",
  "What should I do if I forget a pillar of the prayer?",
  "How should Eid prayer be performed?"
];