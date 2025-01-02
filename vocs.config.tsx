import { defineConfig, Config } from 'vocs'
import { ReactElement } from 'react'

export default defineConfig({
  title: 'Gas.zip - Technical Documentation',
  description:
    'Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.zip contracts on-chain, and get detailed information about supported chains and code examples.',
  ogImageUrl: 'https://www.gas.zip/gasLogo1200x628.png',
  head: (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.va = window.va || function (...args) { 
            (window.vaq = window.vaq || []).push(args); 
          };
        `,
        }}
      />
      <script defer src="/_vercel/insights/script.js" />
      <title>Gas.zip - Technical Documentation</title>
      <meta name="title" content="Gas.zip - Technical Documentation" />
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
      <meta property="og:title" content="Gas.zip - Technical Documentation" />
      <meta
        property="og:description"
        content={
          'Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples.'
        }
      />
      <meta property="og:image" content="https://www.gas.zip/gasLogo1200x628.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/faviconsafari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://dev.gas.zip/overview" />
      <meta property="twitter:title" content="Gas.zip - Technical Documentation" />
      <meta
        property="twitter:description"
        content={
          'Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples.'
        }
      />
      <meta property="twitter:image" content="https://i.imgur.com/5w0YMW3.png" />
    </>
  ) as ReactElement,
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
    {
      icon: 'warpcast',
      link: 'https://warpcast.com/gasdotzip',
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
          text: 'URL Parameters',
          link: '/gas/url-parameters',
        },
        {
          text: 'Chain Support',
          collapsed: false,
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
              text: 'EVM Deposit',
              collapsed: false,
              items: [
                {
                  text: 'v2: EOA Deposit',
                  link: '/gas/code-examples/evm-deposit/eoaDeposit',
                },
                {
                  text: 'v1: Contract Deposit',
                  link: '/gas/code-examples/evm-deposit/contractDeposit',
                },
              ],
            },
            {
              text: 'SVM Deposit',
              collapsed: false,
              items: [
                {
                  text: 'Solana Deposit',
                  link: '/gas/code-examples/svm-deposit/solanaDeposit',
                },
              ],
            },
          ],
        },
        {
          text: 'API',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/gas/api/overview',
            },
            {
              text: 'Chains',
              link: '/gas/api/chains',
            },
            {
              text: 'User',
              link: '/gas/api/user',
            },
            {
              text: 'Deposit',
              link: '/gas/api/deposit',
            },
            {
              text: 'Outbound',
              link: '/gas/api/outbound',
            },
            {
              text: 'Search',
              link: '/gas/api/search',
            },
            {
              text: 'Quote',
              link: '/gas/api/quote',
            },
            {
              text: 'Quote Reverse',
              link: '/gas/api/quoteReverse',
            },
            {
              text: 'Call Data Builder',
              link: '/gas/api/callData',
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
} as Config)
