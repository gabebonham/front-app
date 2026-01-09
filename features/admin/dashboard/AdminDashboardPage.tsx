'use client'

import AdminSideBar from '../components/AdminSideBar'
interface Props {
  username: string
  email: string
}
export default function AdminDashboardPage({ username, email }: Props) {
  return (
    <div className="h-full">
      <AdminSideBar
        bgColor="bg-black/90"
        email={email}
        username={username}
        width="w-1/5"
      />
    </div>
  )
}
