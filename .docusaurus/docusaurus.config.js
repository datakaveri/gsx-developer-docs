export default {
  "title": "IUDX Documentation",
  "tagline": "Learn about exploring, building , deploying your apps with IUDX",
  "url": "https://docs.iudx.org.in/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/icon.ico",
  "organizationName": "IUDX",
  "projectName": "IUDX",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/gopal/Documents/datakaveri/ugix-developer-docs/sidebars.js",
          "editUrl": "https://github.com/datakaveri/iudx-developer-docs/blob/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/datakaveri/iudx-developer-docs/blog/"
        },
        "theme": {
          "customCss": "/home/gopal/Documents/datakaveri/ugix-developer-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "themes": [
    "docusaurus-theme-search-typesense"
  ],
  "themeConfig": {
    "hideOnScroll": true,
    "navbar": {
      "title": "",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/ugix-logo.png"
      },
      "items": [
        {
          "type": "dropdown",
          "label": "Who Are You",
          "position": "left",
          "items": [
            {
              "label": "New User",
              "href": "/docs/registration"
            },
            {
              "label": "Consumer",
              "href": "/docs/Consumer/consumer"
            },
            {
              "label": "Provider",
              "href": "/docs/Provider/provider"
            },
            {
              "label": "Delegate",
              "href": "/docs/Delegate/delegate"
            }
          ]
        },
        {
          "href": "https://github.com/datakaveri/iudx-developer-docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "typesense": {
      "typesenseCollectionName": "iudx",
      "typesenseServerConfig": {
        "nodes": [
          {
            "host": "typsense-test.iudx.io",
            "port": 443,
            "protocol": "https"
          }
        ],
        "apiKey": "xyz",
        "connectionTimeoutSeconds": 120
      },
      "typesenseSearchParameters": {},
      "contextualSearch": false
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "items": [
            {
              "html": "\n                      <div class=\"logo-address-col\">\n                        <a routerLink=\"/\">\n                          <img\n                            src=\"https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/iudx.png\"\n                            class=\"logo\"\n                          />\n                        </a>\n                        <div class=\"place\">\n                          <a href=\"https://goo.gl/maps/sHqNUTRGFDmD2kbX8\" target=\"_blank\">\n                            <img src=\"img/location.png\" />\n                            <span>\n                              Ground Floor, Indian Institute of Science,<br>\n\t\t\t      Entrepreneurship Centre Road, Entrepreneurship Centre,<br>\n\t\t\t      Bengaluru - 560012, Karnataka\n                            </span>\n                          </a>\n                        </div>\n                      </div>"
            }
          ]
        },
        {
          "title": "Important Links",
          "items": [
            {
              "label": "IUDX Home",
              "to": "https://iudx.org.in/"
            },
            {
              "label": "Datasets Catalogue",
              "to": "https://catalogue.iudx.org.in/"
            },
            {
              "label": "Provider Dashboard",
              "to": "https://publisher.iudx.org.in/"
            },
            {
              "label": "Consumer Dashboard",
              "to": "https://consumer.iudx.org.in/"
            },
            {
              "label": "Community Forum",
              "to": "https://forum.iudx.org.in/"
            }
          ]
        },
        {
          "title": "For Developers",
          "items": [
            {
              "label": "Sandbox",
              "to": "https://sandbox.iudx.org.in/"
            },
            {
              "label": "Documentation",
              "to": "https://docs.iudx.org.in/"
            },
            {
              "label": "Catalogue Server API Docs",
              "to": "https://api.catalogue.iudx.org.in/apis"
            },
            {
              "label": "Resource Server API Docs",
              "to": "https://rs.iudx.org.in/apis"
            },
            {
              "label": "Authorization Server API Docs",
              "to": "https://authorization.iudx.org.in/apis"
            }
          ]
        },
        {
          "items": [
            {
              "html": "\n                <div class=\"col-3\">\n    <div class=\"flex-parent\">\n        <img *ngIf=\"instance\" [src]=\"instance.logo\" />\n        <a href=\"https://smartcities.gov.in/\" target=\"_blank\">\n            <img\n                class=\"ugix-logo\"\n                src=\"https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/smart-city.png\"\n                title=\"Smart Cities\"\n            />\n        </a>\n        <a href=\"http://mohua.gov.in/\" target=\"_blank\">\n            <img\n                class=\"ministry-logo\"\n                src=\"https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/mohua.png\"\n                title=\"MoHUA\"\n            />\n        </a>\n        <a href=\"https://www.iisc.ac.in/\" target=\"_blank\">\n            <img\n                class=\"iisc-logo\"\n                src=\"https://iudx-catalogue-assets.s3.ap-south-1.amazonaws.com/iisc.png\"\n                title=\"IISc Bangalore\"\n            />\n        </a>\n    </div>\n    <div class=\"connect-with-us\">\n        <h4>Connect with us</h4>\n        <div\n            class=\"mt-3 d-flex justify-content-center social-media-icons\"\n        >\n            <a\n                class=\"a-icon\"\n                target=\"_blank\"\n                href=\"https://twitter.com/IndiaIudx\"\n            >\n                <svg\n                    class=\"icon\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 512 512\"\n                >\n                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\n                    <path\n                        d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"\n                    />\n                </svg>\n            </a>\n            <a\n                class=\"a-icon\"\n                target=\"_blank\"\n                href=\"https://www.linkedin.com/company/iudx/\"\n            >\n                <svg\n                    class=\"icon\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 448 512\"\n                >\n                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\n                    <path\n                        d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"\n                    />\n                </svg>\n            </a>\n            <a\n                class=\"a-icon\"\n                target=\"_blank\"\n                href=\"https://github.com/datakaveri\"\n            >\n                <svg\n                    class=\"icon\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 496 512\"\n                >\n                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\n                    <path\n                        d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"\n                    />\n                </svg>\n            </a>\n            <a\n                class=\"a-icon\"\n                target=\"_blank\"\n                href=\"https://www.youtube.com/channel/UCK9oI1VtbKnEe7cJIt_eUFA/featured\"\n            >\n                <svg\n                    class=\"icon\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 576 512\"\n                >\n                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\n                    <path\n                        d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"\n                    />\n                </svg>\n            </a>\n            <a\n                class=\"a-icon\"\n                target=\"_blank\"\n                href=\"https://www.facebook.com/IndiaIUDX/\"\n            >\n                <svg\n                    class=\"icon\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 320 512\"\n                >\n                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\n                    <path\n                        d=\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\"\n                    />\n                </svg>\n            </a>\n        </div>\n        <p class=\"mailto\">\n            <a href=\"mailto:info@iudx.org.in\"> info@iudx.org.in</a>\n        </p>\n    </div>\n</div>\n\n                "
            }
          ]
        }
      ],
      "copyright": "© 2024 IUDX."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "titleDelimiter": "|",
  "noIndex": false
};