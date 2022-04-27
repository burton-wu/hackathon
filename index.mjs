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

const ctcAlice = accAlice.contract(backend);
const ctcCreator = accCreator.contract(backend, ctcAlice.getInfo());

/*
console.log(`Having Admin create an NFT`);
const theNFT = await stdlib.launchToken(accCreeator, "bumple", "NFT", { supply: 1 });
const nftId = theNFT.id;
const minBid = stdlib.parseCurrency(5);
const lenInBlocks = 10;
const params = { nftId, minBid, lenInBlocks };
*/

const WEEK = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
const OUTCOME = ['OVERALL', 'CERT', 'FRAUD'];

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
    setFee: () => {
      const fee = stdlib.parseCurrency(5);
      console.log(`Creator set the assessment fee of ${fmt(fee)}.`);
      return fee;
    },
  }),

  ctcAlice.p.Alice({
    ...Player('Alice'),
    acceptFee: (amt) => {
      console.log(`Alice accepts the assessment fee of ${fmt(amt)}.`);
    },
  }),

]);

const afterCreator = await getBalance(accCreator);
const afterAlice = await getBalance(accAlice);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);