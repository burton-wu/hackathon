import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = await loadStdlib();
const startingBalance = stdlib.parseCurrency(1000);

console.log(`Creating test account for Admin`);
const accCreator = await stdlib.newTestAccount(startingBalance);

console.log(`Creating test account for Alice`);
const accAlice = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeCreator = await getBalance(accCreator);
const beforeAlice = await getBalance(accAlice);

// BW: In our case, Alice is the one trigger the smart contract, correct?
// BW: I ran into errors when minting the NFT, so have switched the two around
const ctcCreator = accAlice.contract(backend);
const ctcAlice = accCreator.contract(backend, ctcCreator.getInfo());
//const ctcAlice = accAlice.contract(backend);
//const ctcCreator = accCreator.contract(backend, ctcAlice.getInfo());

// Create an NFT
// BW: This will need to be exapnded to multiple unique ones
// BW: NFT vs POAR? Will circle back to this later
console.log(`Admin creates an NFT`);
const theNFT = await stdlib.launchToken(accCreator, "bumple", "NFT", { supply: 1 });
const nftId = theNFT.id;
const minBid = stdlib.parseCurrency(0);
const lenInBlocks = 10;
const params = { nftId, minBid, lenInBlocks };

const WEEK = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
const OUTCOME = ['FRAUD', 'CERT', 'OVERALL'];

const Player = (Who) => ({

  getWeek: () => {
    const week = Math.floor(Math.random() * 6);
    console.log(`${Who} asked for Week ${WEEK[week]}`);
    return week;
  },

  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
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
      // BW: But first why do I need Math.floor?
      // BW: Why the line below gives out 41 when week=4 without the Math.floor?
      // BW: week is not a number?
      //const passcode = week+1;
      //const passcode = (Math.floor(week)+1)*10;
      const passcode = 30;
      console.log(`Alice provides passcode ${passcode} for Week ${WEEK[week]}.`);
      return passcode;
    },
  }),

]);

const afterCreator = await getBalance(accCreator);
const afterAlice = await getBalance(accAlice);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);