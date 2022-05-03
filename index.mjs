import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = await loadStdlib();
const startingBalance = stdlib.parseCurrency(1000);

console.log(`Creating test account for Creator`);
const accCreator = await stdlib.newTestAccount(startingBalance);

console.log(`Creating test account for Alice`);
const accAlice = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

console.log(`Store the starting balances for both Creator and Alice`);
const beforeCreator = await getBalance(accCreator);
const beforeAlice = await getBalance(accAlice);

// Note: Creator starts the contract since it publishes first
// BW: This may need to change as we change the timing of NFT being created
console.log(`Initiate the smart contract`);
const ctcCreator = accCreator.contract(backend);
const ctcAlice = accAlice.contract(backend, ctcCreator.getInfo());

// Create an NFT
// Note: SK1 is just a label, reference the NFT via the ID
// BW: Exapnd to multiple NFTs
// BW: NFT vs POAR? Will circle back to this later
console.log(`Creator creates an NFT`);
const theNFT = await stdlib.launchToken(accCreator, "SK1", "NFT", { supply: 1 });
const nftId = theNFT.id;
const lenInBlocks = 10;
const params = { nftId, lenInBlocks };

console.log(`Store the starting NFT balances for both Creator and Alice`);
const [, beforeNFTCreator ] = await stdlib.balancesOf(accCreator, [null, nftId]);
const [, beforeNFTAlice ] = await stdlib.balancesOf(accAlice, [null, nftId]);

console.log(`Creator launchs ${beforeNFTCreator} NFT of ${nftId}`);
console.log(`Alice has ${beforeNFTAlice} NFT of ${nftId}`);

const WEEK = ['#1', '#2', '#3', '#4', '#5', '#6'];

const Player = (Who) => ({

  getWeek: () => {
    const week = Math.floor(Math.random() * 6);
    console.log(`${Who} asked for Week ${WEEK[week]}`);
    return week;
  },

  seeWeekOutcome: (weekOutcome) => {
    console.log(`${Who} saw the weekly outcome ${weekOutcome}`);
  },

  seeOverallOutcome: (overallOutcome) => {
    console.log(`${Who} saw the overall outcome ${overallOutcome}`);
  },

});

await Promise.all([

  ctcCreator.p.Creator({

    ...Player('Creator'),

    createNFT: () => {
      console.log(`Creator sets parameters of the NFT:`, params);
      return params;
    },

    setFee: () => {
      const fee = stdlib.parseCurrency(5);
      console.log(`Creator sets the assessment fee of ${fmt(fee)}.`);
      return fee;
    },

    requestPasscode: (week) => {
      console.log(`Creator seeks the passcode for Week ${WEEK[week]}.`);
    },

  }),

  ctcAlice.p.Alice({

    ...Player('Alice'),

    acceptFee: (amt) => {
      console.log(`Alice accepts the assessment fee of ${fmt(amt)}.`);
    },

    providePasscode: (week) => {
      // The last random number allows the outcome to be false
      const passcode = (Math.floor(week)+1)*1000+Math.floor(Math.random()*2);
      console.log(`Alice provides passcode ${passcode} for Week ${WEEK[week]}.`);
      return passcode;
    },

  }),

]);

const afterCreator = await getBalance(accCreator);
const afterAlice = await getBalance(accAlice);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);

const [, afterNFTCreator ] = await stdlib.balancesOf(accCreator, [null, nftId]);
const [, afterNFTAlice ] = await stdlib.balancesOf(accAlice, [null, nftId]);

console.log(`Creator went from ${beforeNFTCreator} to ${afterNFTCreator} NFTs.`);
console.log(`Alice went from ${beforeNFTAlice} to ${afterNFTAlice} NFTs.`);