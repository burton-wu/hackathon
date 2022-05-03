'reach 0.1';
'use strict';

// BW: Consider turn this into an array of strings
const PASSCODE = array(UInt, [1000, 2000, 3000, 4000, 5000, 6000]);

// BW: Need to create a map for the NFTs

const Player = {
  getWeek: Fun([], UInt),
  seeWeekOutcome: Fun([Bool], Null),
  seeOverallOutcome: Fun([Bool], Null),
};

export const main = Reach.App(() => {

  const Creator = Participant('Creator', {
    ...Player,
    createNFT: Fun([], Object({
      nftId: Token,
      lenInBlocks: UInt,
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

  // Creator creates the NFT and publishes the parameters
  Creator.only(() => {
    const {nftId, lenInBlocks} = declassify(interact.createNFT());
  });
  Creator.publish(nftId, lenInBlocks);

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

    commit();

    // 1 NFT is issued to Alice (after moved to smart contract)
    const amt = 1;

    // BW: Why do I need so many brackets?
    Creator.pay([[amt, nftId]]);
    transfer([[amt, nftId]]).to(Alice);

  }

  commit();

  // Display the outcome for the week
  each([Creator, Alice], () => {
    interact.seeWeekOutcome(weekOutcome);
  });

  // Creator assesses the overall outcome
  // BW: Currently set weekNumber >2 to trigger results
  const overallOutcome = (weekNumber > 2) ? true : false;

  // Display the overall outcome
  each([Creator, Alice], () => {
    interact.seeOverallOutcome(overallOutcome);
  });

});