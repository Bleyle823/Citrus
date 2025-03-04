/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MockRWAToken,
  MockRWATokenInterface,
} from "../../contracts/MockRWAToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000b1538038062000b15833981016040819052620000349162000136565b818160036200004483826200022f565b5060046200005382826200022f565b5050600580546001600160a01b0319163317905550620002fb915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009957600080fd5b81516001600160401b0380821115620000b657620000b662000071565b604051601f8301601f19908116603f01168101908282118183101715620000e157620000e162000071565b81604052838152602092508683858801011115620000fe57600080fd5b600091505b8382101562000122578582018301518183018401529082019062000103565b600093810190920192909252949350505050565b600080604083850312156200014a57600080fd5b82516001600160401b03808211156200016257600080fd5b620001708683870162000087565b935060208501519150808211156200018757600080fd5b50620001968582860162000087565b9150509250929050565b600181811c90821680620001b557607f821691505b602082108103620001d657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200022a57600081815260208120601f850160051c81016020861015620002055750805b601f850160051c820191505b81811015620002265782815560010162000211565b5050505b505050565b81516001600160401b038111156200024b576200024b62000071565b62000263816200025c8454620001a0565b84620001dc565b602080601f8311600181146200029b5760008415620002825750858301515b600019600386901b1c1916600185901b17855562000226565b600085815260208120601f198616915b82811015620002cc57888601518255948401946001909101908401620002ab565b5085821015620002eb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61080a806200030b6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461012357806370a082311461013857806395d89b4114610161578063a9059cbb14610169578063dd62ed3e1461017c578063f851a440146101b557600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101e0565b6040516100c39190610654565b60405180910390f35b6100df6100da3660046106be565b610272565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f3660046106e8565b61028c565b604051601281526020016100c3565b6101366101313660046106be565b6102b0565b005b6100f3610146366004610724565b6001600160a01b031660009081526020819052604090205490565b6100b6610313565b6100df6101773660046106be565b610322565b6100f361018a366004610746565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546101c8906001600160a01b031681565b6040516001600160a01b0390911681526020016100c3565b6060600380546101ef90610779565b80601f016020809104026020016040519081016040528092919081815260200182805461021b90610779565b80156102685780601f1061023d57610100808354040283529160200191610268565b820191906000526020600020905b81548152906001019060200180831161024b57829003601f168201915b5050505050905090565b600033610280818585610330565b60019150505b92915050565b60003361029a858285610342565b6102a58585856103c0565b506001949350505050565b6005546001600160a01b031633146103055760405162461bcd60e51b815260206004820152601360248201527213db9b1e4818591b5a5b8818d85b881b5a5b9d606a1b60448201526064015b60405180910390fd5b61030f828261041f565b5050565b6060600480546101ef90610779565b6000336102808185856103c0565b61033d8383836001610455565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146103ba57818110156103ab57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016102fc565b6103ba84848484036000610455565b50505050565b6001600160a01b0383166103ea57604051634b637e8f60e11b8152600060048201526024016102fc565b6001600160a01b0382166104145760405163ec442f0560e01b8152600060048201526024016102fc565b61033d83838361052a565b6001600160a01b0382166104495760405163ec442f0560e01b8152600060048201526024016102fc565b61030f6000838361052a565b6001600160a01b03841661047f5760405163e602df0560e01b8152600060048201526024016102fc565b6001600160a01b0383166104a957604051634a1406b160e11b8152600060048201526024016102fc565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156103ba57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161051c91815260200190565b60405180910390a350505050565b6001600160a01b03831661055557806002600082825461054a91906107b3565b909155506105c79050565b6001600160a01b038316600090815260208190526040902054818110156105a85760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016102fc565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166105e357600280548290039055610602565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161064791815260200190565b60405180910390a3505050565b600060208083528351808285015260005b8181101561068157858101830151858201604001528201610665565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146106b957600080fd5b919050565b600080604083850312156106d157600080fd5b6106da836106a2565b946020939093013593505050565b6000806000606084860312156106fd57600080fd5b610706846106a2565b9250610714602085016106a2565b9150604084013590509250925092565b60006020828403121561073657600080fd5b61073f826106a2565b9392505050565b6000806040838503121561075957600080fd5b610762836106a2565b9150610770602084016106a2565b90509250929050565b600181811c9082168061078d57607f821691505b6020821081036107ad57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561028657634e487b7160e01b600052601160045260246000fdfea264697066735822122005cd74181c82727a91c9d118abb01ed35098dcf3e4a03d62a6c79d60898139fe64736f6c63430008140033";

type MockRWATokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRWATokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRWAToken__factory extends ContractFactory {
  constructor(...args: MockRWATokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override deploy(
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name, symbol, overrides || {}) as Promise<
      MockRWAToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockRWAToken__factory {
    return super.connect(runner) as MockRWAToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRWATokenInterface {
    return new Interface(_abi) as MockRWATokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockRWAToken {
    return new Contract(address, _abi, runner) as unknown as MockRWAToken;
  }
}
