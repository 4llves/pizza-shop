import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountRes } from '../get-day-orders-amount'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountRes
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
