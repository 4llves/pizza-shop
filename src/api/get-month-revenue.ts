import { api } from '@/lib/axios'

export interface GetMonthRevenueRes {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const res = await api.get<GetMonthRevenueRes>('/metrics/month-receipt')

  return res.data
}
