import { getAuthenticatedUser } from '@/auth/auth'

import { EditProfileForm } from './form'

export default async function EditProfile() {
  const user = await getAuthenticatedUser()

  return (
    <div>
      <h2 className="font-bold text-3xl mb-8">Meu perfil</h2>
      <EditProfileForm name={String(user?.name)} />
    </div>
  )
}
