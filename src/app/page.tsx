import Parents from "@/components/Parents";
import Image from "next/image";

export default function Home() {
  const reviewcards = [
    {
      title: "Total Sold",
      value: "$12,00.56",
      hoverColour: "bg-[#c9caef]",
      Icon: "Icon"
    },
    {
      title: "Paid Orders",
      value: "$12,00.56",
      hoverColour: "bg-[#c9caef]",
      Icon: "Icon"
    },
    {
      title: "Tip Amount",
      value: "$12,00.56",
      hoverColour: "bg-[#c9caef]",
      Icon: "Icon"
    },
    {
      title: "Dishes Sold",
      value: "$12,00.56",
      hoverColour: "bg-[#c9caef]",
      Icon: "Icon"
    },
  ]

  return (
    <main className="">
      <Parents>
        <h1 className="text-3xl mb-5">Dashboard</h1>
        <div className="flex text-white font-bold font-sans justify-between gap-4">
          {reviewcards.map((card, index) => (
            <div key={index} className={`p-6 pr-12 bg-zinc-800 hover:text-black text-white rounded-md hover:${card.hoverColour} flex flex-col gap-20`}>
            <div className="rounded-full text-black flex items-center justify-center bg-white w-10 h-10">
              {card.Icon}
            </div>

            <div>
            <h2 className="text-sx font-normal -mb-1">{card.title}</h2>
            <p className="text-3xl mt-2">{card.value}</p>
            </div>
          </div>
          ))}
          
        </div>
      </Parents>
    </main>
  );
}
