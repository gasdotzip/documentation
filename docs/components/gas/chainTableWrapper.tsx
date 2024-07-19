import React from 'react'
import { MainnetTable, TestnetTable } from './outboundTables'
import useChainData from '../../hooks/useGasConfig'

const ChainTableWrapper: React.FC = () => {
  const { mainnet, testnet, isLoading } = useChainData()

  return (
    <>
    {/* fix tags */}
      <h2 className="vocs_H2 vocs_Heading">Mainnet Chains</h2>
      <p className="vocs_Paragraph">All current supported mainnet outbound destination chains:</p>
      <MainnetTable chains={mainnet} isLoading={isLoading} />
      <h2 className="vocs_H2 vocs_Heading">Testnet Chains</h2>
      <p className="vocs_Paragraph">All current supported testnet outbound destination chains:</p>
      <TestnetTable chains={testnet} isLoading={isLoading} />
    </>
  )
}

export default ChainTableWrapper
