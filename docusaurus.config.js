// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;
//const lightCodeTheme = require("prism-react-renderer/themes/github");
//const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NitroIQ",
  tagline: "Supercharge your Agile Software Development.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nitroiq.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/", //'/saasassin.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "saasassin", // Usually your GitHub org/user name.
  projectName: "saasassin.github.io", // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          //          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "Recent Posts",
          blogSidebarCount: 20,
          blogTitle: "NitroIQ Blog",
          blogDescription: "Supercharge your Agile Software Development.",
          feedOptions: {
            type: "all",
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: "GTM-KRGSR65R",
        },
        gtag: {
          trackingID: "G-CD4SL1WCE1",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     '<b>NitroIQ is currenly invite-only!</b>',
      //   backgroundColor: '#282c34',
      //   textColor: '#FFFFFF',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: "keywords",
          content:
            "saas, software, agile, development, scrum, backlog,  , sdlc, atlassian jira, jira, productivity, metrics, analytics, kpi, kpis",
        },
        { name: "og:title", content: "NitroIQ" },
        {
          name: "og:description",
          content: "Supercharge your Agile Software Development.",
        },
        {
          name: "og:image",
          content: "https://nitroiq.io/img/nitroiq_logo_og.png",
        },
        { name: "og:url", content: "https://nitroiq.io" },
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "NitroIQ" },
        { name: "og:locale", content: "en_US" },
      ],
      navbar: {
        style: "primary",
        title: "Nitro IQ",
        logo: {
          alt: "Nitro IQ Logo",
          src: "img/nitroiq_logo.png",
        },
        items: [
          {
            href: "https://marketplace.atlassian.com/apps/1232080?tab=overview&hosting=cloud",
            label: "Easy Install",
            position: "right",
            className: "header-button-link",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Documentation",
          },
          // { to: "/#features", label: "Features", position: "right" },
          //          { to: "/#about", label: "About", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Menu",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Easy Install",
                href: "https://marketplace.atlassian.com/apps/1232080?tab=overview&hosting=cloud",
              },
              {
                label: "Documentation",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Support",
                to: "/docs/help/",
              },
              // {
              //   label: 'About',
              //   to: '/#about',
              // },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Website Privacy Policy",
                href: "/privacy_policy_site",
              },
              {
                label: "Application Privacy Policy",
                href: "/privacy_policy_app",
              },
              {
                label: "End User License Agreement",
                href: "/eula",
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // ,
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Easy Install',
          //       href: 'https://marketplace.atlassian.com/apps/1232080?tab=overview&hosting=cloud',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Saasassin, LLC.`,
      },
      prism: {
        additionalLanguages: ["bash", "diff", "json"],
      },
    }),
};

module.exports = config;
