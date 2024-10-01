// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const foot = require('./static/footer_col_3');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'GDI Documentation',
	tagline: 'Learn about exploring, building , deploying your apps with GDI',
	url: 'https://docs.gdi.org.in/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/ugix/icon.ico',
	organizationName: 'GDI', // Usually your GitHub org/user name.
	projectName: 'GDI', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo docs
					editUrl:
						'https://github.com/datakaveri/gsx-developer-docs/blob/main/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo blog
					editUrl:
						'https://github.com/datakaveri/gsx-developer-docs/blog/'
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
					src: 'https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/ugix/gsix-logo.png'
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
						href: 'https://github.com/datakaveri/gsx-developer-docs',
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
                      <div class="col-12 col-lg-3 footer-col-1 mt-4">
				<div class="places">
					<h4>Integrated Geospatial Data-Sharing Interface</h4>

					<div class="row mt-lg-4 foot-column-1">
						<div class="col-2">
							<img src="https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/ugix/icons/location.svg" alt="" class='foot-icon' />
						</div>
						<div class="col-8" style="margin-left: 5px">
							<span
								>Ground Floor, Indian Institute of Science,
								Entrepreneurship Centre Road Entrepreneurship
								Centre, Bengaluru, Karnataka 560012</span
							>
						</div>
					</div>
					<br />
					<div class="row mt-lg-4 foot-column-1">
						<div class="col-2">
							<img src="https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/ugix/icons/website.svg" alt="" class='foot-web-icon' />
						</div>
						<div class="col-10">
							<a href=''>www.gdi.org.in</a>
						</div>
					</div>
					<div class="row mt-lg-4 foot-column-1">
						<div class="col-2">
							<img src="https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/ugix/icons/email.svg" alt="" class='foot-web-icon' />
						</div>
						<div class="col-10">
							<span>info@iudx.org.in</span>
						</div>
					</div>
				</div>
			</div>`
							}
						]
					},
					{
						title: 'Important Links',
						items: [
							{
								label: 'Datasets Catalogue',
								to: 'https://catalogue.gdi.org.in/'
							},
							{
								label: 'Provider Dashboard',
								to: 'https://catalogue.gdi.org.in/provider'
							},
							{
								label: 'Consumer Dashboard',
								to: 'https://catalogue.gdi.org.in/consumer'
							},
							{
								label: 'Canvas Playground',
								to: 'https://canvas.gdi.org.in/'
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
								label: 'Documentation',
								to: 'https://docs.gdi.org.in/'
							},
							{
								label: 'Catalogue Server API Docs',
								to: 'https://dx.gdi.org.in/cat/apis'
							},
							{
								label: 'Resource Server API Docs',
								to: 'https://geoserver.dx.gdi.org.in/api'
							},
							{
								label: 'Authorization Server API Docs',
								to: 'https://dx.gdi.org.in/auth/apis'
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
				copyright: `© ${new Date().getFullYear()} GDI.`
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
