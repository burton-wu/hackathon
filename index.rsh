'reach 0.1';

const Player = {
  getWeek: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {

  // Alice is the customer who asks for certificate(s)
  const Alice = Participant('Alice', {
    ...Player,
  });

  // Bob is the certification organisation
  const Bob   = Participant('Bob', {
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

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });

});