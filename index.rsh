'reach 0.1';
'use strict';

// BW: Hardcode the passcodes for now
// BW: Ideally would like to turn this into an array of strings
// BW: May need to research into number-character conversions
// BW: What's the difference between arrays and maps?
//const PASSCODE = [10, 20, 30, 40, 50, 60];
// BW: I get the "array bounds check" error messages
const PASSCODE = array(UInt, [10, 20, 30, 40, 50, 60]);

// BW: Why Int doesn't work?
const Player = {
  getWeek: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {

  /*
  const Creator = Participant('Creator', {
    getSale: Fun([], Object({
        nftId: Token,
        minBid: UInt,
        lenInBlocks: UInt,
    })),
    auctionReady: Fun([], Null),
    seeBid: Fun([Address, UInt], Null),
    showOutcome: Fun([Address, UInt], Null),
  });
  */

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

  const Alice   = Participant('Alice', {
    ...Player,
    acceptFee: Fun([UInt], Null),
    providePasscode: Fun([UInt], UInt),
  });

  init();

  // Creator defines the NFT parameters
  Creator.only(() => {
    const {nftId, minBid, lenInBlocks} = declassify(interact.createNFT());
  });
  Creator.publish(nftId, minBid, lenInBlocks);

  const amt = 0;

  commit();

  // Creator mint the NFT with cost of amt
  // BW: Is my comment correct?
  // BW: Is this needed?
  // BW: Why this won't work when amt is set to 1?
  // BW: Run gets "Error: Assertion failed: local account token balance is insufficient: 0 < 1"
  Creator.pay([[amt, nftId]]);

  commit();

  // Alice requests assessment for Week X
  // BW: Actually do I really need all these .only? We are not playing RPS?
  Alice.only(() => {
    const weekNumber = declassify(interact.getWeek());
  });

  //require(weekNumber<6);
  //check(weekNumber<6,"Invalid week has been selected.");
  Alice.publish(weekNumber);

  commit();

  // Creator determines the fee
  Creator.only(() => {
    const assessmentFee = declassify(interact.setFee());
  });

  Creator.publish(assessmentFee);

  commit();

  // Alice accept the assessment fee
  Alice.only(() => {
    interact.acceptFee(assessmentFee);
  });

  // Creator requests the passcode for the Week
  Creator.only(() => {
    interact.requestPasscode(weekNumber);
  });

  // Alice provides the passcode for the Week
  Alice.only (() => {
    const weekPasscode = declassify(interact.providePasscode(weekNumber));
  });

  Alice.publish(weekPasscode);

  // Creator verifies if the passcode is authentic and corresponds to the week
  // BW: The statement below doesn't work; hardcode PASSCODE[0] in the interim
  //const outcome = (weekPasscode == PASSCODE[weekNumber]) ? 0 : 1;
  const outcome = (weekPasscode == PASSCODE[2]) ? 1 : 0; 

  /*
  outcome = (Condition1) ? x :
  (Condition2) ? y :
                              z
  */

  commit();

  // Alice pays the assessment fee to the Creator
  // NFT is issued to Alice
  Alice.pay(assessmentFee);

  transfer(assessmentFee).to(Creator);

  transfer(amt, nftId).to(Alice);

  commit();

  // Display the final outcome
  each([Creator, Alice], () => {
    interact.seeOutcome(outcome);
  });

});