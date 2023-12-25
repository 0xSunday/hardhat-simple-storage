const { ethers, run } = require("hardhat");

async function main() {
  // const contractFactory = await ethers.getContractFactory("SimpleStorage");
  // console.log("Deploying...");
  // const simpleStorage = await contractFactory.deploy();
  // await simpleStorage.deployed();
  // console.log(`simple storage deployed: ${simpleStorage.address}` )
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();
  await simpleStorage.deployed();
  console.log(`simple storage deployed: ${simpleStorage.address}`);

  console.log("deployed successfully🩵🩵");

  const currentValue = await simpleStorage.retrieve();
  console.log(`current value is: ${currentValue}`);
  await trasectionResponse.wait(1);
  const updatedValue = await simpleStorage.store(69);
  console.log(`current value is: ${updatedValue}`);

}

async function verify(contractAddress, args) {
  console.log("verify contract....");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("already verified you mother f***** ....");
    }
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
