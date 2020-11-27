export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields: [
    {
      name: 'locale',
      title: 'Localidade',
      type: 'string',
      options: {
        list: [
          { title: 'Português', value: 'pt-BR' },
          { title: 'Inglês', value: 'en-US' },
          { title: 'Espanhol', value: 'es-ES' }
        ]
      },
      validation: Rule => Rule.required().error('A localidade é obrigatória')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required().error('O slug é obrigatório')
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => [
        Rule.required().error('O título é obrigatório'),
        Rule.max(60).warning('O título ideal deve conter no máximo 60 caracteres')
      ]
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'string',
      validation: Rule => [
        Rule.required().error('A descrição é obrigatória'),
        Rule.min(50).warning('A descrição ideal deve conter no mínimo 50 caracteres'),
        Rule.max(160).warning('A descrição ideal deve conter no máximo 160 caracteres')
      ]
    },
    {
      name: 'date',
      title: 'Data',
      type: 'date',
      validation: Rule => [
        Rule.required().error('A data é obrigatória'),
        Rule.min('2013-12-08').error('A data mais antiga permitida é 8 de dezembro de 2013')
      ]
    },
    {
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      fields: [
        {
          name: 'description',
          title: 'Descrição',
          type: 'string',
          validation: Rule => Rule.required().error('A descrição da imagem de capa é obrigatória')
        }
      ],
      validation: Rule => Rule.required().error('A imagem de capa é obrigatória')
    },
    {
      name: 'content',
      title: 'Conteúdo', 
      type: 'array', 
      of: [
        {
          type: 'block'
        },
        {
          title: 'Imagem',
          type: 'image',
          fields: [
            {
              name: 'description',
              title: 'Descrição da Imagem',
              type: 'string',
              options: {
                isHighlighted: true
              },
              validation: Rule => Rule.required().error('A descrição da imagem é obrigatória')
            },
            {
              name: 'caption',
              title: 'Legenda da Imagem',
              type: 'string',
              options: {
                isHighlighted: true
              }
            }
          ],
          validation: Rule => Rule.required().error('A imagem é obrigatória')
        }
      ],
      validation: Rule => Rule.required().error('O conteúdo é obrigatório')
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    }
  ]
}
