import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountRes {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const res = await api.get<GetMonthOrdersAmountRes>(
    '/metrics/month-orders-amount',
  )

  return res.data
}
