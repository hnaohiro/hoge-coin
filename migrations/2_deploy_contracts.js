const DEPLOYER = '0x4986938Fa2E0086a8703A59ad6D9C3F7de15b8e2';
const HogeCoin = artifacts.require('HogeCoin');

module.exports = (deployer) => {
  deployer.deploy(HogeCoin, 10000, { from : DEPLOYER });
};