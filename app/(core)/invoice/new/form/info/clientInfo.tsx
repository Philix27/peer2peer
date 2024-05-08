import React from "react"
import { AppInput, IAccordionContent, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import { IFormSchema } from "../../formSchema"

export function clientInfo(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "item2",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h5">{`Client's Info`}</TextH>
      </div>
    ),
    content: (
      <>
        <AppInput
          control={form.control}
          name="toBusinessName"
          label="Business name"
          place="Client's name"
        />
        <AppInput
          control={form.control}
          name="toEmail"
          label="Business email"
          place="Client's email"
        />
        <AppInput
          control={form.control}
          name="toAddress"
          label="Address"
          place="Address"
        />
        <AppInput
          control={form.control}
          name="toWebsite"
          label="Website"
          place="Website"
        />
      </>
    ),
  }
}
