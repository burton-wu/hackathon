import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(1000);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

/*
const isAlice = await ask.ask(
  `Are you Alice?`,
  ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';

console.log(`Starting the certification process as ${who}`);

let acc = null;
acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
*/

const WEEK = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
const OUTCOME = ['OVERALL', 'CERT', 'FRAUD'];

const Player = (Who) => ({
  getWeek: () => {
    const week = Math.floor(Math.random() * 6);
    console.log(`${Who} asked for Week ${WEEK[week]}`);
    return week;
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
  },
});

await Promise.all([
  ctcAlice.p.Alice({
    ...Player('Alice'),
  }),
  ctcBob.p.Bob({
    ...Player('Bob'),
  }),
]);