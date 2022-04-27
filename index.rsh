'reach 0.1';

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
  });

  const Alice = Participant('Alice', {
    ...Player,
  });

  init();

  Alice.only(() => {
    const weekAlice = declassify(interact.getWeek());
  });

  Alice.publish(weekAlice);

  commit();

  // Currently outcome is based on mod 3
  const outcome = weekAlice % 3;

  each([Creator, Alice], () => {
    interact.seeOutcome(outcome);
  });

});