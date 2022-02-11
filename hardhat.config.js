require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/PSKg4wdVrKXdnxbl3z3hpYMjoKnnjlOh',
      accounts: ['0da2bf6ece8500f323cc891de6b88dcbf1717c58bd651141bc2f9d9e7104dba1'],
    },
  },
};