export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61f5285d314289faa1f3c3fb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jy35h7ah',
                  apiId: '038b2932-921e-4cd8-b6d0-444c72576a2e'
                },
                {
                  buildHookId: '61f5285dc483da1b098fd191',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gg91888h',
                  apiId: '3430f76a-559a-488a-a5a1-17da64c375a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oshchepkovdanil/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gg91888h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
