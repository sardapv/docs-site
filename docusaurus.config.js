const courses = require('./docs/courses.json');

module.exports = {
  title: 'Free Learn',
  tagline: 'Learn for free.',
  url: 'https://freelearn.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  baseUrlIssueBanner: true,
  onDuplicateRoutes:'log',
  noIndex: true,
  favicon: 'img/favicon.ico',
  githubHost:'yahu1031',
  organizationName: 'yahu1031',
  projectName: 'docs-site',
  themeConfig: {
    image: 'img/metaImage.png',
    og: 'img/metaImage.png',
    prism: {
      additionalLanguages: ['dart'],
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    navbar: {
      title: 'Free Learn',
      hideOnScroll: true,
      logo: {
        alt: 'Free Learn Logo',
        src: 'img/logo.svg',
        srcDark: 'img/whiteLogo.svg',
      },
      items: [
        {
          activeBasePath: 'docs',
          label: 'Tutorials',
          position: 'left',
          items: [
            // adding items will create a dropdown
            {
              label: courses[0],
              to: `docs/${courses[0]}/`,
              activeBaseRegex: `docs/(?!${courses.join('|')}|next)`,
            },
            ...courses.slice(1).map((course) => ({
              label: course,
              to: `docs/${course}/`,
            })),
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorials',
          items: [
            {
              label: 'C',
              to: 'docs/C/',
            },
            {
              label: 'Python',
              to: 'docs/Python',
            },
             {
              label: 'Dart',
              to: 'docs/Dart/',
            },
            {
              label: 'Flutter',
              to: 'docs/Flutter/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/FVfvtfPbjq',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yahu1031/docs-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Free Learn, Inc. Built with Docusaurus.`,
    },
  },
  themes:['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yahu1031/docs-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yahu1031/docs-site/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
