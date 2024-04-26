import { defineConfig } from 'vocs'

export default defineConfig({
  head: (
    <>
      <script
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: <TS Doesn't like the offical vercel example> */
        dangerouslySetInnerHTML={{
          __html: `
          window.va = window.va || function (...args) { 
            (window.vaq = window.vaq || []).push(args); 
          };
        `,
        }}
      />
      <script defer src="/_vercel/insights/script.js" />
      <title>Gas.zip · Technical Documentation for Onchain Interactions</title>
      <meta name="title" content="Gas.zip · Technical Documentation for Onchain Interactions" />
      <meta
        name="description"
        content={
          'Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples.'
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.gas.zip/" />
      <meta property="og:title" content="Gas.zip · Technical Documentation for Onchain Interactions" />
      <meta
        property="og:description"
        content={
          'Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples.'
        }
      />
      <meta property="og:image" content="http://gas.zip/gasMeta.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/faviconsafari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://www.lz.gas.zip/" />
      <meta property="twitter:title" content="Gas.zip · Technical Documentation for Onchain Interactions" />
      <meta
        property="twitter:description"
        content={
          'Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples.'
        }
      />
      <meta property="twitter:image" content="https://i.imgur.com/5w0YMW3.png" />
    </>
  ),
  font: {
    google: 'Inter',
  },
  logoUrl: {
    light: '/gasBlackText.png',
    dark: '/gasWhiteText.png',
  },
  iconUrl: {
    light: '/favicon.ico',
    dark: '/favicon.ico',
  },
  rootDir: 'docs',
  title: 'Gas.zip - Technical Documentation',
  theme: {
    accentColor: '#4182eb',
  },
  socials: [
    {
      icon: 'discord',
      link: 'https://discord.gg/gasdotzip',
    },
    {
      icon: 'x',
      link: 'https://twitter.com/gasdotzip',
    },
    {
      icon: 'github',
      link: 'https://github.com/gasdotzip',
    },
  ],
  sidebar: [
    {
      text: 'Overview',
      link: '/overview',
    },
    {
      text: 'Gas.zip',
      items: [
        {
          text: 'Overview',
          link: '/gas/overview',
        },
        {
          text: 'Chain Support',
          items: [
            {
              text: 'Inbound',
              link: '/gas/chain-support/inbound',
            },
            {
              text: 'Outbound',
              link: '/gas/chain-support/outbound',
            },
          ],
        },
        {
          text: 'Code Examples',
          items: [
            {
              text: 'deposit()',
              link: '/gas/code-examples/deposit',
            },
          ],
        },
      ],
    },
    {
      text: 'Gas.zip LayerZero',
      items: [
        {
          text: 'Overview',
          link: '/layerzero/overview',
        },
        {
          text: 'Chain Support',
          items: [
            {
              text: 'Inbound',
              link: '/layerzero/chain-support/inbound',
            },
            {
              text: 'Outbound',
              link: '/layerzero/chain-support/outbound',
            },
          ],
        },
        {
          text: 'v2',
          collapsed: false,
          items: [
            {
              text: 'Code Examples',
              items: [
                {
                  text: 'Complete Flow',
                  link: '/layerzero/v2/code-examples/completeFlow',
                },
                {
                  text: 'Limits',
                  link: '/layerzero/v2/code-examples/limits',
                },
              ],
            },
          ],
        },
        {
          text: 'v1',
          collapsed: true,
          items: [
            {
              text: 'Step by Step',
              items: [
                {
                  text: 'estimateFees()',
                  link: '/layerzero/v1/step-by-step/estimateFees',
                },
                {
                  text: 'deposit()',
                  link: '/layerzero/v1/step-by-step/deposit',
                },
              ],
            },
            {
              text: 'Code Examples',
              items: [
                {
                  text: 'Complete Flow',
                  link: '/layerzero/v1/code-examples/completeFlow',
                },
                {
                  text: 'Limits',
                  link: '/layerzero/v1/code-examples/limits',
                },
                {
                  text: 'estimateFees()',
                  link: '/layerzero/v1/code-examples/estimateFees',
                },
                {
                  text: 'deposit()',
                  link: '/layerzero/v1/code-examples/deposit',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})
