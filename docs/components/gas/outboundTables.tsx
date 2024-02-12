import React from 'react'
import { ChainTableProps } from '../../types/types'
import useChainData from '../../hooks/useGasConfig'

const ChainTable: React.FC<ChainTableProps> = ({ chains, isLoading }) => (
  <table className="vocs_Table">
    <thead>
      <tr className="vocs_TableRow">
        <th className="vocs_TableHeader">Chain Name</th>
        <th className="vocs_TableHeader">Gas.zip ID</th>
        <th className="vocs_TableHeader">Native ID</th>
      </tr>
    </thead>
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan={3} className="vocs_TableCell text-center">
            Loading...
          </td>
        </tr>
      ) : (
        chains.map((chain, index) => (
          <tr key={index} className="vocs_TableRow">
            <td className="vocs_TableCell">{chain.name}</td>
            <td className="vocs_TableCell">{chain.short}</td>
            <td className="vocs_TableCell">{chain.nativeId}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
)

export const MainnetTable: React.FC = () => {
  const { mainnet, isLoading } = useChainData()
  return <ChainTable chains={mainnet} isLoading={isLoading} />
}

export const TestnetTable: React.FC = () => {
  const { testnet, isLoading } = useChainData()
  return <ChainTable chains={testnet} isLoading={isLoading} />
}
