"use client"

import React from "react"

import HeroCenter from "./heroC"

export default function HomeClient() {
  return (
    <div className="w-full m-0 p-0">
      <section className="w-full m-0 p-0">
        <HeroCenter
          title={"Manage all your expenses in one place"}
          subtitle={`Create budgets, invoices, 
          payment-links and all you need to handle
          your day to day expenses and financial records.`}
        />
      </section>
    </div>
  )
}
