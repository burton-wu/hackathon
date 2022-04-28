'reach 0.1';
'use strict';

// BW: Hardcode the passcodes for now
// BW: Ideally would like to turn this into an array of strings
// BW: May need to research into number-character conversions
// BW: What's the difference between arrays and maps?
const PASSCODE = [10, 20, 30, 40, 50, 60];
// BW: I get the "array bounds check" error messages
//const PASSCODE = array(UInt, [10, 20, 30, 40, 50, 60]);

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
    setFee: Fun([], UInt),
    requestPasscode: Fun([UInt], Null),
  });

  const Alice   = Participant('Alice', {
    ...Player,
    acceptFee: Fun([UInt], Null),
    providePasscode: Fun([UInt], UInt),
  });

  init();

  // Alice requests assessment for Week X
  Alice.only(() => {
    const weekNumber = declassify(interact.getWeek());
  });

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

  commit();

  // Alice pays the assessment fee to the Creator
  Alice.pay(assessmentFee);

  transfer(assessmentFee).to(Creator);

  commit();

  // Display the final outcome
  each([Creator, Alice], () => {
    interact.seeOutcome(outcome);
  });

});