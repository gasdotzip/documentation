import React from 'react'
import { MainnetTable, TestnetTable } from './outboundTables'
import useChainData from '../../hooks/useGasConfig'

const ChainTableWrapper: React.FC = () => {
  const { mainnet, testnet, isLoading } = useChainData()

  return (
    <>
      <h1 className="vocs_H2 vocs_Heading">Mainnet Chains</h1>
      <h3 className="vocs_Paragraph">All current supported mainnet outbound destination chains:</h3>
      <MainnetTable chains={mainnet} isLoading={isLoading} />
      <h1 className="vocs_H2 vocs_Heading">Testnet Chains</h1>
      <h3 className="vocs_Paragraph">All current supported testnet outbound destination chains:</h3>
      <TestnetTable chains={testnet} isLoading={isLoading} />
    </>
  )
}

export default ChainTableWrapper
