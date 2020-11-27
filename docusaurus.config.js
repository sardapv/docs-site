const courses = require('./docs/courses.json');

module.exports = {
  title: 'Free Learn',
  tagline: 'Learn for free.',
  url: 'https://freelearn.vercel.app',
  baseUrl: '/',
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr'],
  // },
  onBrokenLinks: 'throw',
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
    announcementBar: {
      id: 'support_us',
      content:
        '📝 We are looking for someone who can contribute documentation for languages we have, please <a rel="noopener noreferrer" href="/topics/C">click here</a><br/><b>#spread_knowledge</b>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
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
          to: '/topics/C',
          label: 'Dev Topics',
          position: 'right',
          activeBaseRegex: '/topics/',
        },
        // {
        //   to: '/Login',
        //   label: 'Login',
        //   position: 'right',
        //   activeBaseRegex: '/login/',
        // },
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
              showLastUpdateAuthor: true,
              showLastUpdateTime: true,
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
              showLastUpdateAuthor: true,
              showLastUpdateTime: true,
            },
            {
              label: 'Python',
              to: 'docs/Python',
              showLastUpdateAuthor: true,
              showLastUpdateTime: true,
            },
             {
              label: 'Dart',
              to: 'docs/Dart/',
              showLastUpdateAuthor: true,
              showLastUpdateTime: true,
            },
            {
              label: 'Flutter',
              to: 'docs/Flutter/',
              showLastUpdateAuthor: true,
              showLastUpdateTime: true,
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'topics',
        path: 'topics',
        routeBasePath: 'topics',
        sidebarPath: require.resolve('./topics.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'login',
    //     path: 'login',
    //     routeBasePath: 'login',
    //     sidebarPath: require.resolve('./login.js'),
    //   },
    // ]
  ],
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
