export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3c0d77b8c0aa61bd360142',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-j17hvbxe',
                  apiId: '69e9dd31-f1ec-4575-a985-8204213385d8'
                },
                {
                  buildHookId: '5f3c0d77168ad700cb1e42a4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wmfnw14n',
                  apiId: '64150363-db14-4323-8a8c-0d0e4552b6f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JVMartin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wmfnw14n.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
