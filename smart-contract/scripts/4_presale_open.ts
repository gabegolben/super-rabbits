import { utils } from 'ethers';
import CollectionConfig from './../config/CollectionConfig';
import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  // Attach to deployed contract
  const contract = await NftContractProvider.getContract();

  // Update sale price (if needed)
  const preSalePrice = utils.parseEther(CollectionConfig.preSale.price.toString());
  if (!await (await contract.cost()).eq(preSalePrice)) {
    console.log(`Updating the token price to ${CollectionConfig.preSale.price} ${CollectionConfig.mainnet.symbol}...`);

    await (await contract.setCost(preSalePrice)).wait();
  }
  
  
  // Unpause the contract (if needed)
  if (await contract.paused()) {
    console.log('Unpausing the contract...');

    await (await contract.setPaused(false)).wait();
  }

  console.log('Pre-sale is now open!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
