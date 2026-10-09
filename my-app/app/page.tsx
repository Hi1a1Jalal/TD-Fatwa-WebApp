import Link from "next/link";
import CustomSearchInput from "./components/CustomSearchInput";
import Counter from "./components/Counter";

export default async function Home() {
  const dataTwo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fatwa/count`);
  const fatawCount = await dataTwo.json();

  return (
    <div className="flex flex-col items-center w-full gap-3 ">
      <div className=" animate-blurred-fade-in flex flex-col items-center gap-5 rounded-3xl bg-sky-600 px-8 py-10 h-full w-full max-w-9/12 md:max-w-6/12">
        <h1 className="text-center text-4xl font-bold text-white">
          Search over <Counter end={fatawCount} duration={3000} /> Islamic (Q&amp;A)s
        </h1>

        <p className="max-w-xl text-center text-sky-100">
          Find authentic answers quickly by searching our growing collection of
          Islamic Q&As.
        </p>

        <div className="flex flex-col gap-2 w-full ">
          <CustomSearchInput />
        </div>
      </div>
      <div>
        <h2 className="mx-5 text-center text-blue-950 animate-blurred-fade-in">
          Have a question?
        </h2>
        <Link
          href="https://t.me/istiqamamasjid"
          target="_blank"
          rel="noopener noreferrer"
          className="text"
        >
          <h2 className="mx-5 text-center text-blue-950 underline font-bold animate-blurred-fade-in">
            Join the Masjid Al-Istiqama Telegram channel.
          </h2>
        </Link>
      </div>
    </div>
  );
}
