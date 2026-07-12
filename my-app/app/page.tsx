import { Button } from "@mui/material";
import CategoriesAppBar from "./components/CategoriesAppBar";
import CustomSearchInput from "./components/CustomSearchInput";
import SendIcon from "@mui/icons-material/Send";
import { sampleQuestions } from "./mockData";
import { baseUrl } from "./config";

export default async function Home() {

  const dataTwo = await fetch(`${baseUrl}/fatwa/count`);
  const fatawCount = await dataTwo.json();

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center ">
        <div className="mx-auto flex flex-col items-center gap-5 rounded-3xl bg-sky-600 px-8 py-10 w-full max-w-9/12 md:max-w-6/12">
          <h1 className="text-center text-4xl font-bold text-white">
            Search over {fatawCount} Fatwas
          </h1>

          <p className="max-w-xl text-center text-sky-100">
            Find authentic answers quickly by searching across our growing
            collection of fatawas.
          </p>

          <div className="flex flex-col gap-2 w-full ">
            <CustomSearchInput />
          </div>
        </div>
      </div>
    </>
  );
}
