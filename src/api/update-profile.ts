import { api } from '@/lib/axios'

interface updateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: updateProfileBody) {
  // await new Promise((_resolve, reject) => {
  //   setTimeout(reject, 3000)
  // })

  await api.put('/profile', { name, description })
}
