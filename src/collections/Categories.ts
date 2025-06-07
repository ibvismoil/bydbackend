import type { CollectionConfig, Access } from 'payload'

const isAdmin: Access = ({ req }) => {
  const { user } = req
  return !!(user && user.role === 'admin')
}

const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true,   
    create: isAdmin,    
    update: isAdmin,    
    delete: isAdmin,    
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
