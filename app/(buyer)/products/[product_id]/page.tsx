import React from "react"
import { AppImg } from "@/lib"

export default function ProductsDetailsPage() {
  return (
    <div className="w-full flex h-[calc(100vh-70px)]">
      <div
        className={`
        w-[50%] h-full
        flex flex-col items-center justify-center
      `}
      >
        <div className="h-[300px]">
          <img src={AppImg.green.homes} className="h-full" />
        </div>
      </div>
      <div className="w-[50%]">select user</div>
    </div>
  )
}
