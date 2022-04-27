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
    //assessmentFee: UInt,
    //setFee: UInt,
    setFee: Fun([], UInt),
  });

  const Alice   = Participant('Alice', {
    ...Player,
    acceptFee: Fun([UInt], Null),
  });

  init();

  Alice.only(() => {
    const weekAlice = declassify(interact.getWeek());
  });

  Alice.publish(weekAlice);

  commit();

  Creator.only(() => {
    //const assessmentFee = declassify(interact.assessmentFee);
    const assessmentFee = declassify(interact.setFee());
  });

  Creator.publish(assessmentFee);

  commit();

  Alice.only(() => {
    interact.acceptFee(assessmentFee);
  });

  //Alice.pay(assessmentFee);

  //commit();

  // Currently outcome is based on mod 3
  const outcome = weekAlice % 3;

  //transfer(assessmentFee).to(Creator);

  //commit();

  each([Creator, Alice], () => {
    interact.seeOutcome(outcome);
  });

});