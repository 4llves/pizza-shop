import { http, HttpResponse } from 'msw'

import { GetPopularProductsRes } from '../get-popular-product'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsRes
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 57 },
    { product: 'Pizza 02', amount: 12 },
    { product: 'Pizza 03', amount: 78 },
    { product: 'Pizza 04', amount: 40 },
    { product: 'Pizza 05', amount: 56 },
  ])
})
