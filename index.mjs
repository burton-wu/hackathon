//export REACH_CONNECTOR_MODE=ALGO
//../reach run

import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = await loadStdlib();

console.log(`Create test accounts for Creator and Alice`);
const startingBalance = stdlib.parseCurrency(1000);
const accCreator = await stdlib.newTestAccount(startingBalance);
const accAlice = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

console.log(`Store the starting balances for Creator and Alice`);
const beforeCreator = await getBalance(accCreator);
const beforeAlice = await getBalance(accAlice);

// Note: Alice starts the contract since she now publishs first
console.log(`Establish the smart contract`);
const ctcAlice = accAlice.contract(backend);
const ctcCreator = accCreator.contract(backend, ctcAlice.getInfo());
//const ctcCreator = accCreator.contract(backend);
//const ctcAlice = accAlice.contract(backend, ctcCreator.getInfo());

// There are 3 weeks worth of training
const WEEK = ['#1', '#2', '#3'];

// Assume Alice has not completed any Weeks
// BW: If the while loop is still not workings, then this can be the first input from Alice
let weekOutcomeArray = [false, false, false];
//let weekOutcomeArray = [false, true, false];
//let weekOutcomeArray = [true, true, false];
//let weekOutcomeArray = [true, true, true];

// Create a total of 4 NFTs for each of the 3 weeks plus an overall
// Note: NFT and POAR is actually different (use NFT for now)
console.log(`Creator creates 3+1 NFTs`);

const theNFT1 = await stdlib.launchToken(accCreator, "SK1", "NFT", { supply: 1 }); // Week 1
const theNFT2 = await stdlib.launchToken(accCreator, "SK2", "NFT", { supply: 1 }); // Week 2
const theNFT3 = await stdlib.launchToken(accCreator, "SK3", "NFT", { supply: 1 }); // Week 3
const theNFT4 = await stdlib.launchToken(accCreator, "SK4", "NFT", { supply: 1 }); // Overall

// Note: SK1 is just a label. Need to reference the NFT via the ID
const nftId1 = theNFT1.id; 
const nftId2 = theNFT2.id;
const nftId3 = theNFT3.id;
const nftId4 = theNFT4.id;

const params = {nftId1,nftId2,nftId3,nftId4};

// BW: Ideally woud like to turn these NFTs into an array
//const params2 = [nftId1,nftId2,nftId3,nftId4];
//console.log(`params2[3] = ${params2[3]}`);

/*// Detail logs that are no longer needed
console.log(`Store the starting NFT balances for both Creator and Alice`);

const [, beforeNFTCreator1 ] = await stdlib.balancesOf(accCreator, [null, nftId1]);
const [, beforeNFTCreator2 ] = await stdlib.balancesOf(accCreator, [null, nftId2]);
const [, beforeNFTCreator3 ] = await stdlib.balancesOf(accCreator, [null, nftId3]);
const [, beforeNFTCreator4 ] = await stdlib.balancesOf(accCreator, [null, nftId4]);

const [, beforeNFTAlice1 ] = await stdlib.balancesOf(accAlice, [null, nftId1]);
const [, beforeNFTAlice2 ] = await stdlib.balancesOf(accAlice, [null, nftId2]);
const [, beforeNFTAlice3 ] = await stdlib.balancesOf(accAlice, [null, nftId3]);
const [, beforeNFTAlice4 ] = await stdlib.balancesOf(accAlice, [null, nftId4]);

console.log(`Creator launchs ${beforeNFTCreator1} NFT of ${nftId1} (#1)`);
console.log(`Creator launchs ${beforeNFTCreator2} NFT of ${nftId2} (#2)`);
console.log(`Creator launchs ${beforeNFTCreator3} NFT of ${nftId3} (#3)`);
console.log(`Creator launchs ${beforeNFTCreator4} NFT of ${nftId4} (Overall)`);

console.log(`Alice has ${beforeNFTAlice1} NFT of ${nftId1} (#1)`);
console.log(`Alice has ${beforeNFTAlice2} NFT of ${nftId2} (#2)`);
console.log(`Alice has ${beforeNFTAlice3} NFT of ${nftId3} (#3)`);
console.log(`Alice has ${beforeNFTAlice4} NFT of ${nftId4} (Overall)`);
*/

const Player = (Who) => ({
/*
  seeWeekOutcome: (weekOutcome) => {
    console.log(`${Who} saw the weekly outcome ${weekOutcome}`);
  },
*/
  seeWeekOutcomeArray: (initial,display) => {
    // Only display the log when requested
    if ( initial == true ) {
      console.log(`Alice's initial weekly status is: ${weekOutcomeArray}`);
    } else if ( display == true ) {
      console.log(`Alice's latest weekly status is: ${weekOutcomeArray}`);
    }
    return weekOutcomeArray;
  },
/*
  seeOverallOutcome: (overallOutcome) => {
    console.log(`${Who} saw the overall outcome ${overallOutcome}`);
  },
*/
});

await Promise.all([

  ctcCreator.p.Creator({

    ...Player('Creator'),

    createNFTs: () => {
      console.log(`Creator sets parameters of the NFTs as:`, params);
      return params;
    },
/*
    createNFTsArray: () => {
      console.log(`Creator sets parameters of the NFT Array as:`, params2);
      return params2;
    },
*/
    setFee: () => {
      const assessmentFee = stdlib.parseCurrency(5);
      console.log(`Creator sets the assessment fee of ${fmt(assessmentFee)} ${stdlib.standardUnit}`);
      return assessmentFee;
    },

    requestPasscode: (weekNumber) => {
      console.log(`Creator seeks the passcode for Week ${WEEK[weekNumber]}`);
    },

    updateWeekOutcomeArray: (weekNumber,weekOutcome) => {
      // There are 3 different outcomes for each week
      if ( weekOutcome == true && weekOutcomeArray[weekNumber] == false ) {
        weekOutcomeArray[weekNumber] = weekOutcome; // weekOutcome = true
        console.log(`Alice has passed Week ${Math.floor(weekNumber)+1} for the first time`);
      } else if ( weekOutcome == true && weekOutcomeArray[weekNumber] == true ) {
        console.log(`Alice has passed Week ${Math.floor(weekNumber)+1} before; no new NFTs will be issued`);
      } else {
        console.log(`Alice has provided the wrong passcode for Week ${Math.floor(weekNumber)+1}`);
      }      
    },

  }),

  ctcAlice.p.Alice({

    ...Player('Alice'),

    provideWeek: () => {
      const weekNumber = Math.floor(Math.random() * 3);
      //const weekNumber = 2; // Week 3
      console.log(`Alice asks for Week ${WEEK[weekNumber]} to be assessed`);
      return weekNumber;
    },
  
    acceptFee: (assessmentFee) => {
      console.log(`Alice accepts the assessment fee of ${fmt(assessmentFee)} ${stdlib.standardUnit}`);
    },

    providePasscode: (weekNumber) => {
      // The last random number allows the outcome to be false
      const weekPasscode = (Math.floor(weekNumber)+1)*1000+Math.floor(Math.random()*2);
      //const weekPasscode = (Math.floor(weekNumber)+1)*1000;
      console.log(`Alice provides passcode ${weekPasscode} for Week ${WEEK[weekNumber]}`);
      return weekPasscode;
    },

  }),

]);

console.log(`Final results of this smart contract are:`);

const afterCreator = await getBalance(accCreator);
const afterAlice = await getBalance(accAlice);

console.log(`* Creator went from ${beforeCreator} to ${afterCreator} ${stdlib.standardUnit}`);
console.log(`* Alice went from ${beforeAlice} to ${afterAlice} ${stdlib.standardUnit}`);

//const [, afterNFTCreator1 ] = await stdlib.balancesOf(accCreator, [null, nftId1]);
//const [, afterNFTCreator2 ] = await stdlib.balancesOf(accCreator, [null, nftId2]);
//const [, afterNFTCreator3 ] = await stdlib.balancesOf(accCreator, [null, nftId3]);
//const [, afterNFTCreator4 ] = await stdlib.balancesOf(accCreator, [null, nftId4]);

const [, afterNFTAlice1 ] = await stdlib.balancesOf(accAlice, [null, nftId1]);
const [, afterNFTAlice2 ] = await stdlib.balancesOf(accAlice, [null, nftId2]);
const [, afterNFTAlice3 ] = await stdlib.balancesOf(accAlice, [null, nftId3]);
const [, afterNFTAlice4 ] = await stdlib.balancesOf(accAlice, [null, nftId4]);

/*// Detail logs that are no longer needed
console.log(`Creator went from ${beforeNFTCreator1} to ${afterNFTCreator1} NFT of ${nftId1} (#1)`);
console.log(`Creator went from ${beforeNFTCreator2} to ${afterNFTCreator2} NFT of ${nftId2} (#2)`);
console.log(`Creator went from ${beforeNFTCreator3} to ${afterNFTCreator3} NFT of ${nftId3} (#3)`);
console.log(`Creator went from ${beforeNFTCreator4} to ${afterNFTCreator4} NFT of ${nftId4} (#4)`);

console.log(`Alice went from ${beforeNFTAlice1} to ${afterNFTAlice1} NFT of ${nftId1} (#1)`);
console.log(`Alice went from ${beforeNFTAlice2} to ${afterNFTAlice2} NFT of ${nftId2} (#2)`);
console.log(`Alice went from ${beforeNFTAlice3} to ${afterNFTAlice3} NFT of ${nftId3} (#3)`);
console.log(`Alice went from ${beforeNFTAlice4} to ${afterNFTAlice4} NFT of ${nftId4} (#4)`);
*/

if ( weekOutcomeArray[0] == true ) {
  console.log(`* Alice received Week 1's NFT`);
}
if ( weekOutcomeArray[1] == true ) {
  console.log(`* Alice received Week 2's NFT`);
}
if ( weekOutcomeArray[2] == true ) {
  console.log(`* Alice received Week 3's NFT`);
}
if ( weekOutcomeArray[0] == true && weekOutcomeArray[1] == true && weekOutcomeArray[2] == true ) {
  console.log(`* Alice also received the Overall NFT`);
}
if ( weekOutcomeArray[0] == false && weekOutcomeArray[1] == false && weekOutcomeArray[2] == false ) {
  console.log(`* No NFTs were issued to Alice`);
}

/* 2022-05-09
if ( afterNFTAlice1 > 0 ) {
  console.log(`* Alice received Week 1's NFT of ${nftId1}`);
}
if ( afterNFTAlice2 > 0 ) {
  console.log(`* Alice received Week 2's NFT of ${nftId2}`);
}
if ( afterNFTAlice3 > 0 ) {
  console.log(`* Alice received Week 3's NFT of ${nftId3}`);
}
if ( afterNFTAlice4 > 0 ) {
  console.log(`* Alice also received the Overall NFT of ${nftId4}`);
}
if ( afterNFTAlice1 == 0 && afterNFTAlice2 == 0 && afterNFTAlice3 == 0 && afterNFTAlice4 == 0 ) {
  console.log(`* No NFTs were issued to Alice`);
}
*/