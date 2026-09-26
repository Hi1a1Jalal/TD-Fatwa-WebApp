import CustomSearchInput from "./components/CustomSearchInput";

export default async function Home() {
  const dataTwo = await fetch(`${process.env.baseUrl}/fatwa/count`);
  const fatawCount = await dataTwo.json();

  return (
    <div className="flex flex-col items-center gap-5 rounded-3xl bg-sky-600 px-8 py-10 h-full w-full max-w-9/12 md:max-w-6/12">
      <h1 className="text-center text-4xl font-bold text-white">
        Search over {fatawCount} Islamic (Q&A)s
      </h1>

      <p className="max-w-xl text-center text-sky-100">
        Find authentic answers quickly by searching our growing collection of Islamic Q&As.
      </p>

      <div className="flex flex-col gap-2 w-full ">
        <CustomSearchInput />
      </div>
    </div>
  );
}
