// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nox Vitae Documentation',
  tagline: 'Cross-Verification Bot & Legal Center',
  favicon: 'img/faviconnv.png', // root-level favicon

  // This is your subdomain
  url: 'https://docs.noxvitaellc.com',
  baseUrl: '/',

  // Handling broken links
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Repo reference
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
          routeBasePath: 'docs',
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

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    // 🌓 Color theme
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // 🔝 Navbar
    navbar: {
      title: 'Nox Vitae Docs',
      logo: {
        alt: 'Nox Vitae Logo',
        src: 'img/faviconnv.png', // Use faviconnv as navbar logo
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
          href: 'https://discord.gg/NoxVitae',
          label: 'Discord',
          position: 'right',
        },
      ],
    },

    // 🔻 Footer
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
            {
              label: 'Terms of Service',
              to: '/policies/terms-of-service.md',
            },
            {
              label: 'Acceptable Use Policy',
              to: '/policies/acceptable-use-policy.md',
            },
            {
              label: 'Privacy Policy',
              to: '/policies/privacy-policy.md',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/NoxVitae',
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
  },
};

export default config;
