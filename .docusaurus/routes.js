import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/papers/markdown-page',
    component: ComponentCreator('/papers/markdown-page', 'f90'),
    exact: true
  },
  {
    path: '/papers/docs',
    component: ComponentCreator('/papers/docs', '35f'),
    routes: [
      {
        path: '/papers/docs/ai_regulation/gamemaking',
        component: ComponentCreator('/papers/docs/ai_regulation/gamemaking', '0f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/papers/docs/ai_regulation/ignorance_wall',
        component: ComponentCreator('/papers/docs/ai_regulation/ignorance_wall', '7b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/papers/docs/ai_regulation/intro',
        component: ComponentCreator('/papers/docs/ai_regulation/intro', '3ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/papers/',
    component: ComponentCreator('/papers/', '818'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
