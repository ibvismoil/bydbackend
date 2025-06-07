import { CollectionConfig } from 'payload'

const isAdmin = ({ req: { user } }) => {
  return user && user.role === 'admin'
}

const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true,   // Все могут читать
    create: isAdmin,    // Только админ может создавать
    update: isAdmin,    // Только админ может редактировать
    delete: isAdmin,    // Только админ может удалять
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}

export default Categories
