import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/papers/__docusaurus/debug',
    component: ComponentCreator('/papers/__docusaurus/debug', 'ab0'),
    exact: true
  },
  {
    path: '/papers/__docusaurus/debug/config',
    component: ComponentCreator('/papers/__docusaurus/debug/config', 'ad4'),
    exact: true
  },
  {
    path: '/papers/__docusaurus/debug/content',
    component: ComponentCreator('/papers/__docusaurus/debug/content', 'b6b'),
    exact: true
  },
  {
    path: '/papers/__docusaurus/debug/globalData',
    component: ComponentCreator('/papers/__docusaurus/debug/globalData', 'b59'),
    exact: true
  },
  {
    path: '/papers/__docusaurus/debug/metadata',
    component: ComponentCreator('/papers/__docusaurus/debug/metadata', '9c5'),
    exact: true
  },
  {
    path: '/papers/__docusaurus/debug/registry',
    component: ComponentCreator('/papers/__docusaurus/debug/registry', '65b'),
    exact: true
  },
  {
    path: '/papers/__docusaurus/debug/routes',
    component: ComponentCreator('/papers/__docusaurus/debug/routes', 'f11'),
    exact: true
  },
  {
    path: '/papers/markdown-page',
    component: ComponentCreator('/papers/markdown-page', 'f90'),
    exact: true
  },
  {
    path: '/papers/docs',
    component: ComponentCreator('/papers/docs', '787'),
    routes: [
      {
        path: '/papers/docs/ai_regulation/gamemaking',
        component: ComponentCreator('/papers/docs/ai_regulation/gamemaking', '0f3'),
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
