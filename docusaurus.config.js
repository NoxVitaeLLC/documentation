// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nox Vitae Documentation',
  tagline: 'Cross-Verification Bot & Legal Center',
  favicon: 'img/newfavicon.png',

  // IMPORTANT – replace when deploying (e.g., https://docs.noxvitae.com)
  url: 'https://yourdomain.com',
  baseUrl: '/',

  // Handling errors
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Repo reference (not mandatory but standard)
  organizationName: 'NoxVitae',
  projectName: 'documentation',

  // Localization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/', // Docs are the homepage
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined, // No "edit this page"
          sidebarCollapsed: false,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false, // 🚫 No blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 🌓 Color theme
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // 🔝 NAVBAR
            navbar: {
        title: 'Nox Vitae Docs',
        logo: {
          alt: 'Nox Vitae Logo',
          src: 'img/newfavicon.png',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // Must match your sidebars.js
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/NoxVitae',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 🔻 FOOTER
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Home',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/NOXVITAE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nox Vitae. Built using Docusaurus.`,
      },

      // 🔍 Code highlighting
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
