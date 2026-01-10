'use client'

import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
interface Props {
  username: string
  email: string
}
export default function AdminDashboardUsersPage({ username, email }: Props) {
  return (
    <div className="h-full">
      <AdminSideBar
        bgColor="bg-black/90"
        email={email}
        username={username}
        width="w-3/11"
        hideInMobile={true}
      />
      <AdminHeader email={email} username={username} />
    </div>
  )
}
