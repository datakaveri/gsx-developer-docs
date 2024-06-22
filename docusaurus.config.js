// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const foot = require('./static/footer_col_3');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'UGIX Documentation',
	tagline: 'Learn about exploring, building , deploying your apps with IUDX',
	url: 'https://docs.ugix.org.in/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/icon.ico',
	organizationName: 'UGIX', // Usually your GitHub org/user name.
	projectName: 'UGIX', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo docs
					editUrl:
						'https://github.com/datakaveri/ugix-developer-docs/blob/main/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo blog
					editUrl:
						'https://github.com/datakaveri/ugix-developer-docs/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	],
	themes: ['docusaurus-theme-search-typesense'],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */

		({
			hideOnScroll: true,
			navbar: {
				title: '',
				logo: {
					alt: 'My Site Logo',
					src: 'img/ugix-logo.png'
				},
				items: [
					{
						type: 'dropdown',
						label: 'Who Are You',
						position: 'left',
						items: [
							{
								label: 'New User',
								href: '/docs/registration'
							},
							{
								label: 'Consumer',
								href: '/docs/Consumer/consumer'
							},
							{
								label: 'Provider',
								href: '/docs/Provider/provider'
							},
							{
								label: 'Delegate',
								href: '/docs/Delegate/delegate'
							}
						]
					},
					// {
					//   type: 'doc',
					//   docId: 'intro',
					//   position: 'left',
					//   label: 'Getting Started',
					// },
					{
						href: 'https://github.com/datakaveri/iudx-developer-docs',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			typesense: {
				typesenseCollectionName: 'iudx', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

				typesenseServerConfig: {
					nodes: [
						{
							host: 'typsense-test.iudx.io',
							port: 443,
							protocol: 'https'
						}
						// {
						//   host: 'xxx-2.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
						// {
						//   host: 'xxx-3.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
					],
					apiKey: 'xyz',
					connectionTimeoutSeconds: 120
				},

				// Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.html#arguments
				typesenseSearchParameters: {}

				// Optional
				// contextualSearch: true,
			},
			footer: {
				style: 'light',
				links: [
					{
						items: [
							{
								html: `
                      <div class="logo-address-col">
                        <a routerLink="/">
                          <img
                            src="https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/iudx.png"
                            class="logo"
                          />
                        </a>
                        <div class="place">
                          <a href="https://goo.gl/maps/sHqNUTRGFDmD2kbX8" target="_blank">
                            <img src="img/location.png" />
                            <span>
                              Ground Floor, Indian Institute of Science,<br>
			      Entrepreneurship Centre Road, Entrepreneurship Centre,<br>
			      Bengaluru - 560012, Karnataka
                            </span>
                          </a>
                        </div>
                      </div>`
							}
						]
					},
					{
						title: 'Important Links',
						items: [
							{
								label: 'UGIX Home',
								to: 'https://ugix.org.in/'
							},
							{
								label: 'Datasets Catalogue',
								to: 'https://catalogue.ugix.org.in/'
							},
							{
								label: 'Provider Dashboard',
								to: 'https://catalogue.ugix.org.in/provider'
							},
							{
								label: 'Consumer Dashboard',
								to: 'https://catalogue.ugix.org.in/consumer'
							},
							{
								label: 'Community Forum',
								to: 'https://forum.ugix.org.in/'
							}
						]
					},
					{
						title: 'For Developers',
						items: [
							{
								label: 'Sandbox',
								to: 'https://sandbox.ugix.org.in/'
							},
							{
								label: 'Documentation',
								to: 'https://docs.ugix.org.in/'
							},
							{
								label: 'Catalogue Server API Docs',
								to: 'https://dx.ugix.org.in/cat/apis'
							},
							{
								label: 'Resource Server API Docs',
								to: 'https://geoserver.dx.ugix.org.in/api'
							},
							{
								label: 'Authorization Server API Docs',
								to: 'https://dx.ugix.org.in/auth/apis'
							}
						]
					},
					{
						items: [
							{
								html: `
                ${foot}
                `
							}
						]
					}
				],
				copyright: `© ${new Date().getFullYear()} IUDX.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
			//   plugins: [
			//     [
			//         '@docusaurus/plugin-sitemap',
			//         {
			//             cacheTime: 600 * 1000, // 600 sec - cache purge period
			//             changefreq: 'weekly',
			//             priority: 0.5,
			//         },
			//     ],
			// ],
		})
};

module.exports = config;

