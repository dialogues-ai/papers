import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/grow-docs/markdown-page',
    component: ComponentCreator('/grow-docs/markdown-page', 'e0d'),
    exact: true
  },
  {
    path: '/grow-docs/docs',
    component: ComponentCreator('/grow-docs/docs', 'd1a'),
    routes: [
      {
        path: '/grow-docs/docs/frequent-errors',
        component: ComponentCreator('/grow-docs/docs/frequent-errors', '730'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/introduction/access_grow',
        component: ComponentCreator('/grow-docs/docs/introduction/access_grow', '572'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/introduction/welcome',
        component: ComponentCreator('/grow-docs/docs/introduction/welcome', '3bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/privacy',
        component: ComponentCreator('/grow-docs/docs/privacy', '359'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/create-account',
        component: ComponentCreator('/grow-docs/docs/setup/create-account', '9e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/create-graph',
        component: ComponentCreator('/grow-docs/docs/setup/create-graph', 'ecb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/create-post',
        component: ComponentCreator('/grow-docs/docs/setup/create-post', '21a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/create-snapshot',
        component: ComponentCreator('/grow-docs/docs/setup/create-snapshot', '832'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/tips',
        component: ComponentCreator('/grow-docs/docs/tips', 'db4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/grow-docs/',
    component: ComponentCreator('/grow-docs/', '5d3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
