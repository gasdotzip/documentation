import { useState } from 'react'
import { MainnetTable, TestnetTable } from './outboundTables'
import useChainData from '../../hooks/useGasConfig'

function ChainTableWrapper() {
  const { mainnet, testnet, isLoading } = useChainData()
  const [mainnetSearch, setMainnetSearch] = useState('')
  const [testnetSearch, setTestnetSearch] = useState('')

  const filteredMainnet = mainnet?.filter(
    (chain) =>
      chain.name.toLowerCase().includes(mainnetSearch.toLowerCase()) ||
      chain.symbol.toLowerCase().includes(mainnetSearch.toLowerCase()) ||
      chain.chain.toString().toLowerCase().includes(mainnetSearch.toLowerCase()),
  )

  const filteredTestnet = testnet?.filter(
    (chain) =>
      chain.name.toLowerCase().includes(testnetSearch.toLowerCase()) ||
      chain.symbol.toLowerCase().includes(testnetSearch.toLowerCase()) ||
      chain.chain.toString().toLowerCase().includes(testnetSearch.toLowerCase()),
  )

  return (
    <>
      <h2 className="vocs_H2 vocs_Heading">
        <div id="mainnet-chains" className="vocs_Heading_slugTarget"></div>
        Mainnet Chains
        <a className="vocs_Anchor vocs_Autolink" aria-hidden="true" tabIndex={-1} href="#mainnet-chains">
          <div data-autolink-icon="true" className="vocs_Div vocs_AutolinkIcon"></div>
        </a>
      </h2>
      <p className="vocs_Paragraph">All current supported mainnet outbound destination chains:</p>
      <div className="w-full mb-4 vocs_SearchDialog_searchBox">
        <input
          className="vocs_SearchDialog_searchInput w-full"
          type="search"
          placeholder="Search mainnet chains..."
          value={mainnetSearch}
          onChange={(e) => setMainnetSearch(e.target.value)}
        />
      </div>
      <MainnetTable chains={filteredMainnet} isLoading={isLoading} />

      <h2 className="vocs_H2 vocs_Heading">
        <div id="testnet-chains" className="vocs_Heading_slugTarget"></div>
        Testnet Chains
        <a className="vocs_Anchor vocs_Autolink" aria-hidden="true" tabIndex={-1} href="#testnet-chains">
          <div data-autolink-icon="true" className="vocs_Div vocs_AutolinkIcon"></div>
        </a>
      </h2>
      <p className="vocs_Paragraph">All current supported testnet outbound destination chains:</p>
      <div className="w-full mb-4 vocs_SearchDialog_searchBox">
        <input
          className="vocs_SearchDialog_searchInput w-full"
          type="search"
          placeholder="Search testnet chains..."
          value={testnetSearch}
          onChange={(e) => setTestnetSearch(e.target.value)}
        />
      </div>
      <TestnetTable chains={filteredTestnet} isLoading={isLoading} />
    </>
  )
}

export default ChainTableWrapper
