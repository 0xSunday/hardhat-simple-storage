const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying...");
  const simpleStorage = await contractFactory.deploy();
  await simpleStorage.deployed();
  console.log("simple storage deployed to:", simpleStorage.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
