"use client"

import React from "react"
import { Button, TextB, TextH } from "@/app/comps"
import { productsList } from "./products.data"
import { useRouter } from "next/navigation"

export default function ProductsSection() {
  const router = useRouter();

  return (
    <div className={`
      mt-[70px] md:mt-[200px]  flex flex-col 
      items-center justify-center
    `}>
      <div className="flex mb-4 gap-x-2">
        <Button>Solar Panel</Button>
        <Button>Battery</Button>
        <Button>Inverter</Button>
      </div>
      <div
        className={`
      grid md:grid-cols-3 grid-cols-1
      items-start justify-center 
      w-full gap-4 mx-0
    `}
      >
        {productsList.map((item, i) => (
          <div
            className={"border-r-ring md:mx-4 bg-card rounded-md mb-5"}
            key={i}
            onClick={() => router.push(`/products/${i}`)}
          >
            <div className="">
              <div className={"w-full flex items-center justify-center"}>
                <div className={`h-[300px] w-[250px]`}>
                  <img src={item.img} className={"w-fit h-fit"} />
                </div>
              </div>
              <div className="bg-primary px-4 py-2 flex items-center justify-between">
                <TextH v="h5" className="mb-2">
                  {item.title}
                </TextH>
                <TextB v="p5">{item.subtitle}</TextB>
              </div>
                 <div className={`
                  bg-secondary text-secondary-foreground 
                  px-4 py-2 flex items-center justify-center
                  hover:bg-accent hover:text-secondary hover:cursor-pointer
                 `}>
                <TextB v="p5">Add to cart</TextB>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
