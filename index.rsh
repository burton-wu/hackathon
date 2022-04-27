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
  });

  const Alice   = Participant('Alice', {
    ...Player,
    acceptFee: Fun([UInt], Null),
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

  // Alice accept and pay the assessment fee
  Alice.only(() => {
    interact.acceptFee(assessmentFee);
  });

  Alice.pay(assessmentFee);
  transfer(assessmentFee).to(Creator);

  commit();

  // Currently outcome is calculated based on mod 3
  const outcome = weekAlice % 3;

  // Display the final outcome
  each([Creator, Alice], () => {
    interact.seeOutcome(outcome);
  });

});