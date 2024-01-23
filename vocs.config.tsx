import { defineConfig } from 'vocs'

export default defineConfig({
  font: {
    google: 'Inter',
  },
  head: (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <TS Doesn't like the offical vercel example> */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.va = window.va || function (...args) { 
            (window.vaq = window.vaq || []).push(args); 
          };
        `
      }}/>
      <script defer src="/_vercel/insights/script.js"/>
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Gas.zip · Technical Documentation for Onchain Interactions"
      />
      <meta property="og:image" content="/gasMeta.png" />
      <meta property="og:url" content="https://gas.zip" />
      <meta
        property="og:description"
        content="Comprehensive guides and documentation to help you start working with Gas.zip on chain as quickly as possible. Learn how to interact with Gas.Zip contracts on-chain, and get detailed information about supported chains and code examples."
      />
  </>
  ),
  logoUrl: {
    light: '/gasBlack.png',
    dark: '/gasWhite.png',
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
          text: 'Step by Step',
          items: [
            {
              text: 'estimateFees()',
              link: '/layerzero/step-by-step/estimateFees',
            },
            {
              text: 'deposit()',
              link: '/layerzero/step-by-step/deposit',
            },
          ],
        },
        {
          text: 'Code Examples',
          items: [
            {
              text: 'estimateFees()',
              link: '/layerzero/code-examples/estimateFees',
            },
            {
              text: 'deposit()',
              link: '/layerzero/code-examples/deposit',
            },
            {
              text: 'Limits',
              link: '/layerzero/code-examples/limits',
            },
            {
              text: 'Complete Flow',
              link: '/layerzero/code-examples/completeFlow',
            },
          ],
        },
      ],
    },
  ],
})
