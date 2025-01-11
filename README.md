# 🗼️RWA 🔵

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

Scaffold-RWA is a fork of Scaffold-ETH-2 tailored for real-world asset (RWA) platforms. This fork provides native support for Base and Base Sepolia testnet, integration with asset tokenization protocols, and preconfigured tools for handling cross-chain stablecoins like Ethena. It also features the [coinbase-sdk-wallet](https://github.com/coinbase/coinbase-wallet-sdk/) beta for 4337 account abstraction using passkeys.

![Scaffold-RWA](https://github.com/damianmarti/se-2/assets/466652/eac667a7-68fb-4f69-a427-126f7de4114d)

We highly recommend the Scaffold-ETH-2 docs as the primary guideline for general features.

# (forked from 🗼 Scaffold-ETH-2)

⚗️ An open-source, up-to-date toolkit for building decentralized applications (dapps) focused on tokenizing and managing real-world assets on the blockchain. It's designed to make it easier for developers to create asset-backed smart contracts and intuitive user interfaces.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapped around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts, including asset tokenization logic.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of RWA-specific components like tokenization forms, asset listings, and yield calculators.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to various wallet providers and interact with the Ethereum network and RWA protocols.

![Debug Contracts tab](https://github.com/damianmarti/se-2/assets/466652/672d178c-38c9-4c9a-953d-d36acf08f3cd)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-RWA, follow the steps below:

1. Clone this repo & install dependencies

```bash
git clone https://github.com/BuidlGuidl/scaffold-rwa
cd scaffold-rwa
yarn install
```

2. Run a local network in the first terminal:

```bash
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the RWA token contract:

```bash
yarn deploy
```

This command deploys a sample RWA token contract to the local network. The contract is located in `packages/hardhat/contracts`. You can modify it to represent specific asset classes like real estate or invoices. The deployment script in `packages/hardhat/deploy` is customizable to suit your needs.

4. On a third terminal, start your NextJS app:

```bash
yarn start
```

Visit your app on: `http://localhost:3000`. Use the `Asset Dashboard` page to manage tokenized assets, issue tokens, and monitor yields. Configuration is in `packages/nextjs/scaffold.config.ts`.

**What's next**:

- Edit your asset-backed smart contract `RWAContract.sol` in `packages/hardhat/contracts`.
- Customize your frontend homepage at `packages/nextjs/app/page.tsx`.
- Edit deployment scripts in `packages/hardhat/deploy` to include integrations with asset oracle feeds and payment gateways.
- Add RWA-specific tests in `packages/hardhat/test`. To run tests, use `yarn hardhat:test`.

Redeploy your contracts:

```bash
yarn deploy --reset
```

# 🔵 Deploy to Base

When you are ready to deploy to Base, generate a deployer account: 

```bash
yarn generate
```

Fund the deployer account with ETH on Base at:

```bash
yarn account
```

Deploy to Base:

```bash
yarn deploy --network base 
```

Set your target network to Base:

> Change `chains.hardhat` to `chains.base` in `targetNetworks` from `scaffold.config.ts` in `packages/nextjs`.

Deploy your app to Vercel:

```bash
yarn vercel:yolo --prod
```

# 🕩️ Fork Mainnet Base

> stop your `yarn chain`

```bash
yarn fork
```

(Now your local Hardhat chain is a fork of Base, allowing interaction with forked contracts.)

# <img src="https://github.com/damianmarti/se-2/assets/466652/a795d1f3-980b-4e53-9784-ac53b6dd980e" width="35"> Coinbase Smart Wallet

Coinbase Smart Wallet will automatically activate when `scaffold.config.ts` `targetNetworks` contains ***baseSepolia***. For now, [Coinbase beta SDK connector](https://github.com/coinbase/coinbase-wallet-sdk/blob/master/packages/wallet-sdk/docs/v4_with_wagmi.md) supports only Base Sepolia.

Use [Scaffold-ETH custom hooks](https://docs.scaffoldeth.io/hooks/) or wagmi hooks directly to interact with RWA contracts.

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) for more details on building RWA platforms with Scaffold-ETH 2.

Check out our [website](https://scaffoldeth.io) for additional features.

## Contributing

See [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for guidelines on contributing to Scaffold-ETH 2 and RWA-focused forks.
