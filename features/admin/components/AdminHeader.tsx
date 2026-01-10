'use client'

import AdminMenuBarButton from './AdminMenuBarButton'
interface Props {
  email: string
  username: string
}
export default function AdminHeader({ email, username }: Props) {
  return (
    <header className="block md:hidden border-b-1 border-b-black/30">
      <div className="flex items-center justify-between py-5 px-4">
        <div>
          <AdminMenuBarButton email={email} username={username} />
        </div>
        <div>
          <h1 className="font-semibold">Bot Admin</h1>
        </div>
        <div></div>
      </div>
    </header>
  )
}
