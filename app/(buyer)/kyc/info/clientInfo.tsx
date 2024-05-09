import React from "react"
import { AppInput, IAccordionContent, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import { IFormSchema } from "../formSchema"

export function clientInfo(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "item2",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h5">{`Personal Info`}</TextH>
      </div>
    ),
    content: (
      <>
        <AppInput
          control={form.control}
          name="firstName"
          label="First name"
          place="Your first name"
        />
        <AppInput
          control={form.control}
          name="lastName"
          label="Last name"
          place="Your last name"
        />
        <AppInput
          control={form.control}
          name="middleName"
          label="Middle name"
          place="Enter your middle name"
        />
        <AppInput
          control={form.control}
          name="email"
          label="Email"
          place="example@gmail.com"
        />
        <AppInput
          control={form.control}
          name="address"
          label="Address"
          place="Address"
        />
        <AppInput
          control={form.control}
          name="dob"
          label="Date of Birth"
          place="Enter date of birth"
        />
      </>
    ),
  }
}
