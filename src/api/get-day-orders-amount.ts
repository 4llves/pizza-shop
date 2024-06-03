import { api } from '@/lib/axios'

export interface GetDayOrdersAmountRes {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const res = await api.get<GetDayOrdersAmountRes>('/metrics/day-orders-amount')

  return res.data
}
