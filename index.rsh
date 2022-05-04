'reach 0.1';
'use strict';

// BW: Consider turn this into an array of strings
const PASSCODE = array(UInt, [1000, 2000, 3000, 4000, 5000, 6000]);

// BW: Need to create a map for the NFTs

// BW: Remember which week's NFT has been issued etc
//const OUTCOME = array(Bool, [false, false, false, false, false, false]);

const Player = {
  getWeek: Fun([], UInt),
  seeWeekOutcome: Fun([Bool], Null),
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
    setFee: Fun([], UInt),
    requestPasscode: Fun([UInt], Null),
  });

  const Alice = Participant('Alice', {
    ...Player,
    acceptFee: Fun([UInt], Null),
    providePasscode: Fun([UInt], UInt),
  });

  init();

  // 1 NFT is issued
  const amt = 1;

  // Creator creates the NFT and publishes the parameters
  Creator.only(() => {

    const {nftId1, nftId2, nftId3, nftId4, nftId5, nftId6, nftId7} = declassify(interact.createNFTs());
    
    check(nftId1 != nftId2,"Invalid tokens.");
    check(nftId1 != nftId3,"Invalid tokens.");
    check(nftId1 != nftId4,"Invalid tokens.");
    check(nftId1 != nftId5,"Invalid tokens.");
    check(nftId1 != nftId6,"Invalid tokens.");
    check(nftId1 != nftId7,"Invalid tokens.");
  
    check(nftId2 != nftId3,"Invalid tokens.");
    check(nftId2 != nftId4,"Invalid tokens.");
    check(nftId2 != nftId5,"Invalid tokens.");
    check(nftId2 != nftId6,"Invalid tokens.");
    check(nftId2 != nftId7,"Invalid tokens.");
  
    check(nftId3 != nftId4,"Invalid tokens.");
    check(nftId3 != nftId5,"Invalid tokens.");
    check(nftId3 != nftId6,"Invalid tokens.");
    check(nftId3 != nftId7,"Invalid tokens.");
  
    check(nftId4 != nftId5,"Invalid tokens.");
    check(nftId4 != nftId6,"Invalid tokens.");
    check(nftId4 != nftId7,"Invalid tokens.");
  
    check(nftId5 != nftId6,"Invalid tokens.");
    check(nftId5 != nftId7,"Invalid tokens.");
  
    check(nftId6 != nftId7,"Invalid tokens.");

  });

  Creator.publish(nftId1, nftId2, nftId3, nftId4, nftId5, nftId6, nftId7);

  check(nftId1 != nftId2,"Invalid tokens.");
  check(nftId1 != nftId3,"Invalid tokens.");
  check(nftId1 != nftId4,"Invalid tokens.");
  check(nftId1 != nftId5,"Invalid tokens.");
  check(nftId1 != nftId6,"Invalid tokens.");
  check(nftId1 != nftId7,"Invalid tokens.");

  check(nftId2 != nftId3,"Invalid tokens.");
  check(nftId2 != nftId4,"Invalid tokens.");
  check(nftId2 != nftId5,"Invalid tokens.");
  check(nftId2 != nftId6,"Invalid tokens.");
  check(nftId2 != nftId7,"Invalid tokens.");

  check(nftId3 != nftId4,"Invalid tokens.");
  check(nftId3 != nftId5,"Invalid tokens.");
  check(nftId3 != nftId6,"Invalid tokens.");
  check(nftId3 != nftId7,"Invalid tokens.");

  check(nftId4 != nftId5,"Invalid tokens.");
  check(nftId4 != nftId6,"Invalid tokens.");
  check(nftId4 != nftId7,"Invalid tokens.");

  check(nftId5 != nftId6,"Invalid tokens.");
  check(nftId5 != nftId7,"Invalid tokens.");

  check(nftId6 != nftId7,"Invalid tokens.");

  commit();

  // BW: Incorporate the while loop and put into parallelReduce where appropriate
  // BW: Implement delays
  // BW: Add "Claire" into the equation so we can see what the public sees

  // Alice requests assessment for Week X
  // Note: declassify can only occure with .only()
  Alice.only(() => {

    const weekNumber = declassify(interact.getWeek());

    // Check the input week number is valid on Alice's computer
    // BW: will try to make "6" being dynamic
    check(weekNumber<6,"Invalid week has been selected.");

  });

  Alice.publish(weekNumber);

  // Check the input week number is valid for the smart contract
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

  // Creator verifies if the passcode is authentic and corresponds to the week
  // Note: x[y] notation is only valid if x is an array (not a tuple)
  const weekOutcome  = (weekPasscode == PASSCODE[weekNumber]) ? true : false;
 
  // Alice pays the assessment fee to the Creator and get 1 NFT if weekOutcome is true
  if ( weekOutcome == true ) {

    commit();

    Alice.pay(assessmentFee);
    transfer(assessmentFee).to(Creator);


    if ( weekNumber == 0 ) {
      commit();
      // BW: Why do I need so many brackets?
      Creator.pay([[amt, nftId1]]);
      transfer([[amt, nftId1]]).to(Alice);
    } else if ( weekNumber == 1 ) {
      commit();
      Creator.pay([[amt, nftId2]]);
      transfer([[amt, nftId2]]).to(Alice);
    } else if ( weekNumber == 2 ) {
      commit();
      Creator.pay([[amt, nftId3]]);
      transfer([[amt, nftId3]]).to(Alice);
    } else if ( weekNumber == 3 ) {
      commit();
      Creator.pay([[amt, nftId4]]);
      transfer([[amt, nftId4]]).to(Alice);
    } else if ( weekNumber == 4 ) {
      commit();
      Creator.pay([[amt, nftId5]]);
      transfer([[amt, nftId5]]).to(Alice);
    } else if ( weekNumber == 5 ) {
      commit();
      Creator.pay([[amt, nftId6]]);
      transfer([[amt, nftId6]]).to(Alice);
    }

  }

  // Display the outcome for the week
  each([Creator, Alice], () => {
    interact.seeWeekOutcome(weekOutcome);
  });

  // Creator assesses the overall outcome
  // BW: Currently set weekNumber >2 to trigger the result
  const overallOutcome = (weekNumber > 2) ? true : false;

  if ( overallOutcome == true ) {
    commit();
    Creator.pay([[amt, nftId7]]);
    transfer([[amt, nftId7]]).to(Alice);
    
  }

  commit();

  // Display the overall outcome
  each([Creator, Alice], () => {
    interact.seeOverallOutcome(overallOutcome);
  });

});