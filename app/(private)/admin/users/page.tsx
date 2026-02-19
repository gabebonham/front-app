import AdminDashboardUsersPage from '@/features/admin/users/AdminDashboardUsersPage'
import { getUser } from '@/lib/jwt'

export default async function AdminDashboard() {
  const user = await getUser()
  return (
    <div className="h-full">
      <AdminDashboardUsersPage email={user.email} username={user.username} />
    </div>
  )
}
