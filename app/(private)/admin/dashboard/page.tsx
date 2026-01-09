import AdminDashboardPage from '@/features/admin/dashboard/AdminDashboardPage'
import { getUser } from '@/lib/jwt'

export default async function AdminDashboard() {
  const user = await getUser()
  return (
    <div className="h-full">
      <AdminDashboardPage email={user.email} username={user.username} />
    </div>
  )
}
