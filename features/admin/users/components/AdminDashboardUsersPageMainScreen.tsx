'use client'

import SectionHeading from '../../components/SectionHeading'

export default function AdminDashboardUsersPageMainScreen() {
  return (
    <section className="py-4 px-4 flex flex-col gap-y-6 bg-mainFaintBlue">
        <SectionHeading action={()=>{}} btnLabel='Add Usuário' description='Administre as contas de seus usuários e permissões.' title='Usuários'/>
    </section>
  )
}
