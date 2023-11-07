const { ethers } = require("@nomicfoundation/hardhat-toolbox");

async function main() {

  const contractFactory = await ethers.getContractFactory("Greeter");
  const greeter = await contractFactory.deploy("Hello, Hardhat!");

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
