import React from "react"
import { AppInput, IAccordionContent, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import { styles } from "."
import { IFormSchema } from "../formSchema"

export function bankInfo(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "item1",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h5">Bank Info</TextH>
      </div>
    ),
    content: (
      <div className={styles.inputGroup}>
        <AppInput
          control={form.control}
          name="bvn"
          label="Biometric Verification Number"
        />

        <AppInput
          control={form.control}
          name="nin"
          label="National Identity Number"
          place="Enter NIN"
        />
      </div>
    ),
  }
}
