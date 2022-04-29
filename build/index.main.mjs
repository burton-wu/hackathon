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
      2: [ctc0, ctc1],
      3: [ctc0, ctc1, ctc0],
      4: [ctc0, ctc1, ctc0, ctc2],
      5: [ctc0, ctc1, ctc0, ctc2]
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
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v151, v152, v153], secs: v155, time: v154, didSend: v35, from: v150 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v165, time: v164, didSend: v42, from: v163 } = txn2;
  ;
  ;
  const v175 = stdlib.addressEq(v150, v163);
  stdlib.assert(v175, {
    at: './index.rsh:49:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v178 = stdlib.protect(ctc1, await interact.getWeek(), {
    at: './index.rsh:61:51:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'getWeek',
    who: 'Alice'
    });
  const v179 = stdlib.lt(v178, stdlib.checkedBigNumberify('./index.rsh:65:22:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v179, {
    at: './index.rsh:65:10:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v150, v151, v178],
    evt_cnt: 1,
    funcNum: 2,
    lct: v164,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v181], secs: v183, time: v182, didSend: v52, from: v180 } = txn3;
      
      ;
      const v184 = stdlib.lt(v181, stdlib.checkedBigNumberify('./index.rsh:72:20:decimal', stdlib.UInt_max, '6'));
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v181], secs: v183, time: v182, didSend: v52, from: v180 } = txn3;
  ;
  const v184 = stdlib.lt(v181, stdlib.checkedBigNumberify('./index.rsh:72:20:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v184, {
    at: './index.rsh:72:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v63, from: v188 } = txn4;
  ;
  const v192 = stdlib.addressEq(v150, v188);
  stdlib.assert(v192, {
    at: './index.rsh:81:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc2, await interact.acceptFee(v189), {
    at: './index.rsh:87:23:application',
    fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
    msg: 'acceptFee',
    who: 'Alice'
    });
  
  const v199 = stdlib.protect(ctc1, await interact.providePasscode(v181), {
    at: './index.rsh:98:61:application',
    fs: ['at ./index.rsh:97:14:application call to [unknown function] (defined at: ./index.rsh:97:18:function exp)'],
    msg: 'providePasscode',
    who: 'Alice'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v150, v151, v180, v189, v199],
    evt_cnt: 1,
    funcNum: 4,
    lct: v190,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v201], secs: v203, time: v202, didSend: v79, from: v200 } = txn5;
      
      ;
      const v204 = stdlib.addressEq(v180, v200);
      ;
      const v205 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
      const v207 = v205[v181];
      const v208 = stdlib.eq(v201, v207);
      const v209 = v208 ? stdlib.checkedBigNumberify('./index.rsh:105:60:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:105:64:decimal', stdlib.UInt_max, '0');
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v201], secs: v203, time: v202, didSend: v79, from: v200 } = txn5;
  ;
  const v204 = stdlib.addressEq(v180, v200);
  stdlib.assert(v204, {
    at: './index.rsh:101:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v205 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v207 = v205[v181];
  const v208 = stdlib.eq(v201, v207);
  const v209 = v208 ? stdlib.checkedBigNumberify('./index.rsh:105:60:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:105:64:decimal', stdlib.UInt_max, '0');
  const txn6 = await (ctc.sendrecv({
    args: [v150, v151, v180, v189],
    evt_cnt: 0,
    funcNum: 5,
    lct: v202,
    onlyIf: true,
    out_tys: [],
    pay: [v189, []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v212, time: v211, didSend: v91, from: v210 } = txn6;
      
      sim_r.txns.push({
        amt: v189,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v215 = stdlib.addressEq(v180, v210);
      ;
      sim_r.txns.push({
        amt: v189,
        kind: 'from',
        to: v150,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, '1'),
        kind: 'from',
        to: v180,
        tok: v151
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v151
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
    tys: [ctc3, ctc0, ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v212, time: v211, didSend: v91, from: v210 } = txn6;
  ;
  const v215 = stdlib.addressEq(v180, v210);
  stdlib.assert(v215, {
    at: './index.rsh:120:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v209), {
    at: './index.rsh:131:24:application',
    fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:29:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
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
    minBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v143 = stdlib.protect(ctc2, await interact.createNFT(), {
    at: './index.rsh:38:71:application',
    fs: ['at ./index.rsh:37:15:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'createNFT',
    who: 'Creator'
    });
  const v144 = v143.lenInBlocks;
  const v145 = v143.minBid;
  const v146 = v143.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v146, v145, v144],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v151, v152, v153], secs: v155, time: v154, didSend: v35, from: v150 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v151
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v151, v152, v153], secs: v155, time: v154, didSend: v35, from: v150 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v150, v151],
    evt_cnt: 0,
    funcNum: 1,
    lct: v154,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, '1'), v151]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v165, time: v164, didSend: v42, from: v163 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v151
        });
      const v175 = stdlib.addressEq(v150, v163);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v165, time: v164, didSend: v42, from: v163 } = txn2;
  ;
  ;
  const v175 = stdlib.addressEq(v150, v163);
  stdlib.assert(v175, {
    at: './index.rsh:49:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v181], secs: v183, time: v182, didSend: v52, from: v180 } = txn3;
  ;
  const v184 = stdlib.lt(v181, stdlib.checkedBigNumberify('./index.rsh:72:20:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v184, {
    at: './index.rsh:72:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Creator'
    });
  const v187 = stdlib.protect(ctc0, await interact.setFee(), {
    at: './index.rsh:78:53:application',
    fs: ['at ./index.rsh:77:15:application call to [unknown function] (defined at: ./index.rsh:77:19:function exp)'],
    msg: 'setFee',
    who: 'Creator'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v150, v151, v180, v187],
    evt_cnt: 1,
    funcNum: 3,
    lct: v182,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v189], secs: v191, time: v190, didSend: v63, from: v188 } = txn4;
      
      ;
      const v192 = stdlib.addressEq(v150, v188);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v63, from: v188 } = txn4;
  ;
  const v192 = stdlib.addressEq(v150, v188);
  stdlib.assert(v192, {
    at: './index.rsh:81:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.requestPasscode(v181), {
    at: './index.rsh:92:29:application',
    fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
    msg: 'requestPasscode',
    who: 'Creator'
    });
  
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v201], secs: v203, time: v202, didSend: v79, from: v200 } = txn5;
  ;
  const v204 = stdlib.addressEq(v180, v200);
  stdlib.assert(v204, {
    at: './index.rsh:101:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v205 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v207 = v205[v181];
  const v208 = stdlib.eq(v201, v207);
  const v209 = v208 ? stdlib.checkedBigNumberify('./index.rsh:105:60:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:105:64:decimal', stdlib.UInt_max, '0');
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v212, time: v211, didSend: v91, from: v210 } = txn6;
  ;
  const v215 = stdlib.addressEq(v180, v210);
  stdlib.assert(v215, {
    at: './index.rsh:120:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  ;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v209), {
    at: './index.rsh:131:24:application',
    fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:29:function exp)'],
    msg: 'seeOutcome',
    who: 'Creator'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEEBSADAghIoI0GJgIBAAAiNQAxGEEC4ClkSSJbNQEhB1s1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAFHSSQMQADjSSUMQAB7JRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUkhBFs1/1coIDX+IQhbNf2ABMyZklywNP2IAnk0/jEAEkSxIrIBNP2yCCOyEDQDVwAgsgezsSKyASOyEiSyEDT+shQ0/7IRs7EisgEishIkshAyCbIVMgqyFDT/shGzQgHbSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBFs1/lcoIDX9IQhbNfxJNQUXNfuABPmLr3g0+xZQsDT9MQASRDT/NP4WUDT9UDT8FlAoSwFXAFBnSCU1ATIGNQJCAZRIIQU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9STUFFzX8gATUDGzWNPwWULA0/zEAEkQ0/zT+FlA0/VA0/BZQKEsBVwBQZ0gkNQEyBjUCQgE2SSMMQACpSSEGDEAAVUghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQUXNf2ABJdO9xc0/RZQsDT9gQYMRDT/NP4WUDEAUChLAVcASGdIIQU1ATIGNQJCANRIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf6ABJqLkXSwIzT+iAD7NP8xABJENP80/hZQKEsBVwAoZ0ghBjUBMgY1AkIAh0giNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQdbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULAhCYgAiCEJiACDsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUChLAVcAKGdIIzUBMgY1AkIAGzEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
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
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
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
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "name": "v181",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v189",
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
                "name": "v201",
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
        "internalType": "struct T4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
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
                "name": "v181",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v189",
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
                "name": "v201",
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
        "internalType": "struct T4",
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
  Bytecode: `0x6080604052604051620013803803806200138083398101604081905262000026916200021c565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000115565b604080518082018252600060208083018281523380855286830151516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200010c9291906200013f565b50505062000305565b816200013b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200014d90620002c8565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b604051606081016001600160401b03811182821017156200021657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200023057600080fd5b604080519081016001600160401b03811182821017156200026157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200027b57600080fd5b62000285620001e5565b60208501519092506001600160a01b0381168114620002a357600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002dd57607f821691505b60208210811415620002ff57634e487b7160e01b600052602260045260246000fd5b50919050565b61106b80620003156000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a209ad4e146100f4578063ab53f2c614610107578063f4cedab01461012a57005b80631e93b0f1146100825780632c10a159146100a657806345f70396146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610d17565b61013d565b6100806100c7366004610d17565b6102ff565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610d17565b61048b565b610080610102366004610d17565b61062b565b34801561011357600080fd5b5061011c6107bf565b60405161009d929190610d5f565b610080610138366004610d17565b61085c565b61014d600160005414600b6109ec565b6101678135158061016057506001548235145b600c6109ec565b60008080556002805461017990610d99565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610d99565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610dea565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610e61565b60405180910390a1610251341560086109ec565b61026b6102643383602001516001610a12565b60096109ec565b8051610283906001600160a01b03163314600a6109ec565b604080518082019091526000808252602082015281516001600160a01b039081168083526020808501518316818501908152600260005543600155604080519283019390935251909216908201526060015b604051602081830303815290604052600290805190602001906102f9929190610c29565b50505050565b61030f600260005414600f6109ec565b6103298135158061032257506001548235145b60106109ec565b60008080556002805461033b90610d99565b80601f016020809104026020016040519081016040528092919081815260200182805461036790610d99565b80156103b45780601f10610389576101008083540402835291602001916103b4565b820191906000526020600020905b81548152906001019060200180831161039757829003601f168201915b50505050508060200190518101906103cc9190610dea565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516103ff929190610e99565b60405180910390a16104133415600d6109ec565b6104256006602084013510600e6109ec565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015182168452338352600390955543600155875193840194909452905183169582019590955293511690830152906080016102d5565b61049b600560005414601b6109ec565b6104b5813515806104ae57506001548235145b601c6109ec565b6000808055600280546104c790610d99565b80601f01602080910402602001604051908101604052809291908181526020018280546104f390610d99565b80156105405780601f1061051557610100808354040283529160200191610540565b820191906000526020600020905b81548152906001019060200180831161052357829003601f168201915b50505050508060200190518101906105589190610ec0565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161058b929190610e61565b60405180910390a16105a48160600151341460196109ec565b60408101516105bf906001600160a01b03163314601a6109ec565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105fc573d6000803e3d6000fd5b50610611816020015182604001516001610a2a565b6000808055600181905561062790600290610cad565b5050565b61063b60046000541460176109ec565b6106558135158061064e57506001548235145b60186109ec565b60008080556002805461066790610d99565b80601f016020809104026020016040519081016040528092919081815260200182805461069390610d99565b80156106e05780601f106106b5576101008083540402835291602001916106e0565b820191906000526020600020905b8154815290600101906020018083116106c357829003601f168201915b50505050508060200190518101906106f89190610ec0565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0338360405161072b929190610e99565b60405180910390a161073f341560156109ec565b604081015161075a906001600160a01b0316331460166109ec565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b039081168852898601518116909452888801519093169091528601519052600590915543600155915190916102d591839101610f47565b6000606060005460028080546107d490610d99565b80601f016020809104026020016040519081016040528092919081815260200182805461080090610d99565b801561084d5780601f106108225761010080835404028352916020019161084d565b820191906000526020600020905b81548152906001019060200180831161083057829003601f168201915b50505050509050915091509091565b61086c60036000541460136109ec565b6108868135158061087f57506001548235145b60146109ec565b60008080556002805461089890610d99565b80601f01602080910402602001604051908101604052809291908181526020018280546108c490610d99565b80156109115780601f106108e657610100808354040283529160200191610911565b820191906000526020600020905b8154815290600101906020018083116108f457829003601f168201915b50505050508060200190518101906109299190610f82565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338360405161095c929190610e99565b60405180910390a1610970341560116109ec565b8051610988906001600160a01b0316331460126109ec565b60408051608081018252600080825260208083018281528385018381526060850184815287516001600160a01b039081168752888501518116909352878701519092169052868201359052600490915543600155915190916102d591839101610f47565b816106275760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610a2083853085610a43565b90505b9392505050565b610a35838383610b1d565b610a3e57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610aaa91610ffc565b60006040518083038185875af1925050503d8060008114610ae7576040519150601f19603f3d011682016040523d82523d6000602084013e610aec565b606091505b5091509150610afd82826001610bee565b5080806020019051810190610b129190611018565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610b7c91610ffc565b60006040518083038185875af1925050503d8060008114610bb9576040519150601f19603f3d011682016040523d82523d6000602084013e610bbe565b606091505b5091509150610bcf82826002610bee565b5080806020019051810190610be49190611018565b9695505050505050565b60608315610bfd575081610a23565b825115610c0d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a09565b828054610c3590610d99565b90600052602060002090601f016020900481019282610c575760008555610c9d565b82601f10610c7057805160ff1916838001178555610c9d565b82800160010185558215610c9d579182015b82811115610c9d578251825591602001919060010190610c82565b50610ca9929150610cea565b5090565b508054610cb990610d99565b6000825580601f10610cc9575050565b601f016020900490600052602060002090810190610ce79190610cea565b50565b5b80821115610ca95760008155600101610ceb565b600060408284031215610d1157600080fd5b50919050565b600060408284031215610d2957600080fd5b610a238383610cff565b60005b83811015610d4e578181015183820152602001610d36565b838111156102f95750506000910152565b8281526040602082015260008251806040840152610d84816060850160208701610d33565b601f01601f1916919091016060019392505050565b600181811c90821680610dad57607f821691505b60208210811415610d1157634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610de557600080fd5b919050565b600060408284031215610dfc57600080fd5b6040516040810181811067ffffffffffffffff82111715610e2d57634e487b7160e01b600052604160045260246000fd5b604052610e3983610dce565b8152610e4760208401610dce565b60208201529392505050565b8015158114610ce757600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610e8981610e53565b8015156040840152509392505050565b6001600160a01b038316815260608101610a23602083018480358252602090810135910152565b600060808284031215610ed257600080fd5b6040516080810181811067ffffffffffffffff82111715610f0357634e487b7160e01b600052604160045260246000fd5b604052610f0f83610dce565b8152610f1d60208401610dce565b6020820152610f2e60408401610dce565b6040820152606083015160608201528091505092915050565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060918201519181019190915260800190565b600060608284031215610f9457600080fd5b6040516060810181811067ffffffffffffffff82111715610fc557634e487b7160e01b600052604160045260246000fd5b604052610fd183610dce565b8152610fdf60208401610dce565b6020820152610ff060408401610dce565b60408201529392505050565b6000825161100e818460208701610d33565b9190910192915050565b60006020828403121561102a57600080fd5b8151610a2381610e5356fea2646970667358221220e9a8f8cec93537ab1b5b6ab43152122a028fb940f858fe5eec6ee896393adf7064736f6c634300080c0033`,
  BytecodeLen: 4992,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:74:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:83:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:127:11:after expr stmt semicolon',
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
