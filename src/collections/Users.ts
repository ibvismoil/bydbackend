import type { CollectionConfig, Access } from 'payload'

const canUpdateRole: Access = ({ req }) => {
  const { user } = req
  return !!(user && user.role === 'admin')
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      access: {
        update: canUpdateRole,
      },
    },
  ],
}
