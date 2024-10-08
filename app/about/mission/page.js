import ButtonComponent from "@/app/components/button/button";
import sunImage from "@/public/images/sun.jpg"
import Image from "next/image";

export default function Mission() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-start">hello my sweet mission</h2>
        <Image src={sunImage} alt="sun image here"/>
        <ButtonComponent />
      </main>
    </div>
  );
}
