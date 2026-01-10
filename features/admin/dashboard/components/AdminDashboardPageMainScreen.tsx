'use client'

import InfoCard from '../../components/InfoCard'

export default function AdminDashboardPageMainScreen() {
  return (
    <section className="py-4 px-4 flex flex-col gap-y-6">
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="text-sm text-mainGray">
          Welcome back! Here's an overview of your bot business.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InfoCard icon="Users" label="Usuários" percentage={12} value={4} />
        <InfoCard icon="Users" label="Usuários" percentage={12} value={4} />
        <InfoCard icon="Users" label="Usuários" percentage={12} value={4} />
        <InfoCard icon="Users" label="Usuários" percentage={12} value={4} />
      </div>
    </section>
  )
}
