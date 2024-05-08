"use client"

import React from "react"
import { Button, TextB, TextH } from "@/app/comps"
import { productsList } from "./products.data"

export default function ProductsSection() {
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
          >
            <div className="">
              <div className={"w-full flex items-center justify-center px-4"}>
                <div className={`h-[300px] w-[250px]`}>
                  <img src={item.img} className={"w-fit h-fit"} />
                </div>
              </div>
              <div className="bg-primary p-4">
                <TextH v="h3" className="mb-2">
                  {item.title}
                </TextH>
                <TextB v="p5">{item.subtitle}</TextB>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
