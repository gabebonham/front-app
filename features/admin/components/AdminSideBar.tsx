'use client'

import { LayoutGrid } from 'lucide-react'
import { adminNavItems } from '../config/admin-nav-items'
import MenuItem from './MenuItem'
import { Separator } from '@/components/ui/separator'
interface Props {
  width: string
  username: string
  email: string
  bgColor: string
}

export default function AdminSideBar({
  width,
  username,
  email,
  bgColor,
}: Props) {
  return (
    <section
      className={`${width} ${bgColor} px-8 py-4 flex flex-col h-full justify-between text-gray-200 `}
    >
      <div className="flex items-center gap-x-2">
        <LayoutGrid className="box-content p-2.5 rounded-xl bg-blue-100 text-black/70" />
        <div>
          <h1 className="font-semibold">Bot Admin</h1>
          <p className="text-xs">Portal de Administração</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 h-full py-8">
        <h1 className="text-xs">MENU PRINCIPAL</h1>
        <div className="flex flex-col gap-y-1">
          {adminNavItems.map((item) => (
            <MenuItem label={item.label} link={item.link} icon={item.icon} />
          ))}
        </div>
      </div>
      <div className="">
        <Separator className="my-4" />
        <div className="flex items-center gap-x-2">
          <div className="box-content p-2.5 rounded-xl bg-blue-100 text-black/70 font-semibold">
            {username.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="font-semibold">{username}</h1>
            <p className="text-sm">{email}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
