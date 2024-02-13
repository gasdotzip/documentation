export const limitsAbi = [
  {
    constant: true,
    inputs: [
      {
        name: '_key1',
        type: 'uint32',
      },
    ],
    name: 'dstConfig',
    outputs: [
      {
        components: [
          {
            name: 'baseGas',
            type: 'uint64',
          },
          {
            name: 'multiplier',
            type: 'uint16',
          },
          {
            name: 'floorMarginUSD',
            type: 'uint128',
          },
          {
            name: 'nativeCap',
            type: 'uint128',
          },
        ],
        type: 'tuple',
      },
    ],
    type: 'function',
  },
]
