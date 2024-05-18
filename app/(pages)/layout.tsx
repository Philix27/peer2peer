import React, { ReactNode } from "react"

import { BottomNav } from "./_comps"

export default function PageLayout(props: { children: ReactNode }) {
  return (
    <div
      className={"bg-primary"}
    >
      {props.children}
      <BottomNav />
    </div>
  )
}
