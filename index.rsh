'reach 0.1';
'use strict';

// BW: Consider turn this into an array of strings
const PASSCODE = array(UInt, [10, 20, 30, 40, 50, 60]);

// BW: Need to create a map for the NFTs

// BW: getWeek should moved to Alice
const Player = {
  getWeek: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {

  const Creator = Participant('Creator', {
    ...Player,
    createNFT: Fun([], Object({
      nftId: Token,
      minBid: UInt,
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
    const {nftId, minBid, lenInBlocks} = declassify(interact.createNFT());
  });
  Creator.publish(nftId, minBid, lenInBlocks);

  // Cost of moving the NFT to the smart contract
  const amt = 1;

  commit();

  // Creator moves the NFT to the smart contract
  // BW: Why do I need so many brackets?
  Creator.pay([[amt, nftId]]);

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
  // BW: Conver this into a private mode as we don't want everyone to see passcode
  Alice.only (() => {
    const weekPasscode = declassify(interact.providePasscode(weekNumber));
  });

  Alice.publish(weekPasscode);

  // Creator verifies if the passcode is authentic and corresponds to the week
  // Note: x[y] notation is only valid if x is an array (not a tuple)
  const outcome = (weekPasscode == PASSCODE[weekNumber]) ? 1 : 0;

  // BW: Convert outcome into 3 conditions (or two different variables)
  /*
  outcome = (Condition1) ? x :
  (Condition2) ? y :
                              z
  */

  commit();

  // BW: Condition loop needs to be added to retrun the money to Alice
  //     and not issuing NFT etc

  // Alice pays the assessment fee to the Creator
  Alice.pay(assessmentFee);

  transfer(assessmentFee).to(Creator);

  // NFT is issued to Alice
  transfer(amt, nftId).to(Alice);

  commit();

  // Display the final outcome
  each([Creator, Alice], () => {
    interact.seeOutcome(outcome);
  });

});