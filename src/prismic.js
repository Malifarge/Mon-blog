import * as prismic from '@prismicio/client'

export const repositoryName = 'Mon-blog'

export const client = prismic.createClient(repositoryName, {
  accessToken: 'MC5ZejdiMHhFQUFDUUFpT0RW.KX_vv70o77-9fX_vv704Zu-_vSxQW--_ve-_vVkFWu-_vUzvv70PU1JEUe-_vSXvv73vv70B',
  
  routes: [
    {
      type: 'post',
      path: '/',
    },
  ],
})