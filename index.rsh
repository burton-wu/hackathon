'reach 0.1';
'use strict';

// BW: Consider turn this into an array of strings
const PASSCODE = array(UInt, [1000, 2000, 3000, 4000, 5000, 6000]);

const Player = {
  seeWeekOutcome: Fun([Bool], Null),
  seeWeekOutcomeArray: Fun([], Array(Bool,6)),
  seeOverallOutcome: Fun([Bool], Null),
};

export const main = Reach.App(() => {

  const Creator = Participant('Creator', {
    ...Player,
    createNFTs: Fun([], Object({
      nftId1: Token,
      nftId2: Token,
      nftId3: Token,
      nftId4: Token,
      nftId5: Token,
      nftId6: Token,
      nftId7: Token,
    })),
    // BW: createNFTsArray (in draft) aims to improve createNFTs via an array
    //createNFTsArray: Fun([], Array(Token,7)),
    setFee: Fun([], UInt),
    requestPasscode: Fun([UInt], Null),
    updateWeekOutcomeArray: Fun([UInt,Bool], Null),
  });

  const Alice = Participant('Alice', {
    ...Player,
    provideWeek: Fun([], UInt),
    acceptFee: Fun([UInt], Null),
    providePasscode: Fun([UInt], UInt),
  });

  init();

  // Only 1 NFT will be issued eaech time
  const amtNFT = 1;

  // Creator creates 7 NFTs and publishes the parameters
  // Note: declassify can only occure with .only()
  // Note: check's (inside .only() and after publish) are required to make sure NFTs are distinct
  //       That is, make sure the data is valid on both the local computer and for smart contract
  Creator.only(() => {

    const {nftId1,nftId2,nftId3,nftId4,nftId5,nftId6,nftId7} = declassify(interact.createNFTs());

    check(distinct(nftId1,nftId2,nftId3,nftId4,nftId5,nftId6,nftId7)==true,"Invalid tokens.");

    //const nftIdArray = declassify(interact.createNFTsArray());

  });

  Creator.publish(nftId1,nftId2,nftId3,nftId4,nftId5,nftId6,nftId7);

  check(distinct(nftId1,nftId2,nftId3,nftId4,nftId5,nftId6,nftId7)==true,"Invalid tokens.");

  

  //Creator.publish(nftIdArray);

  //commit();
/*
  var RUNNING = true;

  // BW: Not sure how to write this
  //invariant (weekNumber<6);

  while ( RUNNING == true) {
*/
    commit();

    // BW: Incorporate the while loop and put into parallelReduce if appropriate
    // BW: Implement delays in the future
    // BW: Add "Claire" into the equation so we can see what the public sees in the future

    // Alice requests assessment for Week X
    Alice.only(() => {

      const weekNumber = declassify(interact.provideWeek());

      check(weekNumber<6,"Invalid week has been selected.");

    });

    Alice.publish(weekNumber);

    check(weekNumber<6,"Invalid week has been selected.");

    commit();

    // Creator determines the fee
    Creator.only(() => {

      const assessmentFee = declassify(interact.setFee());

    });

    Creator.publish(assessmentFee);

    commit();

    // Alice accepts the assessment fee
    Alice.only(() => {

      interact.acceptFee(assessmentFee);

    });

    // Creator requests the passcode for the Week
    Creator.only(() => {

      interact.requestPasscode(weekNumber);

    });

    // Alice provides the passcode for the Week
    // BW: Convert this into a private mode as we don't want everyone to see passcode
    Alice.only (() => {

      const weekPasscode = declassify(interact.providePasscode(weekNumber));

    });

    Alice.publish(weekPasscode);

    commit();

    // Creator verifies if the passcode is authentic and corresponds to the week
    // Note: x[y] notation is only valid if x is an array (not a tuple)
    // Note: Syntex for multiple scenarios -- outcome = (Condition1) ? x : (Condition2) ? y : z
    // Note: Only account balance and declared loop variables can be changed in rsh
    const weekOutcome = (weekPasscode == PASSCODE[weekNumber]) ? true : false;

    // Display the outcome for the week
    // BW: This is not really needed and will be removed later
    each([Creator, Alice], () => {

      interact.seeWeekOutcome(weekOutcome);

    });

    Creator.only(() => {

      const weekOutcomeArray1 = declassify(interact.seeWeekOutcomeArray());

    });

    Creator.publish(weekOutcomeArray1);

    // Alice pays the assessment fee to the Creator and get 1 NFT if weekOutcome is true
    if ( weekOutcome == true ) {

      commit();

      Alice.pay(assessmentFee);

      transfer(assessmentFee).to(Creator);

      // However no new NFT will be issued if it has been issued before
      if ( weekOutcomeArray1[weekNumber] == false ) {

        if ( weekNumber == 0) {
          commit();
          Creator.pay([[amtNFT, nftId1]]);
          transfer([[amtNFT, nftId1]]).to(Alice);
        } else if ( weekNumber == 1 ) {
          commit();
          Creator.pay([[amtNFT, nftId2]]);
          transfer([[amtNFT, nftId2]]).to(Alice);
        } else if ( weekNumber == 2 ) {
          commit();
          Creator.pay([[amtNFT, nftId3]]);
          transfer([[amtNFT, nftId3]]).to(Alice);
        } else if ( weekNumber == 3 ) {
          commit();
          Creator.pay([[amtNFT, nftId4]]);
          transfer([[amtNFT, nftId4]]).to(Alice);
        } else if ( weekNumber == 4 ) {
          commit();
          Creator.pay([[amtNFT, nftId5]]);
          transfer([[amtNFT, nftId5]]).to(Alice);
        } else if ( weekNumber == 5 ) {
          commit();
          Creator.pay([[amtNFT, nftId6]]);
          transfer([[amtNFT, nftId6]]).to(Alice);
        }

      }
  /*
      if ( weekNumber < 6 ) {
        commit();
        Creator.pay([[amtNFT, nftIdArray[weekNumber]]]);
        transfer([[amtNFT, nftIdArray[weekNumber]]]).to(Alice);
      }
  */

    }

    commit();

    // Update and publish the WeekOutcomeArray
    // BW: Should move up to the if block above but does not change the outcome
    Creator.only(() => {

      interact.updateWeekOutcomeArray(weekNumber,weekOutcome);

      const weekOutcomeArray2 = declassify(interact.seeWeekOutcomeArray());
      
    });

    Creator.publish(weekOutcomeArray2);

    // Creator assesses the overall outcome
    const overallOutcome = ( weekOutcomeArray2[0] == true &&
      weekOutcomeArray2[1] == true && weekOutcomeArray2[2] == true &&
      weekOutcomeArray2[3] == true && weekOutcomeArray2[4] == true &&
      weekOutcomeArray2[5] == true ) ? true : false;

    // Display the overall outcome
    each([Creator, Alice], () => {

      interact.seeOverallOutcome(overallOutcome);

    });

    // Creator issues the Overall NFT if all conditions have been met
    if ( overallOutcome == true ) {

      commit();

      Creator.pay([[amtNFT, nftId7]]);

      transfer([[amtNFT, nftId7]]).to(Alice);

      //Creator.pay([[amtNFT, nftIdArray[6]]]);

      //transfer([[amtNFT, nftIdArray[6]]]).to(Alice);

    }

    commit();
/*
    if ( overallOutcome == true ) {
      RUNNING = false;
    }
    continue;
  }  
*/

});