import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
interface Props {
    items:React.ReactNode[]
    label:string
    externalLink:string
}
export default function ListingComponent({items, label, externalLink}:Props){
    return <Card className="px-4">
        <div className="flex items-center justify-between">
            <h1 className="font-bold ">{label}</h1>
            <Link href={externalLink} className="flex gap-x-1 items-center text-mainLightBlue font-semibold">Ver Todos <ArrowUpRight className="size-4"/></Link>
        </div>
        <div className="flex flex-col gap-y-4 w-full">
            {items.map(item=>item)}
        </div>
    </Card>
}