'use client'

import { useBots } from '@/hooks/use-bots'
import InfoCard from '../../components/InfoCard'
import ListingComponent from './ListingComponent'
import { parseDatePtBR } from '@/lib/parse-date-pt-br'
import { useUsers } from '@/hooks/use-users'

const botitem = (idx:number, name:string, price:number, sales:number) => 
  <div className='flex w-full justify-between items-center gap-x-4'>
      <div className='flex items-center gap-x-4'>
        <div className='bg-mainLightBlue/20 px-3 py-2 rounded-sm text-sm text-mainLightBlue font-bold'>
          {idx}
        </div>
        <div>
          <p className='font-semibold text-sm'>{name}</p>
          <p className='text-gray-500 text-sm'>R$: {price}</p>
        </div>
      </div>
      <div className='text-center'>
        <p className='font-semibold text-gray-500 text-sm'>{sales}</p>
        <p className='text-xs text-gray-500'>Vendas</p>
      </div>
  </div>
const useritem = (name:string, email:string, createdAt:Date) => 
  <div className='flex w-full justify-between items-center gap-x-4'>
      <div className='flex items-center gap-x-4'>
        <div className='bg-mainLightBlue/20 px-3 py-2 rounded-sm text-sm text-mainLightBlue font-bold'>
          {name.substring(0,1).toUpperCase()}
        </div>
        <div>
          <p className='font-semibold text-sm'>{name}</p>
          <p className='text-gray-500 text-sm'>{email}</p>
        </div>
      </div>
      <div className='text-center'>
        <p className='font-semibold text-gray-500 text-sm'>{parseDatePtBR(createdAt)}</p>
      </div>
  </div>

export default function AdminDashboardPageMainScreen() {
  const {bots} = useBots() 
  const {users} = useUsers() 
  const itemsList = bots?.map((bot:any, idx:number)=>botitem(idx, bot.name, bot.price, bot.sales))
  const usersList = users?.map((user:any)=>useritem(user.name, user.email, user.createdAt))
  return (
    <section className="py-4 px-4 flex flex-col gap-y-6 bg-mainFaintBlue">
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
      <div className='w-full'>
        <ListingComponent externalLink='/admin/dashboard/bots' label='Bots Mais Vendidos' items={itemsList}/>
      </div>
      <div className='w-full'>
        <ListingComponent externalLink='/admin/dashboard/users' label='Usuários recentes' items={usersList}/>
      </div>
    </section>
  )
}
