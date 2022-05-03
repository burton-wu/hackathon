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

// Create 7 NFTs for each of the 6 weeks plus an overall
// Note: SK1 is just a label, reference the NFT via the ID
// BW: NFT vs POAR? Will circle back to this later
// BW: How best to convert this to an array?
console.log(`Creator creates 7 NFT`);

const theNFT1 = await stdlib.launchToken(accCreator, "SK1", "NFT", { supply: 1 });
const theNFT2 = await stdlib.launchToken(accCreator, "SK2", "NFT", { supply: 1 });
const theNFT3 = await stdlib.launchToken(accCreator, "SK3", "NFT", { supply: 1 });
const theNFT4 = await stdlib.launchToken(accCreator, "SK4", "NFT", { supply: 1 });
const theNFT5 = await stdlib.launchToken(accCreator, "SK5", "NFT", { supply: 1 });
const theNFT6 = await stdlib.launchToken(accCreator, "SK6", "NFT", { supply: 1 });
const theNFT7 = await stdlib.launchToken(accCreator, "SK7", "NFT", { supply: 1 });

const nftId1 = theNFT1.id;
const nftId2 = theNFT2.id;
const nftId3 = theNFT3.id;
const nftId4 = theNFT4.id;
const nftId5 = theNFT5.id;
const nftId6 = theNFT6.id;
const nftId7 = theNFT7.id;

const params = { nftId1, nftId2, nftId3, nftId4, nftId5, nftId6, nftId7 };

console.log(`Store the starting NFT balances for both Creator and Alice`);

const [, beforeNFTCreator1 ] = await stdlib.balancesOf(accCreator, [null, nftId1]);
const [, beforeNFTCreator2 ] = await stdlib.balancesOf(accCreator, [null, nftId2]);
const [, beforeNFTCreator3 ] = await stdlib.balancesOf(accCreator, [null, nftId3]);
const [, beforeNFTCreator4 ] = await stdlib.balancesOf(accCreator, [null, nftId4]);
const [, beforeNFTCreator5 ] = await stdlib.balancesOf(accCreator, [null, nftId5]);
const [, beforeNFTCreator6 ] = await stdlib.balancesOf(accCreator, [null, nftId6]);
const [, beforeNFTCreator7 ] = await stdlib.balancesOf(accCreator, [null, nftId7]);

const [, beforeNFTAlice1 ] = await stdlib.balancesOf(accAlice, [null, nftId1]);
const [, beforeNFTAlice2 ] = await stdlib.balancesOf(accAlice, [null, nftId2]);
const [, beforeNFTAlice3 ] = await stdlib.balancesOf(accAlice, [null, nftId3]);
const [, beforeNFTAlice4 ] = await stdlib.balancesOf(accAlice, [null, nftId4]);
const [, beforeNFTAlice5 ] = await stdlib.balancesOf(accAlice, [null, nftId5]);
const [, beforeNFTAlice6 ] = await stdlib.balancesOf(accAlice, [null, nftId6]);
const [, beforeNFTAlice7 ] = await stdlib.balancesOf(accAlice, [null, nftId7]);

console.log(`Creator launchs ${beforeNFTCreator1} NFT of ${nftId1} (#1)`);
console.log(`Creator launchs ${beforeNFTCreator2} NFT of ${nftId2} (#2)`);
console.log(`Creator launchs ${beforeNFTCreator3} NFT of ${nftId3} (#3)`);
console.log(`Creator launchs ${beforeNFTCreator4} NFT of ${nftId4} (#4)`);
console.log(`Creator launchs ${beforeNFTCreator5} NFT of ${nftId5} (#5)`);
console.log(`Creator launchs ${beforeNFTCreator6} NFT of ${nftId6} (#6)`);
console.log(`Creator launchs ${beforeNFTCreator7} NFT of ${nftId7} (#7)`);

console.log(`Alice has ${beforeNFTAlice1} NFT of ${nftId1} (#1)`);
console.log(`Alice has ${beforeNFTAlice2} NFT of ${nftId2} (#2)`);
console.log(`Alice has ${beforeNFTAlice3} NFT of ${nftId3} (#3)`);
console.log(`Alice has ${beforeNFTAlice4} NFT of ${nftId4} (#4)`);
console.log(`Alice has ${beforeNFTAlice5} NFT of ${nftId5} (#5)`);
console.log(`Alice has ${beforeNFTAlice6} NFT of ${nftId6} (#6)`);
console.log(`Alice has ${beforeNFTAlice7} NFT of ${nftId7} (#7)`);

const WEEK = ['#1', '#2', '#3', '#4', '#5', '#6'];

// BW: Remember which week's NFT has been issued etc
//const OUTCOME = array(Bool, [false, false, false, false, false, false]);

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

    createNFTs: () => {
      console.log(`Creator sets parameters of the NFT:`, params);
      return params;
    },

    setFee: () => {
      const fee = stdlib.parseCurrency(5);
      console.log(`Creator sets the assessment fee of ${fmt(fee)} ${stdlib.standardUnit}`);
      return fee;
    },

    requestPasscode: (week) => {
      console.log(`Creator seeks the passcode for Week ${WEEK[week]}`);
    },

  }),

  ctcAlice.p.Alice({

    ...Player('Alice'),

    acceptFee: (amt) => {
      console.log(`Alice accepts the assessment fee of ${fmt(amt)} ${stdlib.standardUnit}`);
    },

    providePasscode: (week) => {
      // The last random number allows the outcome to be false
      const passcode = (Math.floor(week)+1)*1000+Math.floor(Math.random()*2);
      console.log(`Alice provides passcode ${passcode} for Week ${WEEK[week]}`);
      return passcode;
    },

  }),

]);

const afterCreator = await getBalance(accCreator);
const afterAlice = await getBalance(accAlice);

console.log(`Creator went from ${beforeCreator} to ${afterCreator} ${stdlib.standardUnit}`);
console.log(`Alice went from ${beforeAlice} to ${afterAlice} ${stdlib.standardUnit}`);

const [, afterNFTCreator1 ] = await stdlib.balancesOf(accCreator, [null, nftId1]);
const [, afterNFTCreator2 ] = await stdlib.balancesOf(accCreator, [null, nftId2]);
const [, afterNFTCreator3 ] = await stdlib.balancesOf(accCreator, [null, nftId3]);
const [, afterNFTCreator4 ] = await stdlib.balancesOf(accCreator, [null, nftId4]);
const [, afterNFTCreator5 ] = await stdlib.balancesOf(accCreator, [null, nftId5]);
const [, afterNFTCreator6 ] = await stdlib.balancesOf(accCreator, [null, nftId6]);
const [, afterNFTCreator7 ] = await stdlib.balancesOf(accCreator, [null, nftId7]);

const [, afterNFTAlice1 ] = await stdlib.balancesOf(accAlice, [null, nftId1]);
const [, afterNFTAlice2 ] = await stdlib.balancesOf(accAlice, [null, nftId2]);
const [, afterNFTAlice3 ] = await stdlib.balancesOf(accAlice, [null, nftId3]);
const [, afterNFTAlice4 ] = await stdlib.balancesOf(accAlice, [null, nftId4]);
const [, afterNFTAlice5 ] = await stdlib.balancesOf(accAlice, [null, nftId5]);
const [, afterNFTAlice6 ] = await stdlib.balancesOf(accAlice, [null, nftId6]);
const [, afterNFTAlice7 ] = await stdlib.balancesOf(accAlice, [null, nftId7]);

console.log(`Creator went from ${beforeNFTCreator1} to ${afterNFTCreator1} NFT of ${nftId1} (#1)`);
console.log(`Creator went from ${beforeNFTCreator2} to ${afterNFTCreator2} NFT of ${nftId2} (#2)`);
console.log(`Creator went from ${beforeNFTCreator3} to ${afterNFTCreator3} NFT of ${nftId3} (#3)`);
console.log(`Creator went from ${beforeNFTCreator4} to ${afterNFTCreator4} NFT of ${nftId4} (#4)`);
console.log(`Creator went from ${beforeNFTCreator5} to ${afterNFTCreator5} NFT of ${nftId5} (#5)`);
console.log(`Creator went from ${beforeNFTCreator6} to ${afterNFTCreator6} NFT of ${nftId6} (#6)`);
console.log(`Creator went from ${beforeNFTCreator7} to ${afterNFTCreator7} NFT of ${nftId7} (#7)`);

console.log(`Alice went from ${beforeNFTAlice1} to ${afterNFTAlice1} NFT of ${nftId1} (#1)`);
console.log(`Alice went from ${beforeNFTAlice2} to ${afterNFTAlice2} NFT of ${nftId2} (#2)`);
console.log(`Alice went from ${beforeNFTAlice3} to ${afterNFTAlice3} NFT of ${nftId3} (#3)`);
console.log(`Alice went from ${beforeNFTAlice4} to ${afterNFTAlice4} NFT of ${nftId4} (#4)`);
console.log(`Alice went from ${beforeNFTAlice5} to ${afterNFTAlice5} NFT of ${nftId5} (#5)`);
console.log(`Alice went from ${beforeNFTAlice6} to ${afterNFTAlice6} NFT of ${nftId6} (#6)`);
console.log(`Alice went from ${beforeNFTAlice7} to ${afterNFTAlice7} NFT of ${nftId7} (#7)`);