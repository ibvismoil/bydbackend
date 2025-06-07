import type { CollectionConfig, Access } from 'payload'

const isAdmin: Access = ({ req }) => {
  const { user } = req
  return !!(user && user.role === 'admin')
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,    
    create: isAdmin,    
    update: isAdmin,     
    delete: isAdmin,    
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
