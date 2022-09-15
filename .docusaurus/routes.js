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
    component: ComponentCreator('/grow-docs/docs', '99b'),
    routes: [
      {
        path: '/grow-docs/docs/category/entries',
        component: ComponentCreator('/grow-docs/docs/category/entries', 'e60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/category/guides',
        component: ComponentCreator('/grow-docs/docs/category/guides', '1ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/category/organizational-tips',
        component: ComponentCreator('/grow-docs/docs/category/organizational-tips', '508'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/category/stats',
        component: ComponentCreator('/grow-docs/docs/category/stats', 'fdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/frequent-errors',
        component: ComponentCreator('/grow-docs/docs/frequent-errors', '730'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/entries/add-forms-to-entries',
        component: ComponentCreator('/grow-docs/docs/guides/entries/add-forms-to-entries', 'a2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/entries/entry-accounting',
        component: ComponentCreator('/grow-docs/docs/guides/entries/entry-accounting', '2e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/entries/entry-writing-tips',
        component: ComponentCreator('/grow-docs/docs/guides/entries/entry-writing-tips', 'd0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/entries/writing-entries',
        component: ComponentCreator('/grow-docs/docs/guides/entries/writing-entries', '0f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/forms',
        component: ComponentCreator('/grow-docs/docs/guides/forms', 'a0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/improve your organization/designing-snapshots',
        component: ComponentCreator('/grow-docs/docs/guides/improve your organization/designing-snapshots', 'd8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/new-page',
        component: ComponentCreator('/grow-docs/docs/guides/new-page', '4b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/nodes',
        component: ComponentCreator('/grow-docs/docs/guides/nodes', 'f1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/search-bar',
        component: ComponentCreator('/grow-docs/docs/guides/search-bar', '5cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/stats/habit-display',
        component: ComponentCreator('/grow-docs/docs/guides/stats/habit-display', '589'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/stats/radar-chart',
        component: ComponentCreator('/grow-docs/docs/guides/stats/radar-chart', '340'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/stats/sentiment-display',
        component: ComponentCreator('/grow-docs/docs/guides/stats/sentiment-display', 'ed8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/stats/time-tunnel',
        component: ComponentCreator('/grow-docs/docs/guides/stats/time-tunnel', 'fe4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/unity-clock-app',
        component: ComponentCreator('/grow-docs/docs/guides/unity-clock-app', '56f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/guides/weekly-notes',
        component: ComponentCreator('/grow-docs/docs/guides/weekly-notes', '2a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/introduction/download_grow',
        component: ComponentCreator('/grow-docs/docs/introduction/download_grow', '36d'),
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
