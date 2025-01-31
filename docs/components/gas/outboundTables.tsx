import React from 'react'
import { ChainData, OutboundChainTableProps } from '../../types/types'

const OutboundChainTable: React.FC<OutboundChainTableProps> = ({ chains, isLoading }) => (
  <div className="w-full">
    <table className="vocs_Table w-full">
      <thead>
        <tr className="vocs_TableRow">
          <th className="vocs_TableHeader w-1/2">Chain Name</th>
          <th className="vocs_TableHeader w-1/4">Gas.zip ID</th>
          <th className="vocs_TableHeader w-1/4">Native ID</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={3} className="vocs_TableCell text-center w-full">
              Loading...
            </td>
          </tr>
        ) : !chains?.length ? (
          <tr>
            <td colSpan={3} className="vocs_TableCell text-center w-full">
              No chains found matching your search
            </td>
          </tr>
        ) : (
          chains.map((chain, index) => (
            <tr key={index} className="vocs_TableRow">
              <td className="vocs_TableCell">{chain.name}</td>
              <td className="vocs_TableCell">{chain.short}</td>
              <td className="vocs_TableCell">{chain.chain}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
)

export const MainnetTable: React.FC<{ chains: ChainData[]; isLoading: boolean }> = ({ chains, isLoading }) => {
  return <OutboundChainTable chains={chains} isLoading={isLoading} />
}

export const TestnetTable: React.FC<{ chains: ChainData[]; isLoading: boolean }> = ({ chains, isLoading }) => {
  return <OutboundChainTable chains={chains} isLoading={isLoading} />
}
