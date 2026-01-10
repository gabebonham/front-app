'use client'

import { Card } from '@/components/ui/card'
import { renderIcon } from '../config/render-icon'

interface Props {
  label: string
  icon: string
  value: number
  percentage: number
}
export default function InfoCard({ label, icon, value, percentage }: Props) {
  const Icon = renderIcon(icon as any)
  return (
    <Card className=" size-43 gap-y-2">
      <div className="flex items-center justify-around ">
        <div className="font-semibold">{label}</div>
        <div className="box-content bg-mainFaintBlue2 rounded-xl p-2">
          {Icon}
        </div>
      </div>
      <div className="px-4 text-2xl font-bold ">{value}</div>
      <div className="px-4">
        {percentage}% <span className="text-xs">mês passado</span>
      </div>
    </Card>
  )
}
