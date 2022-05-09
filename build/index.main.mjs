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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc4 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc3],
      5: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc3],
      6: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4],
      7: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4],
      8: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4],
      9: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc3]
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v307, v308, v309, v310], secs: v312, time: v311, didSend: v73, from: v306 } = txn1;
  const v313 = stdlib.tokenEq(v307, v308);
  const v315 = stdlib.tokenEq(v307, v309);
  const v317 = stdlib.tokenEq(v307, v310);
  const v318 = v317 ? false : true;
  const v319 = v315 ? false : v318;
  const v320 = v313 ? false : v319;
  const v321 = stdlib.tokenEq(v308, v309);
  const v323 = stdlib.tokenEq(v308, v310);
  const v324 = v323 ? false : true;
  const v325 = v321 ? false : v324;
  const v326 = stdlib.tokenEq(v309, v310);
  const v327 = v326 ? false : true;
  const v328 = v325 ? v327 : false;
  const v329 = v320 ? v328 : false;
  stdlib.assert(v329, {
    at: './index.rsh:53:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Alice'
    });
  ;
  ;
  ;
  ;
  ;
  const v378 = stdlib.protect(ctc2, await interact.seeWeekOutcomeArray(true, true), {
    at: './index.rsh:62:70:application',
    fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v306, v307, v308, v309, v310, v378],
    evt_cnt: 1,
    funcNum: 1,
    lct: v311,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v383], secs: v385, time: v384, didSend: v103, from: v382 } = txn2;
      
      ;
      const v386 = false;
      const v387 = v384;
      
      if (await (async () => {
        const v413 = v386 ? false : true;
        
        return v413;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v310
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v309
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v308
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v307
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
    tys: [ctc5, ctc0, ctc0, ctc0, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v383], secs: v385, time: v384, didSend: v103, from: v382 } = txn2;
  ;
  let v386 = false;
  let v387 = v384;
  
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
      args: [v306, v307, v308, v309, v310, v382, v383, v416],
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
        const v422 = stdlib.addressEq(v382, v418);
        ;
        const v423 = stdlib.lt(v419, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '3'));
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0, ctc0, ctc5, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v419], secs: v421, time: v420, didSend: v132, from: v418 } = txn3;
    ;
    const v422 = stdlib.addressEq(v382, v418);
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
    const v431 = stdlib.addressEq(v306, v427);
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
      args: [v306, v307, v308, v309, v310, v382, v383, v428, v438],
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
        const v443 = stdlib.addressEq(v382, v439);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0, ctc0, ctc5, ctc2, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v440], secs: v442, time: v441, didSend: v159, from: v439 } = txn5;
    ;
    const v443 = stdlib.addressEq(v382, v439);
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
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v456], secs: v458, time: v457, didSend: v177, from: v455 } = txn6;
    ;
    const v459 = stdlib.addressEq(v306, v455);
    stdlib.assert(v459, {
      at: './index.rsh:138:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v306, v307, v308, v309, v310, v382, v383, v428],
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
        const v465 = stdlib.addressEq(v382, v460);
        ;
        sim_r.txns.push({
          amt: v428,
          kind: 'from',
          to: v306,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0, ctc0, ctc5, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v462, time: v461, didSend: v184, from: v460 } = txn7;
    ;
    const v465 = stdlib.addressEq(v382, v460);
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
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v477], secs: v479, time: v478, didSend: v201, from: v476 } = txn8;
    ;
    const v480 = stdlib.addressEq(v306, v476);
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
    const v489 = v383[stdlib.checkedBigNumberify('./index.rsh:198:24:array ref', stdlib.UInt_max, '2')];
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Object({
    nftId1: ctc0,
    nftId2: ctc0,
    nftId3: ctc0,
    nftId4: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v279 = stdlib.protect(ctc1, await interact.createNFTs(), {
    at: './index.rsh:46:73:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'createNFTs',
    who: 'Creator'
    });
  const v280 = v279.nftId1;
  const v281 = v279.nftId2;
  const v282 = v279.nftId3;
  const v283 = v279.nftId4;
  const v288 = stdlib.tokenEq(v280, v281);
  const v290 = stdlib.tokenEq(v280, v282);
  const v292 = stdlib.tokenEq(v280, v283);
  const v293 = v292 ? false : true;
  const v294 = v290 ? false : v293;
  const v295 = v288 ? false : v294;
  const v296 = stdlib.tokenEq(v281, v282);
  const v298 = stdlib.tokenEq(v281, v283);
  const v299 = v298 ? false : true;
  const v300 = v296 ? false : v299;
  const v301 = stdlib.tokenEq(v282, v283);
  const v302 = v301 ? false : true;
  const v303 = v300 ? v302 : false;
  const v304 = v295 ? v303 : false;
  stdlib.assert(v304, {
    at: './index.rsh:47:10:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'Invalid tokens.',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v281, v282, v283],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:53:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v307, v308, v309, v310], secs: v312, time: v311, didSend: v73, from: v306 } = txn1;
      
      const v313 = stdlib.tokenEq(v307, v308);
      const v315 = stdlib.tokenEq(v307, v309);
      const v317 = stdlib.tokenEq(v307, v310);
      const v318 = v317 ? false : true;
      const v319 = v315 ? false : v318;
      const v320 = v313 ? false : v319;
      const v321 = stdlib.tokenEq(v308, v309);
      const v323 = stdlib.tokenEq(v308, v310);
      const v324 = v323 ? false : true;
      const v325 = v321 ? false : v324;
      const v326 = stdlib.tokenEq(v309, v310);
      const v327 = v326 ? false : true;
      const v328 = v325 ? v327 : false;
      const v329 = v320 ? v328 : false;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v307
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v308
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v309
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v310
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v307, v308, v309, v310], secs: v312, time: v311, didSend: v73, from: v306 } = txn1;
  const v313 = stdlib.tokenEq(v307, v308);
  const v315 = stdlib.tokenEq(v307, v309);
  const v317 = stdlib.tokenEq(v307, v310);
  const v318 = v317 ? false : true;
  const v319 = v315 ? false : v318;
  const v320 = v313 ? false : v319;
  const v321 = stdlib.tokenEq(v308, v309);
  const v323 = stdlib.tokenEq(v308, v310);
  const v324 = v323 ? false : true;
  const v325 = v321 ? false : v324;
  const v326 = stdlib.tokenEq(v309, v310);
  const v327 = v326 ? false : true;
  const v328 = v325 ? v327 : false;
  const v329 = v320 ? v328 : false;
  stdlib.assert(v329, {
    at: './index.rsh:53:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  ;
  ;
  ;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v383], secs: v385, time: v384, didSend: v103, from: v382 } = txn2;
  ;
  let v386 = false;
  let v387 = v384;
  
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
    const v422 = stdlib.addressEq(v382, v418);
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
      args: [v306, v307, v308, v309, v310, v382, v383, v426],
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
        const v431 = stdlib.addressEq(v306, v427);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc0, ctc0, ctc0, ctc0, ctc6, ctc3, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v428], secs: v430, time: v429, didSend: v143, from: v427 } = txn4;
    ;
    const v431 = stdlib.addressEq(v306, v427);
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
    const v443 = stdlib.addressEq(v382, v439);
    stdlib.assert(v443, {
      at: './index.rsh:116:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000')];
    const v446 = v444[v419];
    const v447 = stdlib.eq(v440, v446);
    const v451 = stdlib.protect(ctc3, await interact.seeWeekOutcomeArray(false, false), {
      at: './index.rsh:135:72:application',
      fs: ['at ./index.rsh:134:17:application call to [unknown function] (defined at: ./index.rsh:134:21:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Creator'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v306, v307, v308, v309, v310, v382, v383, v428, v451],
      evt_cnt: 1,
      funcNum: 6,
      lct: v441,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:138:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v456], secs: v458, time: v457, didSend: v177, from: v455 } = txn6;
        
        ;
        const v459 = stdlib.addressEq(v306, v455);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc0, ctc0, ctc0, ctc0, ctc6, ctc3, ctc4, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v456], secs: v458, time: v457, didSend: v177, from: v455 } = txn6;
    ;
    const v459 = stdlib.addressEq(v306, v455);
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
    const v465 = stdlib.addressEq(v382, v460);
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
    const v472 = stdlib.protect(ctc3, await interact.seeWeekOutcomeArray(false, true), {
      at: './index.rsh:189:72:application',
      fs: ['at ./index.rsh:185:17:application call to [unknown function] (defined at: ./index.rsh:185:21:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Creator'
      });
    
    const txn8 = await (ctc.sendrecv({
      args: [v306, v307, v308, v309, v310, v382, v383, v472],
      evt_cnt: 1,
      funcNum: 8,
      lct: v461,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:193:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v477], secs: v479, time: v478, didSend: v201, from: v476 } = txn8;
        
        ;
        const v480 = stdlib.addressEq(v306, v476);
        ;
        const v481 = v477[stdlib.checkedBigNumberify('./index.rsh:196:47:array ref', stdlib.UInt_max, '0')];
        const v483 = v477[stdlib.checkedBigNumberify('./index.rsh:197:24:array ref', stdlib.UInt_max, '1')];
        const v485 = v481 ? v483 : false;
        const v486 = v477[stdlib.checkedBigNumberify('./index.rsh:197:56:array ref', stdlib.UInt_max, '2')];
        const v488 = v485 ? v486 : false;
        const v489 = v383[stdlib.checkedBigNumberify('./index.rsh:198:24:array ref', stdlib.UInt_max, '2')];
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
              tok: v310
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v309
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v308
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v307
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
      tys: [ctc6, ctc0, ctc0, ctc0, ctc0, ctc6, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v477], secs: v479, time: v478, didSend: v201, from: v476 } = txn8;
    ;
    const v480 = stdlib.addressEq(v306, v476);
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
    const v489 = v383[stdlib.checkedBigNumberify('./index.rsh:198:24:array ref', stdlib.UInt_max, '2')];
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
  appApproval: `BiAQAAEEICgwOAigjQYFB2MGCQIDJgIBAAAiNQAxGEEFkSlkSSJbNQEhB1s1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQkMQAIjSSEKDEABB0khBwxAAHEhBxJEIQ00ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1dgAzX+STUFNf2ABGwlW580/VCwNP8xABJENP80AyVbNAMhBFs0AyEFWzQDIQZbNANXQCA0/jT9IlU0/SNVEDT9IQ5VEDT+IQ5VFBAyBkID80ghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/JVs1/iEEWzX9IQVbNfwhBls1+1dAIDX6V2ADNfkhC1s1+IAE4huzqbA0+IgEnjT6MQASRLEisgE0+LIII7IQNP+yB7M0/zT+FlA0/RZQNPwWUDT7FlA0+lA0+VAoSwFXAGNnSCENNQEyBjUCQgQgSSEMDEAAhkghCjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/JVs1/iEEWzX9IQVbNfwhBls1+1dAIDX6V2ADNfkhC1s1+Ek1BTX3gASTLwRZNPdQsDT/MQASRDT/NP4WUDT9FlA0/BZQNPsWUDT6UDT5UDT4FlAoSwFXAGtnSCEHNQEyBjUCQgOTSCEMNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8lWzX+IQRbNf0hBVs1/CEGWzX7V0AgNfpXYAM1+SELWzX4STUFFzX3gASBqprPNPcWULA0+jEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+lA0+VA0+BZQKEsBVwBrZ0ghCjUBMgY1AkIDC0khDwxAAQ1JJAxAAINIIQk0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yVbNf4hBFs1/SEFWzX8IQZbNftXQCA1+ldgAzX5STUFFzX4gAT5i694NPgWULA0/zEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+lA0+VA0+BZQKEsBVwBrZ0ghDDUBMgY1AkICe0gkNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8lWzX+IQRbNf0hBVs1/CEGWzX7V0AgNfpXYAM1+Uk1BRc1+IAE1Axs1jT4FlCwNPoxABJENPghDwxENP80/hZQNP0WUDT8FlA0+xZQNPpQNPlQKEsBVwBjZ0ghCTUBMgY1AkIB90kjDEAASCMSRCM0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABFULCvg0/1CwNANXACA0AyVbNAMhBFs0AyEFWzQDIQZbMQA0/yIyBkIA7UgiNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQdbNf6BEFs1/YEYWzX8gAT27avSNP8WUDT+FlA0/RZQNPwWULAhCIgBoTT/NP4TNP80/RM0/zT8ExAQNP40/RM0/jT8ExA0/TT8ExAQRCEIiAF4sSKyASKyEiSyEDIKshQ0/7IRsyEIiAFgsSKyASKyEiSyEDIKshQ0/rIRsyEIiAFIsSKyASKyEiSyEDIKshQ0/bIRsyEIiAEwsSKyASKyEiSyEDIKshQ0/LIRszEANP8WUDT+FlA0/RZQNPwWUChLAVcAQGdIIzUBMgY1AkIAvDX/Nf41/TX8Nfs1+jX5Nfg19zT+QQBfsSKyASKyEiSyEDIJshUyCrIUNPuyEbOxIrIBIrISJLIQMgmyFTIKshQ0+rIRs7EisgEishIkshAyCbIVMgqyFDT5shGzsSKyASKyEiSyEDIJshUyCrIUNPiyEbNCACo09zT4FlA0+RZQNPoWUDT7FlA0/FA0/VAoSwFXAGNnSCQ1ATIGNQJCABwxGSEJEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "internalType": "address payable",
                "name": "v307",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v308",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v309",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v310",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "address payable",
                "name": "v307",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v308",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v309",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v310",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                "internalType": "bool[3]",
                "name": "v383",
                "type": "bool[3]"
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
                "internalType": "bool[3]",
                "name": "v383",
                "type": "bool[3]"
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
  Bytecode: `0x608060405260405162001c2338038062001c238339810160408190526200002691620003d6565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b0390811684860152918101518216606080850191909152818501518316608085015201511660a082015290517f2041d2013dda633b765ce8bcb17ffab9f0344648172a80936dd5161005dd27bb9181900360c00190a1620001e08160200151602001516001600160a01b03168260200151600001516001600160a01b0316146200011f576020820151604081015190516001600160a01b0390811691161462000117576020820151606081015190516001600160a01b039081169116146200011757600162000122565b600062000122565b60005b6200012f576000620001d8565b8160200151604001516001600160a01b03168260200151602001516001600160a01b03161462000193578160200151606001516001600160a01b03168260200151602001516001600160a01b0316146200018b57600162000196565b600062000196565b60005b620001a3576000620001d8565b8160200151606001516001600160a01b03168260200151604001516001600160a01b031614620001d5576001620001d8565b60005b6007620002b2565b620001ee34156008620002b2565b6040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528c88018051516001600160a01b03908116895281518a01518116885281518e0151811686529051860151811683526001998a9055439099558b51978801529451871699860199909952915185169084015251831695820195909552935116908301529060c00160405160208183030381529060405260029080519060200190620002a9929190620002dc565b505050620004d6565b81620002d85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620002ea9062000499565b90600052602060002090601f0160209004810192826200030e576000855562000359565b82601f106200032957805160ff191683800117855562000359565b8280016001018555821562000359579182015b82811115620003595782518255916020019190600101906200033c565b50620003679291506200036b565b5090565b5b808211156200036757600081556001016200036c565b604051608081016001600160401b0381118282101715620003b357634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620003d157600080fd5b919050565b600081830360a0811215620003ea57600080fd5b604080519081016001600160401b03811182821017156200041b57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200043557600080fd5b6200043f62000382565b91506200044f60208501620003b9565b82526200045f60408501620003b9565b60208301526200047260608501620003b9565b60408301526200048560808501620003b9565b606083015260208101919091529392505050565b600181811c90821680620004ae57607f821691505b60208210811415620004d057634e487b7160e01b600052602260045260246000fd5b50919050565b61173d80620004e66000396000f3fe60806040526004361061008f5760003560e01c8063a209ad4e11610056578063a209ad4e1461010a578063ab53f2c61461011d578063bb89832e14610140578063bf2c5b2414610153578063f4cedab01461016657005b80631e93b0f11461009857806326f7faf3146100bc578063552d7b8e146100cf5780636bf19139146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca36600461118e565b610179565b6100966100dd3660046111c3565b610336565b6100966100f036600461118e565b610511565b34801561010157600080fd5b506001546100a9565b6100966101183660046111c3565b61072e565b34801561012957600080fd5b506101326108db565b6040516100b39291906111df565b61009661014e36600461118e565b610978565b6100966101613660046111c3565b610b26565b6100966101743660046111c3565b610d10565b610189600160005414600a610ec9565b6101a38135158061019c57506001548235145b600b610ec9565b6000808055600280546101b59061123c565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061123c565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906112a3565b90507fa3a6b7a3be27d9a5f5d9a59f09ef50e8283f713bca623fe5b7379804a20f5a85338360405161027992919061137e565b60405180910390a161028d34156009610ec9565b610295610fbf565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518551908516908201526080808701518651951694019390935283513360a0909101528051808401909152919085019060039083908390808284376000920182905250845160c001939093525050602080830180519290925290514391015261033181610ef2565b505050565b6103466006600054146017610ec9565b6103608135158061035957506001548235145b6018610ec9565b6000808055600280546103729061123c565b80601f016020809104026020016040519081016040528092919081815260200182805461039e9061123c565b80156103eb5780601f106103c0576101008083540402835291602001916103eb565b820191906000526020600020905b8154815290600101906020018083116103ce57829003601f168201915b50505050508060200190518101906104039190611412565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516104369291906114d1565b60405180910390a161044a34156015610ec9565b60a0810151610465906001600160a01b031633146016610ec9565b61046d610ffb565b81516001600160a01b03908116825260208084015182168184015260408085015183168185015260608086015184169085015260808086015184169085015260a0808601519093169284019290925260c0808501519084015260e0808501519084015260076000554360015590516104e79183910161151d565b6040516020818303038152906040526002908051906020019061050b929190611047565b50505050565b6105216009600054146023610ec9565b61053b8135158061053457506001548235145b6024610ec9565b60008080556002805461054d9061123c565b80601f01602080910402602001604051908101604052809291908181526020018280546105799061123c565b80156105c65780601f1061059b576101008083540402835291602001916105c6565b820191906000526020600020905b8154815290600101906020018083116105a957829003601f168201915b50505050508060200190518101906105de9190611594565b90507f8f0cb0b348b2cbded5c7f478d47a42dcc9817420b6f5ea0f3af3b40970999cc9338360405161061192919061137e565b60405180910390a161062534156021610ec9565b805161063d906001600160a01b031633146022610ec9565b610645610fbf565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518551908516910152608080860151855190851691015260a0808601518551941693019290925260c0808501518451909101526106ba918501908501611646565b6106c55760006106d5565b6106d56060840160408501611646565b6106e05760006106f0565b6106f06080840160608501611646565b6106fb576000610712565b60c08201516040015161070f576001610712565b60005b6020808301805192151590925290514391015261033181610ef2565b61073e6005600054146013610ec9565b6107588135158061075157506001548235145b6014610ec9565b60008080556002805461076a9061123c565b80601f01602080910402602001604051908101604052809291908181526020018280546107969061123c565b80156107e35780601f106107b8576101008083540402835291602001916107e3565b820191906000526020600020905b8154815290600101906020018083116107c657829003601f168201915b50505050508060200190518101906107fb9190611594565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0338360405161082e9291906114d1565b60405180910390a161084234156011610ec9565b805161085a906001600160a01b031633146012610ec9565b610862610ffb565b81516001600160a01b03908116825260208084015182168184015260408085015183168185015260608086015184169085015260808086015184169085015260a0808601519093169284019290925260c080850151908401528481013560e084015260066000554360015590516104e79183910161151d565b6000606060005460028080546108f09061123c565b80601f016020809104026020016040519081016040528092919081815260200182805461091c9061123c565b80156109695780601f1061093e57610100808354040283529160200191610969565b820191906000526020600020905b81548152906001019060200180831161094c57829003601f168201915b50505050509050915091509091565b610988600760005414601b610ec9565b6109a28135158061099b57506001548235145b601c610ec9565b6000808055600280546109b49061123c565b80601f01602080910402602001604051908101604052809291908181526020018280546109e09061123c565b8015610a2d5780601f10610a0257610100808354040283529160200191610a2d565b820191906000526020600020905b815481529060010190602001808311610a1057829003601f168201915b5050505050806020019051810190610a459190611412565b90507f80f732f40ee8469e0ebef647de029ee60d7d701868f65d84cb39077c03c1ec923383604051610a7892919061137e565b60405180910390a1610a8c34156019610ec9565b8051610aa4906001600160a01b03163314601a610ec9565b610aac610ffb565b81516001600160a01b03908116825260208084015182168184015260408085015183168185015260608086015184169085015260808086015184169085015260a0808601519093169284019290925260c0808501519084015260e0808501519084015260086000554360015590516104e79183910161151d565b610b36600860005414601f610ec9565b610b5081351580610b4957506001548235145b6020610ec9565b600080805560028054610b629061123c565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8e9061123c565b8015610bdb5780601f10610bb057610100808354040283529160200191610bdb565b820191906000526020600020905b815481529060010190602001808311610bbe57829003601f168201915b5050505050806020019051810190610bf39190611412565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610c26929190611663565b60405180910390a1610c3f8160e001513414601d610ec9565b60a0810151610c5a906001600160a01b03163314601e610ec9565b805160e08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c97573d6000803e3d6000fd5b50610ca06110cb565b81516001600160a01b03908116825260208084015182168184015260408085015183168185015260608086015184169085015260808086015184169085015260a0808601519093169284019290925260c0808501519084015260096000554360015590516104e79183910161169b565b610d20600460005414600f610ec9565b610d3a81351580610d3357506001548235145b6010610ec9565b600080805560028054610d4c9061123c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d789061123c565b8015610dc55780601f10610d9a57610100808354040283529160200191610dc5565b820191906000526020600020905b815481529060010190602001808311610da857829003601f168201915b5050505050806020019051810190610ddd9190611594565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610e109291906114d1565b60405180910390a1610e243415600c610ec9565b60a0810151610e3f906001600160a01b03163314600d610ec9565b610e516003602084013510600e610ec9565b610e596110cb565b81516001600160a01b03908116825260208084015182168184015260408085015183168185015260608086015184169085015260808086015184169085015260a0808601519093169284019290925260c0808501519084015260056000554360015590516104e79183910161169b565b81610eee5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515115610f165760008080556001819055610f1390600290611109565b50565b610f1e6110cb565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015284516060908101518416908501528451608090810151841690850152845160a09081015190931692840192909252835160c090810151908401526004600055436001559051610f9b9183910161169b565b60405160208183030381529060405260029080519060200190610331929190611047565b6040518060400160405280610fd26110cb565b8152602001610ff66040518060400160405280600015158152602001600081525090565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c0810161103a611143565b8152602001600081525090565b8280546110539061123c565b90600052602060002090601f01602090048101928261107557600085556110bb565b82601f1061108e57805160ff19168380011785556110bb565b828001600101855582156110bb579182015b828111156110bb5782518255916020019190600101906110a0565b506110c7929150611161565b5090565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c08101610ff6611143565b5080546111159061123c565b6000825580601f10611125575050565b601f016020900490600052602060002090810190610f139190611161565b60405180606001604052806003906020820280368337509192915050565b5b808211156110c75760008155600101611162565b60006080828403121561118857600080fd5b50919050565b6000608082840312156111a057600080fd5b6111aa8383611176565b9392505050565b60006040828403121561118857600080fd5b6000604082840312156111d557600080fd5b6111aa83836111b1565b82815260006020604081840152835180604085015260005b81811015611213578581018301518582016060015282016111f7565b81811115611225576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061125057607f821691505b6020821081141561118857634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461129e57600080fd5b919050565b600060a082840312156112b557600080fd5b60405160a0810181811067ffffffffffffffff821117156112d8576112d8611271565b6040526112e483611287565b81526112f260208401611287565b602082015261130360408401611287565b604082015261131460608401611287565b606082015261132560808401611287565b60808201529392505050565b8015158114610f1357600080fd5b80358252602080830181830160005b600381101561137657813561136281611331565b15158352918301919083019060010161134e565b505050505050565b6001600160a01b038316815260a081016111aa602083018461133f565b600082601f8301126113ac57600080fd5b6040516060810181811067ffffffffffffffff821117156113cf576113cf611271565b6040528060608401858111156113e457600080fd5b845b818110156114075780516113f981611331565b8352602092830192016113e6565b509195945050505050565b6000610140828403121561142557600080fd5b604051610100810181811067ffffffffffffffff8211171561144957611449611271565b60405261145583611287565b815261146360208401611287565b602082015261147460408401611287565b604082015261148560608401611287565b606082015261149660808401611287565b60808201526114a760a08401611287565b60a08201526114b98460c0850161139b565b60c0820152610120929092015160e083015250919050565b6001600160a01b0383168152606081016111aa602083018480358252602090810135910152565b8060005b600381101561050b57815115158452602093840193909101906001016114fc565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015182169083015260808084015182169083015260a083810151918216908301526101408201905060c083015161158260c08401826114f8565b5060e083015161012083015292915050565b600061012082840312156115a757600080fd5b60405160e0810181811067ffffffffffffffff821117156115ca576115ca611271565b6040526115d683611287565b81526115e460208401611287565b60208201526115f560408401611287565b604082015261160660608401611287565b606082015261161760808401611287565b608082015261162860a08401611287565b60a082015261163a8460c0850161139b565b60c08201529392505050565b60006020828403121561165857600080fd5b81356111aa81611331565b6001600160a01b03831681528135602080830191909152606082019083013561168b81611331565b8015156040840152509392505050565b60006101208201905060018060a01b038084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525060c083015161170060c08401826114f8565b509291505056fea26469706673582212206473f1dda89c2b9d64df9e6dd70854054f0cf1179c3b9222fbcc2db4b1290ffa64736f6c634300080c0033`,
  BytecodeLen: 7203,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:58:11:after expr stmt semicolon',
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
