import * as prismic from '@prismicio/client'

export const repositoryName = 'Mon-blog'

export const client = prismic.createClient(repositoryName, {
  accessToken: '',
  
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
  ],
})