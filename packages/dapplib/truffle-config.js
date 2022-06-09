require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind modify inner drum front test'; 
let testAccounts = [
"0x499e0f321b7b920bb7fb1d4bffcd62350446305d36f6da277130fe943eea50f4",
"0xb19625b1275353beaf48ebd570e3b4531b47c5da222ceda89436222b43eec6c5",
"0x3eb9632f14d7a2ba9136615feaa707283f77e21a0e4f9418d24250ce253d604c",
"0x655aba71fb1bb7213f24a8bf446dc665f0a623a37b55a8f801686bf4c8788444",
"0x46baa6cd044a92f8ce2e23c279e387d7b62ea73fa3a89bf3294de484e27745b2",
"0x487b6708188001db72563e0a6fb023ffbda203696bc8282c16eff4896643b5e4",
"0xcaf1388093b3a3bae82b7b222c0b598916f6da8be652b648bfc702e7c5266b98",
"0xcb07560a13dca71451b098c2a8fa037bf89f45291c627a69d7e2945f0b9e759a",
"0x6189a6696b20d5a365462dabfd5975619fde089c28c20753681dfd359e159e4b",
"0x84fb48cfa5bcaa05892f332fb62005da02800c37278d75fb25943b7b2a5928f4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


