import { useState } from 'react'
import { InboundChainTable } from './inboundTables'
import { inboundChains } from '../../../data/gas/inboundChains'

function InboundChainTableWrapper() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChains = inboundChains.filter(
    (chain) =>
      chain.name.toLowerCase().includes(searchTerm.toLowerCase()) || chain.chainId.toString().includes(searchTerm),
  )

  return (
    <div className="space-y-4">
      <div className="w-full mb-8 vocs_SearchDialog_searchBox">
        <input
          className="vocs_SearchDialog_searchInput w-full"
          type="search"
          placeholder="Search by chain name or native ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="vocs_H2 vocs_Heading">
            <div id="direct-deposit" className="vocs_Heading_slugTarget"></div>
            Direct Deposit v2
            <a
              className="vocs_Anchor vocs_Autolink"
              aria-hidden="true"
              tabIndex={-1}
              href="/gas/chain-support/deposit#direct-deposit"
            >
              <div
                data-autolink-icon="true"
                className="vocs_Div vocs_AutolinkIcon"
                style={{ ['--vocs-autolink-icon-url' as string]: 'url(/.vocs/icons/link.svg)' }}
              ></div>
            </a>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Below are the supported deposit chains and their respective v2 Direct Deposit addresses.
          </p>
          <InboundChainTable chains={filteredChains} isLoading={false} type="direct" />
        </div>

        <div>
          <h2 className="vocs_H2 vocs_Heading">
            <div id="contract-deposit" className="vocs_Heading_slugTarget"></div>
            Contract Deposit v1
            <a
              className="vocs_Anchor vocs_Autolink"
              aria-hidden="true"
              tabIndex={-1}
              href="/gas/chain-support/deposit#contract-deposit"
            >
              <div
                data-autolink-icon="true"
                className="vocs_Div vocs_AutolinkIcon"
                style={{ ['--vocs_AutolinkIcon_iconUrl' as string]: 'url(/.vocs/icons/link.svg)' }}
              ></div>
            </a>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Below are the supported deposit chains and their respective verified contract addresses.
          </p>
          <InboundChainTable chains={filteredChains} isLoading={false} type="contract" />
        </div>
      </div>
    </div>
  )
}

export default InboundChainTableWrapper
