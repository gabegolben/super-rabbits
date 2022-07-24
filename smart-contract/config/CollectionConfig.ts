import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'SUPERRABBITS',
  tokenName: 'Super Rabbits',
  tokenSymbol: 'SRabbits',
  hiddenMetadataUri: 'ipfs://QmcGKGt24KcDBHHpgUiHjoU58bi7UWb5DkyghjPmCvFzPE/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.005,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.005,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0xCc1240AA82c7C72ea57629420BD24e209B2aE35B',
  marketplaceIdentifier: 'super-rabbit',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
