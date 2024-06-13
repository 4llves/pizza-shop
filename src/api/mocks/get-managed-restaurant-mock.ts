import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantRes } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantRes
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    managedId: 'customer-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
