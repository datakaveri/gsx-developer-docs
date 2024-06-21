
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/new-page',
    component: ComponentCreator('/new-page','02b'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','819'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','58b'),
    routes: [
      {
        path: '/docs/client-credentials',
        component: ComponentCreator('/docs/client-credentials','502'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer',
        component: ComponentCreator('/docs/Consumer/consumer','572'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_data_access_APIs',
        component: ComponentCreator('/docs/Consumer/consumer_data_access_APIs','dbf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_data_discovery',
        component: ComponentCreator('/docs/Consumer/consumer_data_discovery','e8c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_obtaining_access_token',
        component: ComponentCreator('/docs/Consumer/consumer_obtaining_access_token','357'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate',
        component: ComponentCreator('/docs/Delegate/delegate','619'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate_manage_policy',
        component: ComponentCreator('/docs/Delegate/delegate_manage_policy','423'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate_register_catalogue_item',
        component: ComponentCreator('/docs/Delegate/delegate_register_catalogue_item','ee2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate_register_resource_server',
        component: ComponentCreator('/docs/Delegate/delegate_register_resource_server','cdf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider',
        component: ComponentCreator('/docs/Provider/provider','441'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider_manage_policies',
        component: ComponentCreator('/docs/Provider/provider_manage_policies','131'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider_register_catalogue_item',
        component: ComponentCreator('/docs/Provider/provider_register_catalogue_item','a65'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider_register_resource_server',
        component: ComponentCreator('/docs/Provider/provider_register_resource_server','cea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/registration',
        component: ComponentCreator('/docs/registration','014'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
