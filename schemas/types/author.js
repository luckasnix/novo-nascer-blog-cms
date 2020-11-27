export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required().error('O slug é obrigatório')
    },
    {
      name: 'profilePicture',
      title: 'Foto de Perfil',
      type: 'image',
      validation: Rule => Rule.required().error('A foto de perfil é obrigatória')
    },
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: Rule => Rule.required().error('O nome é obrigatório')
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string',
      validation: Rule => Rule.required().error('A bio é obrigatória')
    }
  ]
}
