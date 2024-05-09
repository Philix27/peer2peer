"use client"

import React, { Suspense, useState } from "react"
import { trpc } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormReturn, useForm } from "react-hook-form"
import { toast } from "sonner"

import { AppAccordion, Form } from "@/app/comps"

import { IFormSchema, defaultValues, formSchema } from "./formSchema"
import { bankInfo, clientInfo } from "./info"

export default function KycPage() {
  const [isFormTab, setActiveTab] = useState<boolean>(true)
  const [showInvId, setInvId] = useState<string>("")
  const t = trpc.invoice.create.useMutation()

  // ... // 1. Define your form.
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  // 2. Define a submit handler.
  async function onSubmit() {
    console.log("Submit clicked")

    try {
      //   const invoiceId = await t.mutateAsync()
    //   setInvId(invoiceId)
      toast.success("Invoice created")
    } catch (error) {
      toast.error("Check your form and fill every")
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`
            w-full flex flex-col 
            items-center 
            justify-center 
            my-8
        `}
      >
        <div
          className={"w-[90%] space-y-6 flex flex-col items-start md:w-[75%]"}
        >
          <AppAccordion data={[clientInfo({ form }), bankInfo({ form })]} />

          {/* <Button type="submit" onClick={() => onsubmit}>Submit</Button> */}
        </div>
      </form>
    </Form>
  )
}
