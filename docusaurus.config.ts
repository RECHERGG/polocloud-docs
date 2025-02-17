import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PoloCloud',
  tagline: 'the simplest and easiest Cloud for Minecraft',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://polocloud.de/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/v2',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thePolocloud', // Usually your GitHub org/user name.
  projectName: 'polocloud-v2', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thePolocloud/polocloud-docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thePolocloud/polocloud-docs/blob/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PoloCloud',
      logo: {
        alt: 'PoloCloud Logo',
        src: '/img/polocloud-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'polocloudSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/thePolocloud/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          //TODO also add discord and other socials here
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
              label: 'Get Started',
              to: '/docs/intro', //TODO right ref
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              href: 'https://polocloud.de/',
            }
          ],
        },
        {
          title: 'Socials', //TODO more socials?!
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WGzUcuJax7',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/thePolocloud/',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} thePolocloud and Contributors.<br>This is not an official website of Microsoft or Minecraft Studios and is not associated with them.`,
    },

    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
