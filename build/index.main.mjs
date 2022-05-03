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
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc2],
      3: [ctc0, ctc1, ctc0, ctc2, ctc2],
      4: [ctc0, ctc1, ctc0, ctc2],
      5: [ctc0, ctc1, ctc0]
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v156, v157], secs: v159, time: v158, didSend: v32, from: v155 } = txn1;
  ;
  ;
  const v169 = stdlib.protect(ctc1, await interact.getWeek(), {
    at: './index.rsh:51:51:application',
    fs: ['at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'getWeek',
    who: 'Alice'
    });
  const v170 = stdlib.lt(v169, stdlib.checkedBigNumberify('./index.rsh:55:22:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v170, {
    at: './index.rsh:55:10:application',
    fs: ['at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v155, v156, v169],
    evt_cnt: 1,
    funcNum: 1,
    lct: v158,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v172], secs: v174, time: v173, didSend: v42, from: v171 } = txn2;
      
      ;
      const v175 = stdlib.lt(v172, stdlib.checkedBigNumberify('./index.rsh:62:20:decimal', stdlib.UInt_max, '6'));
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v172], secs: v174, time: v173, didSend: v42, from: v171 } = txn2;
  ;
  const v175 = stdlib.lt(v172, stdlib.checkedBigNumberify('./index.rsh:62:20:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v175, {
    at: './index.rsh:62:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v180], secs: v182, time: v181, didSend: v53, from: v179 } = txn3;
  ;
  const v183 = stdlib.addressEq(v155, v179);
  stdlib.assert(v183, {
    at: './index.rsh:71:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc2, await interact.acceptFee(v180), {
    at: './index.rsh:77:23:application',
    fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:17:function exp)'],
    msg: 'acceptFee',
    who: 'Alice'
    });
  
  const v190 = stdlib.protect(ctc1, await interact.providePasscode(v172), {
    at: './index.rsh:88:61:application',
    fs: ['at ./index.rsh:87:14:application call to [unknown function] (defined at: ./index.rsh:87:18:function exp)'],
    msg: 'providePasscode',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v155, v156, v171, v172, v180, v190],
    evt_cnt: 1,
    funcNum: 3,
    lct: v181,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:91:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v192], secs: v194, time: v193, didSend: v69, from: v191 } = txn4;
      
      ;
      const v195 = stdlib.addressEq(v171, v191);
      ;
      const v196 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6000')];
      const v198 = v196[v172];
      const v199 = stdlib.eq(v192, v198);
      if (v199) {
        sim_r.isHalt = false;
        }
      else {
        const v252 = stdlib.gt(v172, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', stdlib.UInt_max, '2'));
        sim_r.txns.push({
          kind: 'halt',
          tok: v156
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
    tys: [ctc3, ctc0, ctc3, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v192], secs: v194, time: v193, didSend: v69, from: v191 } = txn4;
  ;
  const v195 = stdlib.addressEq(v171, v191);
  stdlib.assert(v195, {
    at: './index.rsh:91:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v196 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6000')];
  const v198 = v196[v172];
  const v199 = stdlib.eq(v192, v198);
  if (v199) {
    const txn5 = await (ctc.sendrecv({
      args: [v155, v156, v171, v180],
      evt_cnt: 0,
      funcNum: 4,
      lct: v193,
      onlyIf: true,
      out_tys: [],
      pay: [v180, []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v204, time: v203, didSend: v82, from: v202 } = txn5;
        
        sim_r.txns.push({
          amt: v180,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        const v207 = stdlib.addressEq(v171, v202);
        ;
        sim_r.txns.push({
          amt: v180,
          kind: 'from',
          to: v155,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v204, time: v203, didSend: v82, from: v202 } = txn5;
    ;
    const v207 = stdlib.addressEq(v171, v202);
    stdlib.assert(v207, {
      at: './index.rsh:102:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v214, time: v213, didSend: v93, from: v212 } = txn6;
    ;
    ;
    const v224 = stdlib.addressEq(v155, v212);
    stdlib.assert(v224, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    const v237 = stdlib.gt(v172, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', stdlib.UInt_max, '2'));
    stdlib.protect(ctc2, await interact.seeWeekOutcome(true), {
      at: './index.rsh:120:28:application',
      fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)'],
      msg: 'seeWeekOutcome',
      who: 'Alice'
      });
    
    stdlib.protect(ctc2, await interact.seeOverallOutcome(v237), {
      at: './index.rsh:129:31:application',
      fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
      msg: 'seeOverallOutcome',
      who: 'Alice'
      });
    
    return;
    
    
    
    
    }
  else {
    const v252 = stdlib.gt(v172, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', stdlib.UInt_max, '2'));
    stdlib.protect(ctc2, await interact.seeWeekOutcome(false), {
      at: './index.rsh:120:28:application',
      fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)'],
      msg: 'seeWeekOutcome',
      who: 'Alice'
      });
    
    stdlib.protect(ctc2, await interact.seeOverallOutcome(v252), {
      at: './index.rsh:129:31:application',
      fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
      msg: 'seeOverallOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lenInBlocks: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v150 = stdlib.protect(ctc2, await interact.createNFT(), {
    at: './index.rsh:37:63:application',
    fs: ['at ./index.rsh:36:15:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)'],
    msg: 'createNFT',
    who: 'Creator'
    });
  const v151 = v150.lenInBlocks;
  const v152 = v150.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v152, v151],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v156, v157], secs: v159, time: v158, didSend: v32, from: v155 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v156
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v156, v157], secs: v159, time: v158, didSend: v32, from: v155 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v172], secs: v174, time: v173, didSend: v42, from: v171 } = txn2;
  ;
  const v175 = stdlib.lt(v172, stdlib.checkedBigNumberify('./index.rsh:62:20:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v175, {
    at: './index.rsh:62:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Creator'
    });
  const v178 = stdlib.protect(ctc0, await interact.setFee(), {
    at: './index.rsh:68:53:application',
    fs: ['at ./index.rsh:67:15:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
    msg: 'setFee',
    who: 'Creator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v155, v156, v171, v172, v178],
    evt_cnt: 1,
    funcNum: 2,
    lct: v173,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v180], secs: v182, time: v181, didSend: v53, from: v179 } = txn3;
      
      ;
      const v183 = stdlib.addressEq(v155, v179);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v180], secs: v182, time: v181, didSend: v53, from: v179 } = txn3;
  ;
  const v183 = stdlib.addressEq(v155, v179);
  stdlib.assert(v183, {
    at: './index.rsh:71:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.requestPasscode(v172), {
    at: './index.rsh:82:29:application',
    fs: ['at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:19:function exp)'],
    msg: 'requestPasscode',
    who: 'Creator'
    });
  
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v192], secs: v194, time: v193, didSend: v69, from: v191 } = txn4;
  ;
  const v195 = stdlib.addressEq(v171, v191);
  stdlib.assert(v195, {
    at: './index.rsh:91:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v196 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6000')];
  const v198 = v196[v172];
  const v199 = stdlib.eq(v192, v198);
  if (v199) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v204, time: v203, didSend: v82, from: v202 } = txn5;
    ;
    const v207 = stdlib.addressEq(v171, v202);
    stdlib.assert(v207, {
      at: './index.rsh:102:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    ;
    const txn6 = await (ctc.sendrecv({
      args: [v155, v156, v171],
      evt_cnt: 0,
      funcNum: 5,
      lct: v203,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:111:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:108:17:decimal', stdlib.UInt_max, '2'), v156]]],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v214, time: v213, didSend: v93, from: v212 } = txn6;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:108:17:decimal', stdlib.UInt_max, '2'),
          kind: 'to',
          tok: v156
          });
        const v224 = stdlib.addressEq(v155, v212);
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:108:17:decimal', stdlib.UInt_max, '2'),
          kind: 'from',
          to: v171,
          tok: v156
          });
        const v237 = stdlib.gt(v172, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', stdlib.UInt_max, '2'));
        sim_r.txns.push({
          kind: 'halt',
          tok: v156
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v214, time: v213, didSend: v93, from: v212 } = txn6;
    ;
    ;
    const v224 = stdlib.addressEq(v155, v212);
    stdlib.assert(v224, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    ;
    const v237 = stdlib.gt(v172, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', stdlib.UInt_max, '2'));
    stdlib.protect(ctc3, await interact.seeWeekOutcome(true), {
      at: './index.rsh:120:28:application',
      fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)'],
      msg: 'seeWeekOutcome',
      who: 'Creator'
      });
    
    stdlib.protect(ctc3, await interact.seeOverallOutcome(v237), {
      at: './index.rsh:129:31:application',
      fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
      msg: 'seeOverallOutcome',
      who: 'Creator'
      });
    
    return;
    
    
    
    
    }
  else {
    const v252 = stdlib.gt(v172, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', stdlib.UInt_max, '2'));
    stdlib.protect(ctc3, await interact.seeWeekOutcome(false), {
      at: './index.rsh:120:28:application',
      fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)'],
      msg: 'seeWeekOutcome',
      who: 'Creator'
      });
    
    stdlib.protect(ctc3, await interact.seeOverallOutcome(v252), {
      at: './index.rsh:129:31:application',
      fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
      msg: 'seeOverallOutcome',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEEBSACCANIoI0GJgIBAAAiNQAxGEEDSClkSSJbNQEhBls1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQcMQAGbSSQMQADUSSUMQABlJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDIQRbNf+ABMyZklywIQU0/4gDAzQDVwAgMQASRLEisgEhBbISJLIQNANXKCCyFDT/shGzsSKyASKyEiSyEDIJshUyCrIUNP+yEbNCAllIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+VyggNf0hCFs1/IAEkSc087A0/IgCeTT9MQASRLEisgE0/LIII7IQNP+yB7M0/zT+FlA0/VAoSwFXAEhnSCU1ATIGNQJCAgtIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBFs1/lcoIDX9gVBbNfxJNQUXNfuABNQMbNY0+xZQsDT9MQASRDT7gDAAAAAAAAAD6AAAAAAAAAfQAAAAAAAAC7gAAAAAAAAPoAAAAAAAABOIAAAAAAAAF3AhBjQDIQhbCyEGWBcSQQAfNP80/hZQNP1QNPwWUChLAVcAUGdIJDUBMgY1AkIBZLEisgEishIkshAyCbIVMgqyFDT+shGzQgEvSSMMQADHSSEFDEAAaEghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+VyggNf0hCFs1/Ek1BRc1+4AEl073FzT7FlCwNP8xABJENP80/hZQNP1QNPwWUDT7FlAoSwFXAFhnSCEHNQEyBjUCQgDVSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+STUFFzX9gATVFRkUNP0WULA0/YEGDEQ0/zT+FlAxAFA0/RZQKEsBVwBQZ0ghBTUBMgY1AkIAfUgiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBls1/oAErNEfwzT/FlA0/hZQsCEJiACIIQmIAIOxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAbMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
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
                "name": "v156",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
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
                "name": "v156",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "name": "v180",
                "type": "uint256"
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
    "name": "_reach_e2",
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
                "name": "v192",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v180",
                "type": "uint256"
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
    "name": "_reach_m2",
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
                "name": "v192",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200152d3803806200152d833981016040819052620000269162000212565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b0316838501520151606082015290517fcf195cf82603ce4a4e34c55fad8b41a7c2cc7f7728b1ba77a8eec293c0fa52d59181900360800190a162000094341560076200010b565b604080518082018252600060208083018281523380855286830151516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200010292919062000135565b505050620002c7565b81620001315760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000143906200028a565b90600052602060002090601f016020900481019282620001675760008555620001b2565b82601f106200018257805160ff1916838001178555620001b2565b82800160010185558215620001b2579182015b82811115620001b257825182559160200191906001019062000195565b50620001c0929150620001c4565b5090565b5b80821115620001c05760008155600101620001c5565b604080519081016001600160401b03811182821017156200020c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200022657600080fd5b62000230620001db565b835181526040601f19830112156200024757600080fd5b62000251620001db565b60208501519092506001600160a01b03811681146200026f57600080fd5b82526040939093015160208083019190915283015250919050565b600181811c908216806200029f57607f821691505b60208210811415620002c157634e487b7160e01b600052602260045260246000fd5b50919050565b61125680620002d76000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a7661d54146100f4578063ab53f2c614610107578063f4cedab01461012a57005b80631e93b0f11461008257806345f70396146100a657806383230757146100b9578063873779a1146100ce57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610e3f565b61013d565b3480156100c557600080fd5b50600154610093565b6100806100dc366004610e3f565b610329565b6100806100ef366004610e3f565b6104ac565b610080610102366004610e3f565b610620565b34801561011357600080fd5b5061011c6107fd565b60405161009d929190610e87565b610080610138366004610e3f565b61089a565b61014d600260005414600e610ae3565b6101678135158061016057506001548235145b600f610ae3565b60008080556002805461017990610ec1565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610ec1565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610f99565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8338360405161023d929190610fb5565b60405180910390a16102513415600c610ae3565b8051610269906001600160a01b03163314600d610ae3565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d0151821687528d86015185528e89013583526003909955436001558b5197880198909852945187169986019990995291519094169383019390935291519481019490945251908301529060c0015b60405160208183030381529060405260029080519060200190610323929190610d1b565b50505050565b610339600160005414600a610ae3565b6103538135158061034c57506001548235145b600b610ae3565b60008080556002805461036590610ec1565b80601f016020809104026020016040519081016040528092919081815260200182805461039190610ec1565b80156103de5780601f106103b3576101008083540402835291602001916103de565b820191906000526020600020905b8154815290600101906020018083116103c157829003601f168201915b50505050508060200190518101906103f69190610fdc565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610429929190610fb5565b60405180910390a161043d34156008610ae3565b61044f60066020840135106009610ae3565b60408051608081018252600080825260208083018281528385018381526060850184815287516001600160a01b0390811687528885015116909252339052868201359052600290915543600155915190916102ff91839101611045565b6104bc600560005414601b610ae3565b6104d6813515806104cf57506001548235145b601c610ae3565b6000808055600280546104e890610ec1565b80601f016020809104026020016040519081016040528092919081815260200182805461051490610ec1565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b50505050508060200190518101906105799190611080565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516105ac929190611108565b60405180910390a16105c034156018610ae3565b6105da6105d33383602001516002610b09565b6019610ae3565b80516105f2906001600160a01b03163314601a610ae3565b610606816020015182604001516002610b21565b6000808055600181905561061c90600290610d9f565b5050565b6106306004600054146016610ae3565b61064a8135158061064357506001548235145b6017610ae3565b60008080556002805461065c90610ec1565b80601f016020809104026020016040519081016040528092919081815260200182805461068890610ec1565b80156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b50505050508060200190518101906106ed9190610f99565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610720929190611108565b60405180910390a1610739816060015134146014610ae3565b6040810151610754906001600160a01b031633146015610ae3565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610791573d6000803e3d6000fd5b5060408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015182168352600590955543600155875193840194909452905183169582019590955293511690830152906080016102ff565b60006060600054600280805461081290610ec1565b80601f016020809104026020016040519081016040528092919081815260200182805461083e90610ec1565b801561088b5780601f106108605761010080835404028352916020019161088b565b820191906000526020600020905b81548152906001019060200180831161086e57829003601f168201915b50505050509050915091509091565b6108aa6003600054146012610ae3565b6108c4813515806108bd57506001548235145b6013610ae3565b6000808055600280546108d690610ec1565b80601f016020809104026020016040519081016040528092919081815260200182805461090290610ec1565b801561094f5780601f106109245761010080835404028352916020019161094f565b820191906000526020600020905b81548152906001019060200180831161093257829003601f168201915b50505050508060200190518101906109679190611140565b9050610971610ddc565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133846040516109a2929190610fb5565b60405180910390a16109b634156010610ae3565b60408201516109d1906001600160a01b031633146011610ae3565b80516103e8905280516107d06020909101528051610bb86040909101528051610fa06060918201528151611388608090910152815161177060a09091015281519083015160068110610a2557610a256111d1565b602002015183602001600001351415610ac8576040805160808082018352600080835260208084018281528486018381526060860184815289516001600160a01b0390811688528a850151811690935289880151909216905292870151909252600490554360015591519091610a9d91839101611045565b60405160208183030381529060405260029080519060200190610ac1929190610d1b565b5050505050565b60008080556001819055610ade90600290610d9f565b505050565b8161061c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610b1783853085610b35565b90505b9392505050565b610b2c838383610c0f565b610ade57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610b9c916111e7565b60006040518083038185875af1925050503d8060008114610bd9576040519150601f19603f3d011682016040523d82523d6000602084013e610bde565b606091505b5091509150610bef82826001610ce0565b5080806020019051810190610c049190611203565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610c6e916111e7565b60006040518083038185875af1925050503d8060008114610cab576040519150601f19603f3d011682016040523d82523d6000602084013e610cb0565b606091505b5091509150610cc182826002610ce0565b5080806020019051810190610cd69190611203565b9695505050505050565b60608315610cef575081610b1a565b825115610cff5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610b00565b828054610d2790610ec1565b90600052602060002090601f016020900481019282610d495760008555610d8f565b82601f10610d6257805160ff1916838001178555610d8f565b82800160010185558215610d8f579182015b82811115610d8f578251825591602001919060010190610d74565b50610d9b929150610df4565b5090565b508054610dab90610ec1565b6000825580601f10610dbb575050565b601f016020900490600052602060002090810190610dd99190610df4565b50565b6040518060200160405280610def610e09565b905290565b5b80821115610d9b5760008155600101610df5565b6040518060c001604052806006906020820280368337509192915050565b600060408284031215610e3957600080fd5b50919050565b600060408284031215610e5157600080fd5b610b1a8383610e27565b60005b83811015610e76578181015183820152602001610e5e565b838111156103235750506000910152565b8281526040602082015260008251806040840152610eac816060850160208701610e5b565b601f01601f1916919091016060019392505050565b600181811c90821680610ed557607f821691505b60208210811415610e3957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f0d57600080fd5b919050565b600060808284031215610f2457600080fd5b6040516080810181811067ffffffffffffffff82111715610f5557634e487b7160e01b600052604160045260246000fd5b604052905080610f6483610ef6565b8152610f7260208401610ef6565b6020820152610f8360408401610ef6565b6040820152606083015160608201525092915050565b600060808284031215610fab57600080fd5b610b1a8383610f12565b6001600160a01b038316815260608101610b1a602083018480358252602090810135910152565b600060408284031215610fee57600080fd5b6040516040810181811067ffffffffffffffff8211171561101f57634e487b7160e01b600052604160045260246000fd5b60405261102b83610ef6565b815261103960208401610ef6565b60208201529392505050565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060918201519181019190915260800190565b60006060828403121561109257600080fd5b6040516060810181811067ffffffffffffffff821117156110c357634e487b7160e01b600052604160045260246000fd5b6040526110cf83610ef6565b81526110dd60208401610ef6565b60208201526110ee60408401610ef6565b60408201529392505050565b8015158114610dd957600080fd5b6001600160a01b038316815281356020808301919091526060820190830135611130816110fa565b8015156040840152509392505050565b600060a0828403121561115257600080fd5b60405160a0810181811067ffffffffffffffff8211171561118357634e487b7160e01b600052604160045260246000fd5b60405261118f83610ef6565b815261119d60208401610ef6565b60208201526111ae60408401610ef6565b604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052603260045260246000fd5b600082516111f9818460208701610e5b565b9190910192915050565b60006020828403121561121557600080fd5b8151610b1a816110fa56fea26469706673582212206b5e2ef80859d1d88418e71e0bd7738d69ff73732eabbf1bd7cf0c02acb6af6a64736f6c634300080c0033`,
  BytecodeLen: 5421,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:100:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:116:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:116:11:after expr stmt semicolon',
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
