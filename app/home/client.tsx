"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { Button, TextB, TextH } from "@/comps"

import FooterSection from "./footer"
import HeroCenter from "./heroC"

export default function HomeClient() {
  const router = useRouter()
  return (
    <div className="w-full m-0 p-0 flex flex-col justify-between">
      {/* <section className="w-full m-0 p-0 flex flex-col"> */}
      <div
        className={`
         w-full h-[85vh]
        flex items-center justify-center
        bg-cover bg-center relative
        bg-gradient-to-r from-cyan-600 to-blue-700
    `}
      >
        <div
          className={`bg-gradient-to-r 
            from-teal-900/70 
          to-green-950/70 absolute
          w-full h-full`}
        />
        <div
          className={`absolute top-0
        pt-4 h-full flex flex-col 
        items-center justify-center 
        w-[95%] px-2 md:px-[5%]
        md:w-[55%]
         text-center text-primary-foreground
      `}
        >
          <TextH v="h1" className={"text-[24px] md:text-[50px]"}>
            Manage all your expenses in one place
          </TextH>
          <div className="mb-10" />
          <div className="w-4/5">
            <TextB v={"p4"}>
              Create budgets, invoices, payment-links and all you need to handle
              your day to day expenses and financial records.
            </TextB>
          </div>
          <Button className="mt-4" onClick={() => router.push("/chat")}>
            SignUp
          </Button>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}
