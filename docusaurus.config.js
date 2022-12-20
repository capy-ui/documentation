// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Capy UI',
  tagline: 'Documentation on Capy UI',
  url: 'https://capy-ui.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '../favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'capy-ui', // Usually your GitHub org/user name.
  projectName: 'capy', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Capy UI',
        logo: {
          alt: 'Capy',
          src: '../capy_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/installation',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/capy-ui/capy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/getting-started/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/capy',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/!jPJVkwYrfkAgKpCiHG:matrix.org?via=matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/capy_gui',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/capy-ui/capy',
              },
            ],
          },
        ],
        copyright: `CC-BY-SA 3.0 ${new Date().getFullYear()} Capy UI. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['zig'],
      },
      metadata: [
        {
          name: "keywords",
          content: "cross platform, gui, library, zig, ziglang",
        }
      ],
    }),
};

module.exports = config;
