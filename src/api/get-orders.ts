import { api } from '@/lib/axios'

export interface GetOrdersRes {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders() {
  const res = await api.get<GetOrdersRes>('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return res.data
}
