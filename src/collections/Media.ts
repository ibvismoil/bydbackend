import type { CollectionConfig } from 'payload'

const isAdmin = ({ req: { user } }) => {
  return user && user.role === 'admin'
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,    // Все могут видеть изображения
    create: isAdmin,     // Только админ может загружать
    update: isAdmin,     // Только админ может редактировать
    delete: isAdmin,     // Только админ может удалять
  },
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
