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

// Creator starts the contract since it publishes first
const ctcCreator = accCreator.contract(backend);
const ctcAlice = accAlice.contract(backend, ctcCreator.getInfo());

// Create an NFT
// BW: Exapnd to multiple NFTs
// BW: NFT vs POAR? Will circle back to this later
console.log(`Creator creates an NFT`);
const theNFT = await stdlib.launchToken(accCreator, "SK1", "NFT", { supply: 1 });
const nftId = theNFT.id;
const minBid = stdlib.parseCurrency(0);
const lenInBlocks = 10;
const params = { nftId, minBid, lenInBlocks };

const WEEK = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];

// BW: Might be easier to sepeate out the outcome into Week vs Overall
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
      // BW: last random number allows the outcome to be FRAUD
      const passcode = (Math.floor(week)+1)*10+Math.floor(Math.random()*2);
      console.log(`Alice provides passcode ${passcode} for Week ${WEEK[week]}.`);
      return passcode;
    },
  }),

]);

const afterCreator = await getBalance(accCreator);
const afterAlice = await getBalance(accAlice);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);