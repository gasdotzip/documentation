import React from 'react'
import { InboundChain } from '../../types/types'

interface InboundChainTableProps {
  chains: InboundChain[]
  isLoading: boolean
  type: 'direct' | 'contract'
}

export const InboundChainTable: React.FC<InboundChainTableProps> = ({ chains, isLoading, type }) => (
  <div className="w-full">
    <table className="vocs_Table w-full">
      <thead>
        <tr className="vocs_TableRow">
          <th className="vocs_TableHeader w-1/3">Chain Name</th>
          <th className="vocs_TableHeader w-1/3">Native ID</th>
          <th className="vocs_TableHeader w-1/3">Contract Address</th>
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
          chains.map((chain) => (
            <tr key={chain.chainId} className="vocs_TableRow">
              <td className="vocs_TableCell">{chain.name}</td>
              <td className="vocs_TableCell">{chain.chainId}</td>
              <td className="vocs_TableCell">
                <a
                  href={`${chain.explorer.url}/address/${type === 'direct' ? chain.directAddress : chain.contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  {type === 'direct' ? chain.directAddress : chain.contractAddress}
                </a>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
)

export const DirectTable: React.FC<{ chains: InboundChain[]; isLoading: boolean }> = ({ chains, isLoading }) => {
  return <InboundChainTable chains={chains} isLoading={isLoading} type="direct" />
}

export const ContractTable: React.FC<{ chains: InboundChain[]; isLoading: boolean }> = ({ chains, isLoading }) => {
  return <InboundChainTable chains={chains} isLoading={isLoading} type="contract" />
}
