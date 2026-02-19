'use client'

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface Props {
    title:string
    btnLabel:string
    description:string
    action:Function
}

export default function SectionHeading({title, description, btnLabel}:Props){
    return <div className="flex flex-col gap-y-2">
        <div className="text-start">
            <h1 className="font-bold text-xl">{title}</h1>
            <p>{description}</p>
        </div>
        <Button className="bg-mainLightBlue"><Plus/>{btnLabel}</Button>
    </div>
}