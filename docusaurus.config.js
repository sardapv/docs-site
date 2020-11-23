const courses = require("./docs/courses.json");

module.exports = {
  title: 'Free Learn',
  tagline: 'Learn for free.',
  url: 'https://freelearn.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'yahu1031', // Usually your GitHub org/user name.
  projectName: 'docs-site', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['dart'],
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    navbar: {
      title: 'Free Learn',
      hideOnScroll: true,
      logo: {
        alt: 'Free Learn Logo',
        src: "img/logo.svg",
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          activeBasePath: "docs",
          label: "Tutorials",
          position: "left",
          items: [ // adding items will create a dropdown
            {
              label: courses[0],
              to: `docs/${courses[0]}/get-started`,
              activeBaseRegex: `docs/(?!${courses.join("|")}|next)`,
            },
            ...courses.slice(1).map((course) => ({
              label: course,
              to: `docs/${course}/get-started`,
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
              to: 'docs/C/get-started',
            },
            {
              label: 'Python',
              to: 'docs/Python/get-started',
            },
            {
              label: 'Flutter',
              to: 'docs/Flutter/get-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/g2bCyKYH9Z',
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
