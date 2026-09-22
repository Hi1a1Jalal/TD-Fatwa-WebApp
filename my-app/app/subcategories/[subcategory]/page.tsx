import FatwaList from "@/app/components/FatwaList";
import { baseUrl } from "@/app/config";

export default async function Page({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}) {
  const { subcategory } = await params;
  console.log(`${baseUrl}/fatwa/subcategory`);
  const data = await fetch(
    `${baseUrl}/fatwa/subcategory?${new URLSearchParams({
      id: subcategory.toString(),
    })}`,
  );
  const fatwas = [
  {
    "answer": "Test answer",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T06:58:03.108601",
    "id": 41,
    "question": "Can a woman cover her hair during recitation of the Quran?"
  },
  {
    "answer": "It is recommended to perform wudu before touching the Mushaf.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T07:12:15.108601",
    "id": 42,
    "question": "Does a person need wudu to read the Quran?"
  },
  {
    "answer": "The five daily prayers are obligatory upon every Muslim who meets the conditions.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T07:25:31.108601",
    "id": 43,
    "question": "How many daily prayers are obligatory?"
  },
  {
    "answer": "The intention for fasting should be made before the beginning of the fast.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T07:41:09.108601",
    "id": 44,
    "question": "When should I make the intention to fast?"
  },
  {
    "answer": "Zakah is due when a person's qualifying wealth reaches the nisab and one lunar year passes over it.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T08:03:22.108601",
    "id": 45,
    "question": "When does a person have to pay Zakah?"
  },
  {
    "answer": "A traveller may shorten the four-unit prayers according to the conditions mentioned by the scholars.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T08:19:44.108601",
    "id": 46,
    "question": "Can a traveller shorten their prayers?"
  },
  {
    "answer": "Breaking the fast unintentionally does not carry the same ruling as deliberately breaking it.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T08:34:17.108601",
    "id": 47,
    "question": "What happens if I accidentally eat while fasting?"
  },
  {
    "answer": "A person should seek refuge in Allah and avoid acting upon intrusive thoughts.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T08:51:03.108601",
    "id": 48,
    "question": "How should I deal with intrusive thoughts?"
  },
  {
    "answer": "There are specific conditions for the validity of Salah, including purification and facing the Qiblah.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T09:06:28.108601",
    "id": 49,
    "question": "What are the conditions for Salah?"
  },
  {
    "answer": "The Prophet ﷺ encouraged Muslims to remember Allah regularly throughout the day.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T09:22:51.108601",
    "id": 50,
    "question": "What is the virtue of remembering Allah?"
  },
  {
    "answer": "A person should consult the relevant scholars regarding the specific circumstances of a marriage contract.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T09:39:12.108601",
    "id": 51,
    "question": "What are the conditions of a valid Nikah?"
  },
  {
    "answer": "Making dua after completing an act of worship is permissible, while maintaining the established Sunnah practices.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T09:54:37.108601",
    "id": 52,
    "question": "Can I make dua after Salah?"
  },
  {
    "answer": "The Quran should be recited with reflection, respect, and attentiveness.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T10:11:06.108601",
    "id": 53,
    "question": "How should a Muslim recite the Quran?"
  },
  {
    "answer": "The ruling depends on the type of impurity and the circumstances surrounding it.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T10:27:43.108601",
    "id": 54,
    "question": "What should I do if I lose my wudu?"
  },
  {
    "answer": "Sadaqah can be given to those in need and is a means of earning reward from Allah.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T10:43:18.108601",
    "id": 55,
    "question": "What is the virtue of giving Sadaqah?"
  },
  {
    "answer": "The time for Fajr begins at true dawn and ends when the sun rises.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T10:58:52.108601",
    "id": 56,
    "question": "When does the time for Fajr prayer begin?"
  },
  {
    "answer": "A Muslim should treat their parents with kindness and respect, except when they command disobedience to Allah.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T11:14:29.108601",
    "id": 57,
    "question": "How should a Muslim treat their parents?"
  },
  {
    "answer": "The permissibility of combining prayers depends on the circumstances and the relevant rulings.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T11:31:07.108601",
    "id": 58,
    "question": "Can prayers be combined while travelling?"
  },
  {
    "answer": "A person should make sincere Tawbah by leaving the sin, regretting it, and resolving not to return to it.",
    "answeredBy": "Abu F",
    "createdDate": "2026-07-26T11:47:35.108601",
    "id": 59,
    "question": "How can I make sincere Tawbah?"
  },
  {
    "answer": "The ruling regarding Ruqyah depends on what is recited and how it is performed.",
    "answeredBy": "Abu S",
    "createdDate": "2026-07-26T12:03:21.108601",
    "id": 60,
    "question": "What is the correct way to perform Ruqyah?"
  }
]

  console.log("fatwas", fatwas);

  return (
    <div className="min-w-screen my-5">
      <FatwaList fatwas={fatwas} />
    </div>
  );
}
