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
    <div>
      <div className="space-y-8">
        <div>
          <h2 className="vocs_H2 vocs_Heading">
            <div id="contract-deposit" className="vocs_Heading_slugTarget"></div>
            Inbound: Direct Forwarder
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

          <InboundChainTable chains={filteredChains} isLoading={false} type="direct" />
        </div>

        <div>
          <h2 className="vocs_H2 vocs_Heading">
            <div id="contract-deposit" className="vocs_Heading_slugTarget"></div>
            Inbound: Contract Forwarder
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
          <InboundChainTable chains={filteredChains} isLoading={false} type="contract" />
        </div>
      </div>
    </div>
  )
}

export default InboundChainTableWrapper
