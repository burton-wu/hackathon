// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc2],
      4: [ctc0, ctc2, ctc0, ctc3, ctc3, ctc3, ctc3],
      5: [ctc0, ctc2, ctc0, ctc3, ctc3, ctc3, ctc3],
      6: [ctc0, ctc2, ctc0, ctc3, ctc3, ctc3, ctc3, ctc4],
      7: [ctc0, ctc2, ctc0, ctc3, ctc3, ctc3, ctc3, ctc4],
      8: [ctc0, ctc2, ctc0, ctc3, ctc3, ctc3, ctc3, ctc4],
      9: [ctc0, ctc2, ctc0, ctc3, ctc3, ctc3, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v279 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(true, true), {
    at: './index.rsh:43:70:application',
    fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v279],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v284], secs: v286, time: v285, didSend: v30, from: v283 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v284], secs: v286, time: v285, didSend: v30, from: v283 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc2, ctc2, ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v317, v318, v319, v320], secs: v322, time: v321, didSend: v85, from: v316 } = txn2;
  const v323 = stdlib.tokenEq(v317, v318);
  const v325 = stdlib.tokenEq(v317, v319);
  const v327 = stdlib.tokenEq(v317, v320);
  const v328 = v327 ? false : true;
  const v329 = v325 ? false : v328;
  const v330 = v323 ? false : v329;
  const v331 = stdlib.tokenEq(v318, v319);
  const v333 = stdlib.tokenEq(v318, v320);
  const v334 = v333 ? false : true;
  const v335 = v331 ? false : v334;
  const v336 = stdlib.tokenEq(v319, v320);
  const v337 = v336 ? false : true;
  const v338 = v335 ? v337 : false;
  const v339 = v330 ? v338 : false;
  stdlib.assert(v339, {
    at: './index.rsh:62:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Alice'
    });
  ;
  ;
  ;
  ;
  ;
  let v386 = false;
  let v387 = v321;
  
  while (await (async () => {
    const v413 = v386 ? false : true;
    
    return v413;})()) {
    const v416 = stdlib.protect(ctc3, await interact.provideWeek(), {
      at: './index.rsh:81:57:application',
      fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'provideWeek',
      who: 'Alice'
      });
    const v417 = stdlib.lt(v416, stdlib.checkedBigNumberify('./index.rsh:82:24:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v417, {
      at: './index.rsh:82:12:application',
      fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'Invalid week has been selected.',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v283, v284, v316, v317, v318, v319, v320, v416],
      evt_cnt: 1,
      funcNum: 3,
      lct: v387,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:86:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v419], secs: v421, time: v420, didSend: v132, from: v418 } = txn3;
        
        ;
        const v422 = stdlib.addressEq(v283, v418);
        ;
        const v423 = stdlib.lt(v419, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '3'));
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc1, ctc5, ctc2, ctc2, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v419], secs: v421, time: v420, didSend: v132, from: v418 } = txn3;
    ;
    const v422 = stdlib.addressEq(v283, v418);
    stdlib.assert(v422, {
      at: './index.rsh:86:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v423 = stdlib.lt(v419, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v423, {
      at: './index.rsh:87:10:application',
      fs: [],
      msg: 'Invalid week has been selected.',
      who: 'Alice'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v428], secs: v430, time: v429, didSend: v143, from: v427 } = txn4;
    ;
    const v431 = stdlib.addressEq(v316, v427);
    stdlib.assert(v431, {
      at: './index.rsh:96:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    stdlib.protect(ctc4, await interact.acceptFee(v428), {
      at: './index.rsh:102:25:application',
      fs: ['at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:19:function exp)'],
      msg: 'acceptFee',
      who: 'Alice'
      });
    
    const v438 = stdlib.protect(ctc3, await interact.providePasscode(v419), {
      at: './index.rsh:113:63:application',
      fs: ['at ./index.rsh:112:16:application call to [unknown function] (defined at: ./index.rsh:112:20:function exp)'],
      msg: 'providePasscode',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v283, v284, v316, v317, v318, v319, v320, v428, v438],
      evt_cnt: 1,
      funcNum: 5,
      lct: v429,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:116:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v440], secs: v442, time: v441, didSend: v159, from: v439 } = txn5;
        
        ;
        const v443 = stdlib.addressEq(v283, v439);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc1, ctc5, ctc2, ctc2, ctc2, ctc2, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v440], secs: v442, time: v441, didSend: v159, from: v439 } = txn5;
    ;
    const v443 = stdlib.addressEq(v283, v439);
    stdlib.assert(v443, {
      at: './index.rsh:116:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v456], secs: v458, time: v457, didSend: v177, from: v455 } = txn6;
    ;
    const v459 = stdlib.addressEq(v316, v455);
    stdlib.assert(v459, {
      at: './index.rsh:138:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v283, v284, v316, v317, v318, v319, v320, v428],
      evt_cnt: 0,
      funcNum: 7,
      lct: v457,
      onlyIf: true,
      out_tys: [],
      pay: [v428, []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v462, time: v461, didSend: v184, from: v460 } = txn7;
        
        sim_r.txns.push({
          amt: v428,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        const v465 = stdlib.addressEq(v283, v460);
        ;
        sim_r.txns.push({
          amt: v428,
          kind: 'from',
          to: v316,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc1, ctc5, ctc2, ctc2, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v462, time: v461, didSend: v184, from: v460 } = txn7;
    ;
    const v465 = stdlib.addressEq(v283, v460);
    stdlib.assert(v465, {
      at: './index.rsh:143:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v477], secs: v479, time: v478, didSend: v201, from: v476 } = txn8;
    ;
    const v480 = stdlib.addressEq(v316, v476);
    stdlib.assert(v480, {
      at: './index.rsh:193:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v481 = v477[stdlib.checkedBigNumberify('./index.rsh:196:47:array ref', stdlib.UInt_max, '0')];
    const v483 = v477[stdlib.checkedBigNumberify('./index.rsh:197:24:array ref', stdlib.UInt_max, '1')];
    const v485 = v481 ? v483 : false;
    const v486 = v477[stdlib.checkedBigNumberify('./index.rsh:197:56:array ref', stdlib.UInt_max, '2')];
    const v488 = v485 ? v486 : false;
    const v489 = v284[stdlib.checkedBigNumberify('./index.rsh:198:24:array ref', stdlib.UInt_max, '2')];
    const v490 = v489 ? false : true;
    const v491 = v488 ? v490 : false;
    const cv386 = v491;
    const cv387 = v478;
    
    v386 = cv386;
    v387 = cv387;
    
    continue;
    
    
    
    
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    nftId1: ctc2,
    nftId2: ctc2,
    nftId3: ctc2,
    nftId4: ctc2
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v284], secs: v286, time: v285, didSend: v30, from: v283 } = txn1;
  ;
  const v289 = stdlib.protect(ctc3, await interact.createNFTs(), {
    at: './index.rsh:55:73:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'createNFTs',
    who: 'Creator'
    });
  const v290 = v289.nftId1;
  const v291 = v289.nftId2;
  const v292 = v289.nftId3;
  const v293 = v289.nftId4;
  const v298 = stdlib.tokenEq(v290, v291);
  const v300 = stdlib.tokenEq(v290, v292);
  const v302 = stdlib.tokenEq(v290, v293);
  const v303 = v302 ? false : true;
  const v304 = v300 ? false : v303;
  const v305 = v298 ? false : v304;
  const v306 = stdlib.tokenEq(v291, v292);
  const v308 = stdlib.tokenEq(v291, v293);
  const v309 = v308 ? false : true;
  const v310 = v306 ? false : v309;
  const v311 = stdlib.tokenEq(v292, v293);
  const v312 = v311 ? false : true;
  const v313 = v310 ? v312 : false;
  const v314 = v305 ? v313 : false;
  stdlib.assert(v314, {
    at: './index.rsh:56:10:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'Invalid tokens.',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v283, v284, v290, v291, v292, v293],
    evt_cnt: 4,
    funcNum: 1,
    lct: v285,
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v317, v318, v319, v320], secs: v322, time: v321, didSend: v85, from: v316 } = txn2;
      
      const v323 = stdlib.tokenEq(v317, v318);
      const v325 = stdlib.tokenEq(v317, v319);
      const v327 = stdlib.tokenEq(v317, v320);
      const v328 = v327 ? false : true;
      const v329 = v325 ? false : v328;
      const v330 = v323 ? false : v329;
      const v331 = stdlib.tokenEq(v318, v319);
      const v333 = stdlib.tokenEq(v318, v320);
      const v334 = v333 ? false : true;
      const v335 = v331 ? false : v334;
      const v336 = stdlib.tokenEq(v319, v320);
      const v337 = v336 ? false : true;
      const v338 = v335 ? v337 : false;
      const v339 = v330 ? v338 : false;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v317
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v318
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v319
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v320
        });
      ;
      const v386 = false;
      const v387 = v321;
      
      if (await (async () => {
        const v413 = v386 ? false : true;
        
        return v413;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v320
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v319
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v318
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v317
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v317, v318, v319, v320], secs: v322, time: v321, didSend: v85, from: v316 } = txn2;
  const v323 = stdlib.tokenEq(v317, v318);
  const v325 = stdlib.tokenEq(v317, v319);
  const v327 = stdlib.tokenEq(v317, v320);
  const v328 = v327 ? false : true;
  const v329 = v325 ? false : v328;
  const v330 = v323 ? false : v329;
  const v331 = stdlib.tokenEq(v318, v319);
  const v333 = stdlib.tokenEq(v318, v320);
  const v334 = v333 ? false : true;
  const v335 = v331 ? false : v334;
  const v336 = stdlib.tokenEq(v319, v320);
  const v337 = v336 ? false : true;
  const v338 = v335 ? v337 : false;
  const v339 = v330 ? v338 : false;
  stdlib.assert(v339, {
    at: './index.rsh:62:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  ;
  ;
  ;
  ;
  ;
  let v386 = false;
  let v387 = v321;
  
  while (await (async () => {
    const v413 = v386 ? false : true;
    
    return v413;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v419], secs: v421, time: v420, didSend: v132, from: v418 } = txn3;
    ;
    const v422 = stdlib.addressEq(v283, v418);
    stdlib.assert(v422, {
      at: './index.rsh:86:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v423 = stdlib.lt(v419, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v423, {
      at: './index.rsh:87:10:application',
      fs: [],
      msg: 'Invalid week has been selected.',
      who: 'Creator'
      });
    const v426 = stdlib.protect(ctc4, await interact.setFee(), {
      at: './index.rsh:93:55:application',
      fs: ['at ./index.rsh:92:17:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)'],
      msg: 'setFee',
      who: 'Creator'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v283, v284, v316, v317, v318, v319, v320, v426],
      evt_cnt: 1,
      funcNum: 4,
      lct: v420,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:96:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v428], secs: v430, time: v429, didSend: v143, from: v427 } = txn4;
        
        ;
        const v431 = stdlib.addressEq(v316, v427);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc1, ctc6, ctc2, ctc2, ctc2, ctc2, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v428], secs: v430, time: v429, didSend: v143, from: v427 } = txn4;
    ;
    const v431 = stdlib.addressEq(v316, v427);
    stdlib.assert(v431, {
      at: './index.rsh:96:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    stdlib.protect(ctc5, await interact.requestPasscode(v419), {
      at: './index.rsh:107:31:application',
      fs: ['at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)'],
      msg: 'requestPasscode',
      who: 'Creator'
      });
    
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v440], secs: v442, time: v441, didSend: v159, from: v439 } = txn5;
    ;
    const v443 = stdlib.addressEq(v283, v439);
    stdlib.assert(v443, {
      at: './index.rsh:116:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000')];
    const v446 = v444[v419];
    const v447 = stdlib.eq(v440, v446);
    const v451 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(false, false), {
      at: './index.rsh:135:72:application',
      fs: ['at ./index.rsh:134:17:application call to [unknown function] (defined at: ./index.rsh:134:21:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Creator'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v283, v284, v316, v317, v318, v319, v320, v428, v451],
      evt_cnt: 1,
      funcNum: 6,
      lct: v441,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:138:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v456], secs: v458, time: v457, didSend: v177, from: v455 } = txn6;
        
        ;
        const v459 = stdlib.addressEq(v316, v455);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc1, ctc6, ctc2, ctc2, ctc2, ctc2, ctc4, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v456], secs: v458, time: v457, didSend: v177, from: v455 } = txn6;
    ;
    const v459 = stdlib.addressEq(v316, v455);
    stdlib.assert(v459, {
      at: './index.rsh:138:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v462, time: v461, didSend: v184, from: v460 } = txn7;
    ;
    const v465 = stdlib.addressEq(v283, v460);
    stdlib.assert(v465, {
      at: './index.rsh:143:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    ;
    stdlib.protect(ctc5, await interact.updateWeekOutcomeArray(v419, v447), {
      at: './index.rsh:187:38:application',
      fs: ['at ./index.rsh:185:17:application call to [unknown function] (defined at: ./index.rsh:185:21:function exp)'],
      msg: 'updateWeekOutcomeArray',
      who: 'Creator'
      });
    const v472 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(false, true), {
      at: './index.rsh:189:72:application',
      fs: ['at ./index.rsh:185:17:application call to [unknown function] (defined at: ./index.rsh:185:21:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Creator'
      });
    
    const txn8 = await (ctc.sendrecv({
      args: [v283, v284, v316, v317, v318, v319, v320, v472],
      evt_cnt: 1,
      funcNum: 8,
      lct: v461,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:193:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v477], secs: v479, time: v478, didSend: v201, from: v476 } = txn8;
        
        ;
        const v480 = stdlib.addressEq(v316, v476);
        ;
        const v481 = v477[stdlib.checkedBigNumberify('./index.rsh:196:47:array ref', stdlib.UInt_max, '0')];
        const v483 = v477[stdlib.checkedBigNumberify('./index.rsh:197:24:array ref', stdlib.UInt_max, '1')];
        const v485 = v481 ? v483 : false;
        const v486 = v477[stdlib.checkedBigNumberify('./index.rsh:197:56:array ref', stdlib.UInt_max, '2')];
        const v488 = v485 ? v486 : false;
        const v489 = v284[stdlib.checkedBigNumberify('./index.rsh:198:24:array ref', stdlib.UInt_max, '2')];
        const v490 = v489 ? false : true;
        const v491 = v488 ? v490 : false;
        const cv386 = v491;
        const cv387 = v478;
        
        await (async () => {
          const v386 = cv386;
          const v387 = cv387;
          
          if (await (async () => {
            const v413 = v386 ? false : true;
            
            return v413;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v320
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v319
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v318
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v317
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc1, ctc6, ctc2, ctc2, ctc2, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v477], secs: v479, time: v478, didSend: v201, from: v476 } = txn8;
    ;
    const v480 = stdlib.addressEq(v316, v476);
    stdlib.assert(v480, {
      at: './index.rsh:193:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v481 = v477[stdlib.checkedBigNumberify('./index.rsh:196:47:array ref', stdlib.UInt_max, '0')];
    const v483 = v477[stdlib.checkedBigNumberify('./index.rsh:197:24:array ref', stdlib.UInt_max, '1')];
    const v485 = v481 ? v483 : false;
    const v486 = v477[stdlib.checkedBigNumberify('./index.rsh:197:56:array ref', stdlib.UInt_max, '2')];
    const v488 = v485 ? v486 : false;
    const v489 = v284[stdlib.checkedBigNumberify('./index.rsh:198:24:array ref', stdlib.UInt_max, '2')];
    const v490 = v489 ? false : true;
    const v491 = v488 ? v490 : false;
    const cv386 = v491;
    const cv387 = v478;
    
    v386 = cv386;
    v387 = cv387;
    
    continue;
    
    
    
    
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAQAAEECENLU1ugjQYFB2MGCQIDJgIBAAAiNQAxGEEFfClkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khCQxAAiNJIQoMQAEGSSUMQABxJRJEIQ00ARJENARJIhJMNAISEUQoZEk1A0lXIAM1/1cjIDX+STUFNf2ABGwlW580/VCwNP4xABJENANXACA0/zT+NAMhBFs0AyEFWzQDIQZbNAMhB1s0/SJVNP0jVRA0/SEOVRA0/yEOVRQQMgZCA+BIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/VyADNf5XIyA1/SEEWzX8IQVbNfshBls1+iEHWzX5IQtbNfiABOIbs6mwNPiIBIs0/zEAEkSxIrIBNPiyCCOyEDT9sgezNP80/lA0/VA0/BZQNPsWUDT6FlA0+RZQKEsBVwBjZ0ghDTUBMgY1AkIEDUkhDAxAAIZIIQo0ARJENARJIhJMNAISEUQoZEk1A0lKSkpXACA1/1cgAzX+VyMgNf0hBFs1/CEFWzX7IQZbNfohB1s1+SELWzX4STUFNfeABJMvBFk091CwNP0xABJENP80/lA0/VA0/BZQNPsWUDT6FlA0+RZQNPgWUChLAVcAa2dIJTUBMgY1AkIDgEghDDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/VyADNf5XIyA1/SEEWzX8IQVbNfshBls1+iEHWzX5IQtbNfhJNQUXNfeABIGqms809xZQsDT/MQASRDT/NP5QNP1QNPwWUDT7FlA0+hZQNPkWUDT4FlAoSwFXAGtnSCEKNQEyBjUCQgL3SSEPDEABD0kkDEAAhEghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/VyADNf5XIyA1/SEEWzX8IQVbNfshBls1+iEHWzX5STUFFzX4gAT5i694NPgWULA0/TEAEkQ0/zT+UDT9UDT8FlA0+xZQNPoWUDT5FlA0+BZQKEsBVwBrZ0ghDDUBMgY1AkICZkgkNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf9XIAM1/lcjIDX9IQRbNfwhBVs1+yEGWzX6IQdbNflJNQUXNfiABNQMbNY0+BZQsDT/MQASRDT4IQ8MRDT/NP5QNP1QNPwWUDT7FlA0+hZQNPkWUChLAVcAY2dIIQk1ATIGNQJCAeFJIwxAAOMjEkQjNAESRDQESSISTDQCEhFEKGQ1A0k1BUlKIls1/yVbNf6BEFs1/YEYWzX8gASoGDyoNP8WUDT+FlA0/RZQNPwWULA0/zT+EzT/NP0TNP80/BMQEDT+NP0TNP40/BMQNP00/BMQEEQhCIgBqrEisgEishIkshAyCrIUNP+yEbMhCIgBkrEisgEishIkshAyCrIUNP6yEbMhCIgBerEisgEishIkshAyCrIUNP2yEbMhCIgBYrEisgEishIkshAyCrIUNPyyEbM0A1cAIDQDVyADMQA0/zT+NP00/CIyBkIAPEgiNAESRDQESSISTDQCEhFESTUFNf+ABHNPeGo0/1CwIQiIARAxADT/UChLAVcAI2dIIzUBMgY1AkIAvDX/Nf41/TX8Nfs1+jX5Nfg19zT+QQBfsSKyASKyEiSyEDIJshUyCrIUNP2yEbOxIrIBIrISJLIQMgmyFTIKshQ0/LIRs7EisgEishIkshAyCbIVMgqyFDT7shGzsSKyASKyEiSyEDIJshUyCrIUNPqyEbNCACo09zT4UDT5UDT6FlA0+xZQNPwWUDT9FlAoSwFXAGNnSCQ1ATIGNQJCABwxGSEJEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 107,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v284",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v284",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v317",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v318",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v319",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v320",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v428",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v456",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v477",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v317",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v318",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v319",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v320",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v428",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v456",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v477",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001dd138038062001dd183398101604081905262000026916200027d565b60008055436003556040517fd9fe77929a57a435d88ce369dbd837cb668f91aa71ce26c08b9411d101557bdc9062000062903390849062000359565b60405180910390a16200007834156007620000da565b6200008262000104565b338152602080830151518183015260016000819055439055604051620000ab9183910162000390565b60405160208183030381529060405260029080519060200190620000d19291906200012e565b505050620003fa565b81620001005760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806040016040528060006001600160a01b0316815260200162000129620001bd565b905290565b8280546200013c90620003bd565b90600052602060002090601f016020900481019282620001605760008555620001ab565b82601f106200017b57805160ff1916838001178555620001ab565b82800160010185558215620001ab579182015b82811115620001ab5782518255916020019190600101906200018e565b50620001b9929150620001db565b5090565b60405180606001604052806003906020820280368337509192915050565b5b80821115620001b95760008155600101620001dc565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200022d576200022d620001f2565b60405290565b604051602081016001600160401b03811182821017156200022d576200022d620001f2565b604051606081016001600160401b03811182821017156200022d576200022d620001f2565b600081830360808112156200029157600080fd5b6200029b62000208565b8351815260206060601f1984011215620002b457600080fd5b620002be62000233565b925085603f860112620002d057600080fd5b620002da62000258565b806080870188811115620002ed57600080fd5b8388015b818110156200031a57805180151581146200030c5760008081fd5b8452928401928401620002f1565b50508452508101919091529392505050565b8060005b600381101562000353578151151584526020938401939091019060010162000330565b50505050565b600060a08201905060018060a01b0384168252825160208301526020830151620003886040840182516200032c565b509392505050565b81516001600160a01b031681526020808301516080830191620003b6908401826200032c565b5092915050565b600181811c90821680620003d257607f821691505b60208210811415620003f457634e487b7160e01b600052602260045260246000fd5b50919050565b6119c7806200040a6000396000f3fe60806040526004361061008f5760003560e01c8063a209ad4e11610056578063a209ad4e1461010a578063ab53f2c61461011d578063bb89832e14610140578063bf2c5b2414610153578063f4cedab01461016657005b80631e93b0f114610098578063552d7b8e146100bc5780636bf19139146100cf57806372566bd2146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611366565b610179565b6100966100dd36600461139b565b610351565b6100966100f03660046113b7565b610574565b34801561010157600080fd5b506001546100a9565b610096610118366004611366565b6108ec565b34801561012957600080fd5b50610132610a9c565b6040516100b39291906113c9565b61009661014e36600461139b565b610b39565b610096610161366004611366565b610cea565b610096610174366004611366565b610ed5565b610189600660005414601761108b565b6101a38135158061019c57506001548235145b601861108b565b6000808055600280546101b590611426565b80601f01602080910402602001604051908101604052809291908181526020018280546101e190611426565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611545565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516102799291906115e6565b60405180910390a161028d3415601561108b565b80516102a5906001600160a01b03163314601661108b565b6102ad611181565b81516001600160a01b0390811682526020808401518184015260408085015183168185015260608086015184169085015260808086015184169085015260a08086015184169085015260c0808601519093169284019290925260e08085015190840152600760005543600155905161032791839101611632565b6040516020818303038152906040526002908051906020019061034b9291906111d5565b50505050565b610361600960005414602361108b565b61037b8135158061037457506001548235145b602461108b565b60008080556002805461038d90611426565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990611426565b80156104065780601f106103db57610100808354040283529160200191610406565b820191906000526020600020905b8154815290600101906020018083116103e957829003601f168201915b505050505080602001905181019061041e91906116bf565b90507f8f0cb0b348b2cbded5c7f478d47a42dcc9817420b6f5ea0f3af3b40970999cc933836040516104519291906117b7565b60405180910390a16104653415602161108b565b6040810151610480906001600160a01b03163314602261108b565b610488611259565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551908516910152608080860151855190851691015260a080860151855190851691015260c080860151855194169301929092526104fb9185019085016117d4565b610506576000610516565b61051660608401604085016117d4565b610521576000610531565b61053160808401606085016117d4565b61053c576000610553565b602082015160400151610550576001610553565b60005b6020808301805192151590925290514391015261056f816110b4565b505050565b610584600160005414600a61108b565b61059e8135158061059757506001548235145b600b61108b565b6000808055600280546105b090611426565b80601f01602080910402602001604051908101604052809291908181526020018280546105dc90611426565b80156106295780601f106105fe57610100808354040283529160200191610629565b820191906000526020600020905b81548152906001019060200180831161060c57829003601f168201915b505050505080602001905181019061064191906117f1565b90507f21ba241685389169de81524ad926ee32aec14bd66876c5f7bfcf2f9c06a0274c338360405161067492919061184f565b60405180910390a161081261068f60608401604085016118cf565b6001600160a01b03166106a860408501602086016118cf565b6001600160a01b031614610732576106c660808401606085016118cf565b6001600160a01b03166106df60408501602086016118cf565b6001600160a01b03161461072b576106fd60a08401608085016118cf565b6001600160a01b031661071660408501602086016118cf565b6001600160a01b03161461072b576001610735565b6000610735565b60005b61074057600061080b565b61075060808401606085016118cf565b6001600160a01b031661076960608501604086016118cf565b6001600160a01b0316146107bc5761078760a08401608085016118cf565b6001600160a01b03166107a060608501604086016118cf565b6001600160a01b0316146107b55760016107bf565b60006107bf565b60005b6107ca57600061080b565b6107da60a08401608085016118cf565b6001600160a01b03166107f360808501606086016118cf565b6001600160a01b03161461080857600161080b565b60005b600861108b565b61081e3415600961108b565b610826611259565b815181516001600160a01b039091169052602080830151825182015281513360409182015261085a919085019085016118cf565b81516001600160a01b0390911660609182015261087c908401604085016118cf565b81516001600160a01b0390911660809182015261089e908401606085016118cf565b81516001600160a01b0390911660a0918201526108c0908401608085016118cf565b81516001600160a01b0390911660c0909101526020808201805160009052514391015261056f816110b4565b6108fc600560005414601361108b565b6109168135158061090f57506001548235145b601461108b565b60008080556002805461092890611426565b80601f016020809104026020016040519081016040528092919081815260200182805461095490611426565b80156109a15780601f10610976576101008083540402835291602001916109a1565b820191906000526020600020905b81548152906001019060200180831161098457829003601f168201915b50505050508060200190518101906109b991906116bf565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033836040516109ec9291906115e6565b60405180910390a1610a003415601161108b565b6040810151610a1b906001600160a01b03163314601261108b565b610a23611181565b81516001600160a01b0390811682526020808401518184015260408085015183168185015260608086015184169085015260808086015184169085015260a08086015184169085015260c080860151909316928401929092528481013560e0840152600660005543600155905161032791839101611632565b600060606000546002808054610ab190611426565b80601f0160208091040260200160405190810160405280929190818152602001828054610add90611426565b8015610b2a5780601f10610aff57610100808354040283529160200191610b2a565b820191906000526020600020905b815481529060010190602001808311610b0d57829003601f168201915b50505050509050915091509091565b610b49600760005414601b61108b565b610b6381351580610b5c57506001548235145b601c61108b565b600080805560028054610b7590611426565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba190611426565b8015610bee5780601f10610bc357610100808354040283529160200191610bee565b820191906000526020600020905b815481529060010190602001808311610bd157829003601f168201915b5050505050806020019051810190610c069190611545565b90507f80f732f40ee8469e0ebef647de029ee60d7d701868f65d84cb39077c03c1ec923383604051610c399291906117b7565b60405180910390a1610c4d3415601961108b565b6040810151610c68906001600160a01b03163314601a61108b565b610c70611181565b81516001600160a01b0390811682526020808401518184015260408085015183168185015260608086015184169085015260808086015184169085015260a08086015184169085015260c0808601519093169284019290925260e08085015190840152600860005543600155905161032791839101611632565b610cfa600860005414601f61108b565b610d1481351580610d0d57506001548235145b602061108b565b600080805560028054610d2690611426565b80601f0160208091040260200160405190810160405280929190818152602001828054610d5290611426565b8015610d9f5780601f10610d7457610100808354040283529160200191610d9f565b820191906000526020600020905b815481529060010190602001808311610d8257829003601f168201915b5050505050806020019051810190610db79190611545565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610dea9291906118ec565b60405180910390a1610e038160e001513414601d61108b565b8051610e1b906001600160a01b03163314601e61108b565b80604001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f19350505050158015610e5c573d6000803e3d6000fd5b50610e65611295565b81516001600160a01b0390811682526020808401518184015260408085015183168185015260608086015184169085015260808086015184169085015260a08086015184169085015260c08086015190931692840192909252600960005543600155905161032791839101611924565b610ee5600460005414600f61108b565b610eff81351580610ef857506001548235145b601061108b565b600080805560028054610f1190611426565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3d90611426565b8015610f8a5780601f10610f5f57610100808354040283529160200191610f8a565b820191906000526020600020905b815481529060010190602001808311610f6d57829003601f168201915b5050505050806020019051810190610fa291906116bf565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610fd59291906115e6565b60405180910390a1610fe93415600c61108b565b8051611001906001600160a01b03163314600d61108b565b6110136003602084013510600e61108b565b61101b611295565b81516001600160a01b0390811682526020808401518184015260408085015183168185015260608086015184169085015260808086015184169085015260a08086015184169085015260c08086015190931692840192909252600560005543600155905161032791839101611924565b816110b05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156110d857600080805560018190556110d5906002906112e1565b50565b6110e0611295565b8151516001600160a01b039081168252825160209081015181840152835160409081015183168185015284516060908101518416908501528451608090810151841690850152845160a090810151841690850152845160c09081015190931692840192909252600460005543600155905161115d91839101611924565b6040516020818303038152906040526002908051906020019061056f9291906111d5565b60405180610100016040528060006001600160a01b031681526020016111a561131b565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b8280546111e190611426565b90600052602060002090601f0160209004810192826112035760008555611249565b82601f1061121c57805160ff1916838001178555611249565b82800160010185558215611249579182015b8281111561124957825182559160200191906001019061122e565b50611255929150611339565b5090565b604051806040016040528061126c611295565b81526020016112906040518060400160405280600015158152602001600081525090565b905290565b6040518060e0016040528060006001600160a01b031681526020016112b861131b565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b5080546112ed90611426565b6000825580601f106112fd575050565b601f0160209004906000526020600020908101906110d59190611339565b60405180606001604052806003906020820280368337509192915050565b5b80821115611255576000815560010161133a565b60006040828403121561136057600080fd5b50919050565b60006040828403121561137857600080fd5b611382838361134e565b9392505050565b60006080828403121561136057600080fd5b6000608082840312156113ad57600080fd5b6113828383611389565b600060a0828403121561136057600080fd5b82815260006020604081840152835180604085015260005b818110156113fd578581018301518582016060015282016113e1565b8181111561140f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061143a57607f821691505b6020821081141561136057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156114955761149561145b565b60405290565b6001600160a01b03811681146110d557600080fd5b80516114bb8161149b565b919050565b80151581146110d557600080fd5b600082601f8301126114df57600080fd5b6040516060810181811067ffffffffffffffff821117156115025761150261145b565b60405280606084018581111561151757600080fd5b845b8181101561153a57805161152c816114c0565b835260209283019201611519565b509195945050505050565b6000610140828403121561155857600080fd5b611560611471565b611569836114b0565b815261157884602085016114ce565b6020820152611589608084016114b0565b604082015261159a60a084016114b0565b60608201526115ab60c084016114b0565b60808201526115bc60e084016114b0565b60a08201526115ce61010084016114b0565b60c0820152610120929092015160e083015250919050565b6001600160a01b038316815260608101611382602083018480358252602090810135910152565b8060005b600381101561034b5781511515845260209384019390910190600101611611565b81516001600160a01b0390811682526020808401516101408401929161165a9085018261160d565b508060408501511660808401528060608501511660a08401528060808501511660c08401525060a083015161169a60e08401826001600160a01b03169052565b5060c08301516001600160a01b031661010083015260e0909201516101209091015290565b600061012082840312156116d257600080fd5b60405160e0810181811067ffffffffffffffff821117156116f5576116f561145b565b60405282516117038161149b565b815261171284602085016114ce565b602082015260808301516117258161149b565b604082015260a08301516117388161149b565b606082015261174960c084016114b0565b608082015261175a60e084016114b0565b60a082015261176c61010084016114b0565b60c08201529392505050565b80358252602080830181830160005b60038110156117af57813561179b816114c0565b151583529183019190830190600101611787565b505050505050565b6001600160a01b038316815260a081016113826020830184611778565b6000602082840312156117e657600080fd5b8135611382816114c0565b60006080828403121561180357600080fd5b6040516040810181811067ffffffffffffffff821117156118265761182661145b565b60405282516118348161149b565b815261184384602085016114ce565b60208201529392505050565b6001600160a01b038381168252823560208084019190915260c0830191908401356118798161149b565b81811660408501525060408401356118908161149b565b81811660608501525060608401356118a78161149b565b81811660808501525060808401356118be8161149b565b81811660a085015250509392505050565b6000602082840312156118e157600080fd5b81356113828161149b565b6001600160a01b038316815281356020808301919091526060820190830135611914816114c0565b8015156040840152509392505050565b81516001600160a01b0390811682526020808401516101208401929161194c9085018261160d565b508060408501511660808401528060608501511660a08401528060808501511660c08401528060a08501511660e08401528060c085015116610100840152509291505056fea26469706673582212207708d67eb221d7ebcfb2f48480a05479034f68b9b0fffd64377efa950fd4e84964736f6c634300080c0033`,
  BytecodeLen: 7633,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:227:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:72:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:89:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:98:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:118:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:140:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:181:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Creator": Creator
  };
export const _APIs = {
  };
