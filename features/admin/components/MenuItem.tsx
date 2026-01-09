'use client'

import Link from 'next/link'
import { renderIcon } from '../config/render-icon'
import { usePathname } from 'next/navigation'
interface Props {
  link: string
  label: string
  icon: string
}
export default function MenuItem({ link, label, icon }: Props) {
  const ItemIcon = renderIcon(icon as any)
  const pathname = usePathname()
  return (
    <Link
      href={link}
      className={`${
        pathname.includes(link)
          ? 'bg-blue-500 text-white'
          : 'hover:bg-blue-900 transition-all'
      } flex items-center gap-x-2 px-4 py-3 rounded-xl`}
    >
      {ItemIcon}
      {label}
    </Link>
  )
}
