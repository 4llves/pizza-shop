import { api } from '@/lib/axios'

export type GetPopularProductsRes = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const res = await api.get<GetPopularProductsRes>('/metrics/popular-products')

  return res.data
}
