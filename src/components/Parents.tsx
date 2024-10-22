import Link from "next/link";
import React from "react";
import { Coffee, House } from "lucide-react";

function Parents({ children }: any) {
  const Sidelinks = [
    {
      Name: "Home",
      Link: "/",
    },
    {
      Name: "POS",
      Link: "/pos",
    },
    {
      Name: "Stock",
      Link: "/stock",
    },
    {
      Name: "Products",
      Link: "/products",
    },
    {
      Name: "Brands",
      Link: "/brands",
    },
  ];
  return (
    // <div>
    //   <div className="w-[20%] h-full font-bold bg-black text-white fixed p-3 overflow-y-scroll flex flex-col">
    //     <div className="flex gap-2 my-1">
    //       <House className="h-full" />
    //       <Link href="#" className="py-3 bg-[#161717]">
    //         Home
    //       </Link>
    //     </div>
    //     <div className="flex gap-2 my-1">
    //       <Coffee className="h-full" />
    //       <Link href="#" className="py-3 bg-[#161717]">
    //         POS
    //       </Link>
    //     </div>
    //     <div className="flex gap-2 my-1">
    //       <Coffee className="h-full" />
    //       <Link href="#" className="py-3 bg-[#161717]">
    //         Stock
    //       </Link>
    //     </div>
    //     <div className="flex gap-2 my-1">
    //       <Coffee className="h-full" />
    //       <Link href="#" className="py-3 bg-[#161717]">
    //         Products
    //       </Link>
    //     </div>
    //     <div className="flex gap-2 my-1">
    //       <Coffee className="h-full" />
    //       <Link href="#" className="py-3 bg-[#161717]">
    //         Brands
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="ml-72 p-12 pt-16">{children}</div>
    // </div>
    <div className="flex gap-1 h-full w-full text-white">
      <div className="p-8 h-screen flex flex-col items-start justify-between">
        <div>
          <div className="m-3 mb-8">
            <span className="text-3xl font-bold">Point of sales.</span>
          </div>

          <div className="flex flex-col gap-2 my-2">
            {Sidelinks.map((link, index) => (
              <Link
                href={link.Link}
                key={index}
                className="flex bg-black gap-2 px-3 rounded-xl items-center w-full hover:bg-zinc-800"
              >
                <House className="h-full" />
                <h2 className="py-3">{link.Name}</h2>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-zinc-600">Developed by Webkin Solutions</p>
      </div>
      <div className="py-12 pl-12">{children}</div>
    </div>
  );
}

export default Parents;
