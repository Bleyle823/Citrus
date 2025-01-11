# 🗼️CITRUS 🔵

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

CITRUS is a blockchain-based lending platform designed to facilitate real estate-backed loans by tokenizing real-world assets (RWAs). This protocol enhances transparency, security, and efficiency through decentralized smart contracts. It allows users to tokenize their assets, set collateral, borrow funds, and seamlessly repay loans.

![GHO-PRO](https://github.com/damianmarti/se-2/assets/466652/eac667a7-68fb-4f69-a427-126f7de4114d)

# Key Features

- **Real-World Asset Tokenization**: Transform tangible assets (e.g., real estate, farmland, or precious metals) into digital tokens.
- **Collateralized Lending**: Secure loans using tokenized assets as collateral.
- **Oracle Integration**: Provide real-time and accurate asset pricing.
- **Automated Liquidation**: Protect lenders by liquidating collateral if its value drops below the loan threshold.
- **Blockchain Transparency**: Ensure all transactions are immutable and traceable.

# Tech Stack

### Smart Contracts

- **LendingPool.sol**: Manages loan creation, repayment, and liquidation.
- **RWAOracle.sol**: Handles real-time pricing for tokenized assets.
- **MockRWAToken.sol**: Simulates tokenized real-world assets.
  - **Deployed at**: [Lens Testnet Explorer](https://block-explorer.testnet.lens.dev/address/0x8D2F2B42973b07b43eF2126281ab3721aaf88F09)

### Frontend

- Built with **React.js** for a seamless user experience.
- Styled using **TailwindCSS** for responsive and modern design.

### Backend

- **Node.js** with **Express.js** for API interactions and server-side logic.

### Blockchain

- Deployed on the **Lens Protocol** for decentralized asset management.

### Testing & Deployment

- **Hardhat** and **Mocha** for testing.
- Deployed to Ethereum-compatible networks using **Hardhat**.

# How It Works

1. **Tokenization**: Users mint tokens representing their assets using `MockRWAToken`.
2. **Collateralization**: Collateral is approved and held by the `LendingPool` contract.
3. **Loan Request**: Users borrow funds by providing tokenized assets as collateral. Loan approval depends on collateral value.
4. **Repayment**: Loan repayment allows users to reclaim their collateral.
5. **Liquidation**: If collateral value falls below the loan amount, automated liquidation is triggered to protect lenders.

# Quickstart

### Prerequisites

Install the following tools:

- **Node.js (>= v18.18)**
- **Yarn** (v1 or v2+)
- **Git**

### Steps to Start

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/BuidlGuidl/scaffold-rwa
cd scaffold-rwa
yarn install
```

2. Start a local Ethereum network:

```bash
yarn chain
```
This launches a local Hardhat network for development and testing. Customize configurations in `hardhat.config.ts`.

3. Deploy smart contracts to the local network:

```bash
yarn deploy
```
Deploy a sample RWA token contract located in `packages/hardhat/contracts`. Adjust deployment scripts in `packages/hardhat/deploy` as needed.

4. Launch the frontend application:

```bash
yarn start
```
Visit the app at `http://localhost:3000`. Use the Asset Dashboard to manage tokenized assets and loans. Configuration can be updated in `packages/nextjs/scaffold.config.ts`.

### Additional Commands

- **Testing**: Run tests for smart contracts using:

```bash
yarn hardhat:test
```

- **Redeploy Contracts**: Reset and redeploy contracts:

```bash
yarn deploy --reset
```

# Deployment to Citréa

1. Generate a deployer account:

```bash
yarn generate
```

2. Fund the account with Citréa ETH:

```bash
yarn account
```

3. Deploy contracts to Citréa:

```bash
yarn deploy --network citrea
```

4. Update target network in `scaffold.config.ts` to `chains.citrea`.

5. Deploy your application to Vercel:

```bash
yarn vercel:yolo --prod
```




