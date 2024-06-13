import { http, HttpResponse } from 'msw'

import { GetProfileRes } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileRes>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
