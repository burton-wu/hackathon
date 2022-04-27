'reach 0.1';
'use strict';

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
    const weekAlice = declassify(interact.getWeek());
  });

  Alice.publish(weekAlice);

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
    interact.requestPasscode(weekAlice);
  });

  // Alice provides the passcode for the Week
  Alice.only (() => {
    const passcode = declassify(interact.providePasscode(weekAlice));
  });

  Alice.publish(passcode);

  // Currently outcome is calculated based on mod 3
  const outcome = passcode % 3;

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