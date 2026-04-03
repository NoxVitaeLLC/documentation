// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nox Vitae Documentation',
  tagline: 'Cross-Verification Bot & Legal Center',
  favicon: 'img/nv_logo.png',

  url: 'https://docs.noxvitaellc.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'NoxVitae',
  projectName: 'documentation',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
          sidebarCollapsed: false,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'Nox Vitae Docs',
        logo: {
          alt: 'Nox Vitae Logo',
          src: 'img/nv_logo.png',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://noxvitaellc.com',
            label: 'Main Site',
            position: 'right',
          },
          {
            href: 'https://discord.gg/noxvitae',
            label: 'Discord',
            position: 'right',
          },
        ],
      },

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
            title: 'Nox Vitae',
            items: [
              {
                label: 'Main Site',
                href: 'https://noxvitaellc.com',
              },
              {
                label: 'Support on Patreon',
                href: 'https://www.patreon.com/NoxVitaeOfficial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/noxvitae',
              },
              {
                label: 'VRChat Group',
                href: 'https://vrc.group/NXVTAE.0182',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nox Vitae LLC. All rights reserved.`,
      },

      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
