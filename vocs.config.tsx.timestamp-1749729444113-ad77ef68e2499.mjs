// vocs.config.tsx
import { defineConfig } from "file:///Users/tk/gas/documentation/node_modules/vocs/_lib/index.js";
import { Fragment, jsx, jsxs } from "file:///Users/tk/gas/documentation/node_modules/react/jsx-runtime.js";
var vocs_config_default = defineConfig({
  title: "Gas.zip - Technical Documentation",
  description: "Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.zip contracts on-chain, and get detailed information about supported chains and code examples.",
  ogImageUrl: "https://www.gas.zip/gasLogo1200x628.png",
  head: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `
          window.va = window.va || function (...args) { 
            (window.vaq = window.vaq || []).push(args); 
          };
        `
        }
      }
    ),
    /* @__PURE__ */ jsx("script", { defer: true, src: "/_vercel/insights/script.js" }),
    /* @__PURE__ */ jsx("title", { children: "Gas.zip - Technical Documentation" }),
    /* @__PURE__ */ jsx("meta", { name: "title", content: "Gas.zip - Technical Documentation" }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "description",
        content: "Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples."
      }
    ),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.gas.zip/" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Gas.zip - Technical Documentation" }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        property: "og:description",
        content: "Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples."
      }
    ),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.gas.zip/gasLogo1200x628.png" }),
    /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" }),
    /* @__PURE__ */ jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" }),
    /* @__PURE__ */ jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" }),
    /* @__PURE__ */ jsx("link", { rel: "manifest", href: "/favicon/site.webmanifest" }),
    /* @__PURE__ */ jsx("link", { rel: "mask-icon", href: "/faviconsafari-pinned-tab.svg", color: "#5bbad5" }),
    /* @__PURE__ */ jsx("meta", { name: "msapplication-TileColor", content: "#da532c" }),
    /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#ffffff" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://dev.gas.zip/overview" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Gas.zip - Technical Documentation" }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        property: "twitter:description",
        content: "Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples."
      }
    ),
    /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://i.imgur.com/5w0YMW3.png" })
  ] }),
  font: {
    google: "Inter"
  },
  logoUrl: {
    light: "/gasBlackText.png",
    dark: "/gasWhiteText.png"
  },
  iconUrl: {
    light: "/favicon.ico",
    dark: "/favicon.ico"
  },
  rootDir: "docs",
  theme: {
    accentColor: "#4182eb"
  },
  socials: [
    {
      icon: "discord",
      link: "https://discord.gg/gasdotzip"
    },
    {
      icon: "x",
      link: "https://twitter.com/gasdotzip"
    },
    {
      icon: "github",
      link: "https://github.com/gasdotzip"
    },
    {
      icon: "warpcast",
      link: "https://warpcast.com/gasdotzip"
    }
  ],
  sidebar: [
    {
      text: "Overview",
      link: "/overview"
    },
    {
      text: "Gas.zip",
      items: [
        {
          text: "Overview",
          link: "/gas/overview"
        },
        {
          text: "API",
          collapsed: false,
          items: [
            {
              text: "Overview",
              link: "/gas/api/overview"
            },
            {
              text: "Chains",
              link: "/gas/api/chains"
            },
            {
              text: "User",
              link: "/gas/api/user"
            },
            {
              text: "Deposit",
              link: "/gas/api/deposit"
            },
            {
              text: "Outbound",
              link: "/gas/api/outbound"
            },
            {
              text: "Search",
              link: "/gas/api/search"
            },
            {
              text: "Quote",
              link: "/gas/api/quote"
            },
            {
              text: "Quote Reverse",
              link: "/gas/api/quote-reverse"
            },
            {
              text: "Calldata Builder",
              link: "/gas/api/call-data"
            }
          ]
        },
        {
          text: "URL Parameters",
          link: "/gas/url-parameters"
        },
        {
          text: "Chain Support",
          collapsed: false,
          items: [
            {
              text: "Deposit",
              link: "/gas/chain-support/deposit"
            },
            {
              text: "Outbound",
              link: "/gas/chain-support/outbound"
            }
          ]
        },
        {
          text: "Code Examples",
          collapsed: true,
          items: [
            {
              text: "EVM Deposit",
              items: [
                {
                  text: "v2: Direct Deposit",
                  link: "/gas/code-examples/evm-deposit/direct-deposit"
                },
                {
                  text: "v1: Contract Deposit",
                  link: "/gas/code-examples/evm-deposit/contract-deposit"
                }
              ]
            },
            {
              text: "SVM Deposit",
              items: [
                {
                  text: "Solana Deposit",
                  link: "/gas/code-examples/svm-deposit/solanaDeposit"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: "Gas.zip LayerZero",
      items: [
        {
          text: "Overview",
          link: "/layerzero/overview"
        },
        {
          text: "Chain Support",
          items: [
            {
              text: "Deposit",
              link: "/layerzero/chain-support/deposit"
            },
            {
              text: "Outbound",
              link: "/layerzero/chain-support/outbound"
            }
          ]
        },
        {
          text: "v2",
          collapsed: false,
          items: [
            {
              text: "Code Examples",
              items: [
                {
                  text: "Complete Flow",
                  link: "/layerzero/v2/code-examples/completeFlow"
                },
                {
                  text: "Limits",
                  link: "/layerzero/v2/code-examples/limits"
                }
              ]
            }
          ]
        },
        {
          text: "v1",
          collapsed: true,
          items: [
            {
              text: "Step by Step",
              items: [
                {
                  text: "estimateFees()",
                  link: "/layerzero/v1/step-by-step/estimateFees"
                },
                {
                  text: "deposit()",
                  link: "/layerzero/v1/step-by-step/deposit"
                }
              ]
            },
            {
              text: "Code Examples",
              items: [
                {
                  text: "Complete Flow",
                  link: "/layerzero/v1/code-examples/completeFlow"
                },
                {
                  text: "Limits",
                  link: "/layerzero/v1/code-examples/limits"
                },
                {
                  text: "estimateFees()",
                  link: "/layerzero/v1/code-examples/estimateFees"
                },
                {
                  text: "deposit()",
                  link: "/layerzero/v1/code-examples/deposit"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcsIENvbmZpZyB9IGZyb20gJ3ZvY3MnXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdHYXMuemlwIC0gVGVjaG5pY2FsIERvY3VtZW50YXRpb24nLFxuICBkZXNjcmlwdGlvbjpcbiAgICAnQ29tcHJlaGVuc2l2ZSBndWlkZXMgYW5kIGRvY3VtZW50YXRpb24gdG8gaGVscCB5b3Ugc3RhcnQgd29ya2luZyB3aXRoIEdhcy56aXAgb24gY2hhaW4gYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gTGVhcm4gaG93IHRvIGludGVyYWN0IHdpdGggR2FzLnppcCBjb250cmFjdHMgb24tY2hhaW4sIGFuZCBnZXQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgc3VwcG9ydGVkIGNoYWlucyBhbmQgY29kZSBleGFtcGxlcy4nLFxuICBvZ0ltYWdlVXJsOiAnaHR0cHM6Ly93d3cuZ2FzLnppcC9nYXNMb2dvMTIwMHg2MjgucG5nJyxcbiAgaGVhZDogKFxuICAgIDw+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgd2luZG93LnZhID0gd2luZG93LnZhIHx8IGZ1bmN0aW9uICguLi5hcmdzKSB7IFxuICAgICAgICAgICAgKHdpbmRvdy52YXEgPSB3aW5kb3cudmFxIHx8IFtdKS5wdXNoKGFyZ3MpOyBcbiAgICAgICAgICB9O1xuICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiL192ZXJjZWwvaW5zaWdodHMvc2NyaXB0LmpzXCIgLz5cbiAgICAgIDx0aXRsZT5HYXMuemlwIC0gVGVjaG5pY2FsIERvY3VtZW50YXRpb248L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIkdhcy56aXAgLSBUZWNobmljYWwgRG9jdW1lbnRhdGlvblwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAnQ29tcHJlaGVuc2l2ZSBndWlkZXMgYW5kIGRvY3VtZW50YXRpb24gdG8gaGVscCB5b3Ugc3RhcnQgd29ya2luZyB3aXRoIEdhcy56aXAgb24gY2hhaW4gYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gTGVhcm4gaG93IHRvIGludGVyYWN0IHdpdGggR2FzLlppcCBjb250cmFjdHMgb24tY2hhaW4sIGFuZCBnZXQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgc3VwcG9ydGVkIGNoYWlucyBhbmQgY29kZSBleGFtcGxlcy4nXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vd3d3Lmdhcy56aXAvXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiR2FzLnppcCAtIFRlY2huaWNhbCBEb2N1bWVudGF0aW9uXCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAnQ29tcHJlaGVuc2l2ZSBndWlkZXMgYW5kIGRvY3VtZW50YXRpb24gdG8gaGVscCB5b3Ugc3RhcnQgd29ya2luZyB3aXRoIEdhcy56aXAgb24gY2hhaW4gYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gTGVhcm4gaG93IHRvIGludGVyYWN0IHdpdGggR2FzLlppcCBjb250cmFjdHMgb24tY2hhaW4sIGFuZCBnZXQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgc3VwcG9ydGVkIGNoYWlucyBhbmQgY29kZSBleGFtcGxlcy4nXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vd3d3Lmdhcy56aXAvZ2FzTG9nbzEyMDB4NjI4LnBuZ1wiIC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL2Zhdmljb25zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM1YmJhZDVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNkYTUzMmNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZGV2Lmdhcy56aXAvb3ZlcnZpZXdcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkdhcy56aXAgLSBUZWNobmljYWwgRG9jdW1lbnRhdGlvblwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAnQ29tcHJlaGVuc2l2ZSBndWlkZXMgYW5kIGRvY3VtZW50YXRpb24gdG8gaGVscCB5b3Ugc3RhcnQgd29ya2luZyB3aXRoIEdhcy56aXAgb24gY2hhaW4gYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gTGVhcm4gaG93IHRvIGludGVyYWN0IHdpdGggR2FzLlppcCBjb250cmFjdHMgb24tY2hhaW4sIGFuZCBnZXQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgc3VwcG9ydGVkIGNoYWlucyBhbmQgY29kZSBleGFtcGxlcy4nXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS81dzBZTVczLnBuZ1wiIC8+XG4gICAgPC8+XG4gICkgYXMgUmVhY3RFbGVtZW50LFxuICBmb250OiB7XG4gICAgZ29vZ2xlOiAnSW50ZXInLFxuICB9LFxuICBsb2dvVXJsOiB7XG4gICAgbGlnaHQ6ICcvZ2FzQmxhY2tUZXh0LnBuZycsXG4gICAgZGFyazogJy9nYXNXaGl0ZVRleHQucG5nJyxcbiAgfSxcbiAgaWNvblVybDoge1xuICAgIGxpZ2h0OiAnL2Zhdmljb24uaWNvJyxcbiAgICBkYXJrOiAnL2Zhdmljb24uaWNvJyxcbiAgfSxcbiAgcm9vdERpcjogJ2RvY3MnLFxuICB0aGVtZToge1xuICAgIGFjY2VudENvbG9yOiAnIzQxODJlYicsXG4gIH0sXG4gIHNvY2lhbHM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnZGlzY29yZCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL2dhc2RvdHppcCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAneCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9nYXNkb3R6aXAnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2dpdGh1YicsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2dhc2RvdHppcCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnd2FycGNhc3QnLFxuICAgICAgbGluazogJ2h0dHBzOi8vd2FycGNhc3QuY29tL2dhc2RvdHppcCcsXG4gICAgfSxcbiAgXSxcbiAgc2lkZWJhcjogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICBsaW5rOiAnL292ZXJ2aWV3JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdHYXMuemlwJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgICAgIGxpbms6ICcvZ2FzL292ZXJ2aWV3JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdBUEknLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ092ZXJ2aWV3JyxcbiAgICAgICAgICAgICAgbGluazogJy9nYXMvYXBpL292ZXJ2aWV3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDaGFpbnMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9hcGkvY2hhaW5zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdVc2VyJyxcbiAgICAgICAgICAgICAgbGluazogJy9nYXMvYXBpL3VzZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcG9zaXQnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9hcGkvZGVwb3NpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnT3V0Ym91bmQnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9hcGkvb3V0Ym91bmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NlYXJjaCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvZ2FzL2FwaS9zZWFyY2gnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1F1b3RlJyxcbiAgICAgICAgICAgICAgbGluazogJy9nYXMvYXBpL3F1b3RlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdRdW90ZSBSZXZlcnNlJyxcbiAgICAgICAgICAgICAgbGluazogJy9nYXMvYXBpL3F1b3RlLXJldmVyc2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0NhbGxkYXRhIEJ1aWxkZXInLFxuICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9hcGkvY2FsbC1kYXRhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdVUkwgUGFyYW1ldGVycycsXG4gICAgICAgICAgbGluazogJy9nYXMvdXJsLXBhcmFtZXRlcnMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NoYWluIFN1cHBvcnQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcG9zaXQnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9jaGFpbi1zdXBwb3J0L2RlcG9zaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ091dGJvdW5kJyxcbiAgICAgICAgICAgICAgbGluazogJy9nYXMvY2hhaW4tc3VwcG9ydC9vdXRib3VuZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ29kZSBFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdFVk0gRGVwb3NpdCcsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3YyOiBEaXJlY3QgRGVwb3NpdCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9jb2RlLWV4YW1wbGVzL2V2bS1kZXBvc2l0L2RpcmVjdC1kZXBvc2l0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd2MTogQ29udHJhY3QgRGVwb3NpdCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9jb2RlLWV4YW1wbGVzL2V2bS1kZXBvc2l0L2NvbnRyYWN0LWRlcG9zaXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU1ZNIERlcG9zaXQnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTb2xhbmEgRGVwb3NpdCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2dhcy9jb2RlLWV4YW1wbGVzL3N2bS1kZXBvc2l0L3NvbGFuYURlcG9zaXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0dhcy56aXAgTGF5ZXJaZXJvJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgICAgIGxpbms6ICcvbGF5ZXJ6ZXJvL292ZXJ2aWV3JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDaGFpbiBTdXBwb3J0JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRGVwb3NpdCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvbGF5ZXJ6ZXJvL2NoYWluLXN1cHBvcnQvZGVwb3NpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnT3V0Ym91bmQnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2xheWVyemVyby9jaGFpbi1zdXBwb3J0L291dGJvdW5kJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd2MicsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ29kZSBFeGFtcGxlcycsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvbXBsZXRlIEZsb3cnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9sYXllcnplcm8vdjIvY29kZS1leGFtcGxlcy9jb21wbGV0ZUZsb3cnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0xpbWl0cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2xheWVyemVyby92Mi9jb2RlLWV4YW1wbGVzL2xpbWl0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd2MScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTdGVwIGJ5IFN0ZXAnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdlc3RpbWF0ZUZlZXMoKScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2xheWVyemVyby92MS9zdGVwLWJ5LXN0ZXAvZXN0aW1hdGVGZWVzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdkZXBvc2l0KCknLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9sYXllcnplcm8vdjEvc3RlcC1ieS1zdGVwL2RlcG9zaXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ29kZSBFeGFtcGxlcycsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvbXBsZXRlIEZsb3cnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9sYXllcnplcm8vdjEvY29kZS1leGFtcGxlcy9jb21wbGV0ZUZsb3cnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0xpbWl0cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2xheWVyemVyby92MS9jb2RlLWV4YW1wbGVzL2xpbWl0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnZXN0aW1hdGVGZWVzKCknLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9sYXllcnplcm8vdjEvY29kZS1leGFtcGxlcy9lc3RpbWF0ZUZlZXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ2RlcG9zaXQoKScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2xheWVyemVyby92MS9jb2RlLWV4YW1wbGVzL2RlcG9zaXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59IGFzIENvbmZpZylcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUE0QjtBQVNqQyxtQkFDRSxLQURGO0FBTkosSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFDRTtBQUFBLEVBQ0YsWUFBWTtBQUFBLEVBQ1osTUFDRSxpQ0FDRTtBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyx5QkFBeUI7QUFBQSxVQUN2QixRQUFRO0FBQUE7QUFBQTtB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
