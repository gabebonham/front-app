'use client'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import AdminSideBar from './AdminSideBar'
import { Menu } from 'lucide-react'
interface Props {
  username: string
  email: string
}
export default function AdminMenuBarButton({ email, username }: Props) {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <AdminSideBar
          bgColor="bg-black/90"
          email={email}
          username={username}
          width="lg:w-1/5 md:w-2/7"
          hideInMobile={false}
        />
      </DrawerContent>
    </Drawer>
  )
}
