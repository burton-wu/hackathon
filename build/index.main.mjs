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
  const {data: [v130, v131, v132], secs: v134, time: v133, didSend: v35, from: v129 } = txn1;
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
  const {data: [], secs: v144, time: v143, didSend: v40, from: v142 } = txn2;
  ;
  ;
  const v145 = stdlib.addressEq(v129, v142);
  stdlib.assert(v145, {
    at: './index.rsh:65:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v148 = stdlib.protect(ctc1, await interact.getWeek(), {
    at: './index.rsh:77:51:application',
    fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:17:function exp)'],
    msg: 'getWeek',
    who: 'Alice'
    });
  const v149 = stdlib.lt(v148, stdlib.checkedBigNumberify('./index.rsh:80:22:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v149, {
    at: './index.rsh:80:10:application',
    fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:17:function exp)'],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v129, v130, v148],
    evt_cnt: 1,
    funcNum: 2,
    lct: v143,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v151], secs: v153, time: v152, didSend: v50, from: v150 } = txn3;
      
      ;
      const v154 = stdlib.lt(v151, stdlib.checkedBigNumberify('./index.rsh:87:20:decimal', stdlib.UInt_max, '6'));
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v151], secs: v153, time: v152, didSend: v50, from: v150 } = txn3;
  ;
  const v154 = stdlib.lt(v151, stdlib.checkedBigNumberify('./index.rsh:87:20:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v154, {
    at: './index.rsh:87:8:application',
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
  const {data: [v159], secs: v161, time: v160, didSend: v61, from: v158 } = txn4;
  ;
  const v162 = stdlib.addressEq(v129, v158);
  stdlib.assert(v162, {
    at: './index.rsh:96:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc2, await interact.acceptFee(v159), {
    at: './index.rsh:102:23:application',
    fs: ['at ./index.rsh:101:13:application call to [unknown function] (defined at: ./index.rsh:101:17:function exp)'],
    msg: 'acceptFee',
    who: 'Alice'
    });
  
  const v169 = stdlib.protect(ctc1, await interact.providePasscode(v151), {
    at: './index.rsh:112:61:application',
    fs: ['at ./index.rsh:111:14:application call to [unknown function] (defined at: ./index.rsh:111:18:function exp)'],
    msg: 'providePasscode',
    who: 'Alice'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v129, v130, v150, v159, v169],
    evt_cnt: 1,
    funcNum: 4,
    lct: v160,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:115:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v171], secs: v173, time: v172, didSend: v77, from: v170 } = txn5;
      
      ;
      const v174 = stdlib.addressEq(v150, v170);
      ;
      const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
      const v177 = v175[v151];
      const v178 = stdlib.eq(v171, v177);
      const v179 = v178 ? stdlib.checkedBigNumberify('./index.rsh:119:60:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:119:64:decimal', stdlib.UInt_max, '0');
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v171], secs: v173, time: v172, didSend: v77, from: v170 } = txn5;
  ;
  const v174 = stdlib.addressEq(v150, v170);
  stdlib.assert(v174, {
    at: './index.rsh:115:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v177 = v175[v151];
  const v178 = stdlib.eq(v171, v177);
  const v179 = v178 ? stdlib.checkedBigNumberify('./index.rsh:119:60:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:119:64:decimal', stdlib.UInt_max, '0');
  const txn6 = await (ctc.sendrecv({
    args: [v129, v130, v150, v159],
    evt_cnt: 0,
    funcNum: 5,
    lct: v172,
    onlyIf: true,
    out_tys: [],
    pay: [v159, []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v182, time: v181, didSend: v89, from: v180 } = txn6;
      
      sim_r.txns.push({
        amt: v159,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v185 = stdlib.addressEq(v150, v180);
      ;
      sim_r.txns.push({
        amt: v159,
        kind: 'from',
        to: v129,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v130
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
  const {data: [], secs: v182, time: v181, didSend: v89, from: v180 } = txn6;
  ;
  const v185 = stdlib.addressEq(v150, v180);
  stdlib.assert(v185, {
    at: './index.rsh:131:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v179), {
    at: './index.rsh:142:24:application',
    fs: ['at ./index.rsh:141:7:application call to [unknown function] (defined at: ./index.rsh:141:29:function exp)'],
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
  
  
  const v122 = stdlib.protect(ctc2, await interact.createNFT(), {
    at: './index.rsh:52:71:application',
    fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:19:function exp)'],
    msg: 'createNFT',
    who: 'Creator'
    });
  const v123 = v122.lenInBlocks;
  const v124 = v122.minBid;
  const v125 = v122.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v125, v124, v123],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v130, v131, v132], secs: v134, time: v133, didSend: v35, from: v129 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v130
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
  const {data: [v130, v131, v132], secs: v134, time: v133, didSend: v35, from: v129 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v129, v130],
    evt_cnt: 0,
    funcNum: 1,
    lct: v133,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:56:15:decimal', stdlib.UInt_max, '0'), v130]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v144, time: v143, didSend: v40, from: v142 } = txn2;
      
      ;
      ;
      const v145 = stdlib.addressEq(v129, v142);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v144, time: v143, didSend: v40, from: v142 } = txn2;
  ;
  ;
  const v145 = stdlib.addressEq(v129, v142);
  stdlib.assert(v145, {
    at: './index.rsh:65:11:dot',
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
  const {data: [v151], secs: v153, time: v152, didSend: v50, from: v150 } = txn3;
  ;
  const v154 = stdlib.lt(v151, stdlib.checkedBigNumberify('./index.rsh:87:20:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v154, {
    at: './index.rsh:87:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Creator'
    });
  const v157 = stdlib.protect(ctc0, await interact.setFee(), {
    at: './index.rsh:93:53:application',
    fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
    msg: 'setFee',
    who: 'Creator'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v129, v130, v150, v157],
    evt_cnt: 1,
    funcNum: 3,
    lct: v152,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:96:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v159], secs: v161, time: v160, didSend: v61, from: v158 } = txn4;
      
      ;
      const v162 = stdlib.addressEq(v129, v158);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v159], secs: v161, time: v160, didSend: v61, from: v158 } = txn4;
  ;
  const v162 = stdlib.addressEq(v129, v158);
  stdlib.assert(v162, {
    at: './index.rsh:96:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.requestPasscode(v151), {
    at: './index.rsh:107:29:application',
    fs: ['at ./index.rsh:106:15:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
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
  const {data: [v171], secs: v173, time: v172, didSend: v77, from: v170 } = txn5;
  ;
  const v174 = stdlib.addressEq(v150, v170);
  stdlib.assert(v174, {
    at: './index.rsh:115:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v177 = v175[v151];
  const v178 = stdlib.eq(v171, v177);
  const v179 = v178 ? stdlib.checkedBigNumberify('./index.rsh:119:60:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:119:64:decimal', stdlib.UInt_max, '0');
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v182, time: v181, didSend: v89, from: v180 } = txn6;
  ;
  const v185 = stdlib.addressEq(v150, v180);
  stdlib.assert(v185, {
    at: './index.rsh:131:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v179), {
    at: './index.rsh:142:24:application',
    fs: ['at ./index.rsh:141:7:application call to [unknown function] (defined at: ./index.rsh:141:29:function exp)'],
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
  appApproval: `BiAKAAEEBSADAghIoI0GJgIBAAAiNQAxGEECwSlkSSJbNQEhB1s1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAEuSSQMQADKSSUMQABiJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDIQhbNf+ABMyZklywNP+IAmY0A1coIDEAEkSxIrIBNP+yCCOyEDQDVwAgsgezsSKyASKyEiSyEDIJshUyCrIUNAMhBFuyEbNCAdVIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+VyggNf0hCFs1/Ek1BRc1+4AE+YuveDT7FlCwNP0xABJENP80/hZQNP1QNPwWUChLAVcAUGdIJTUBMgY1AkIBjkghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQUXNfyABNQMbNY0/BZQsDT/MQASRDT/NP4WUDT9UDT8FlAoSwFXAFBnSCQ1ATIGNQJCATBJIwxAAKNJIQYMQABVSCEGNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BRc1/YAEl073FzT9FlCwNP2BBgxENP80/hZQMQBQKEsBVwBIZ0ghBTUBMgY1AkIAzkgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/oAEmouRdLA0/zEAEkQ0/zT+FlAoSwFXAChnSCEGNQEyBjUCQgCHSCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hB1s1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiACIIQmIAIOxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAbMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
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
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
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
                "name": "v151",
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
                "name": "v159",
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
                "name": "v171",
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
                "name": "v151",
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
                "name": "v159",
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
                "name": "v171",
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
  Bytecode: `0x6080604052604051620012823803806200128283398101604081905262000026916200021c565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000115565b604080518082018252600060208083018281523380855286830151516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200010c9291906200013f565b50505062000305565b816200013b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200014d90620002c8565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b604051606081016001600160401b03811182821017156200021657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200023057600080fd5b604080519081016001600160401b03811182821017156200026157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200027b57600080fd5b62000285620001e5565b60208501519092506001600160a01b0381168114620002a357600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002dd57607f821691505b60208210811415620002ff57634e487b7160e01b600052602260045260246000fd5b50919050565b610f6d80620003156000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a209ad4e146100f4578063ab53f2c614610107578063f4cedab01461012a57005b80631e93b0f1146100825780632c10a159146100a657806345f70396146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610c19565b61013d565b6100806100c7366004610c19565b6102ff565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610c19565b61048b565b610080610102366004610c19565b610617565b34801561011357600080fd5b5061011c6107ab565b60405161009d929190610c61565b610080610138366004610c19565b610848565b61014d600160005414600b6109d8565b6101678135158061016057506001548235145b600c6109d8565b60008080556002805461017990610c9b565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610c9b565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610cec565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610d63565b60405180910390a1610251341560086109d8565b61026b61026433836020015160006109fe565b60096109d8565b8051610283906001600160a01b03163314600a6109d8565b604080518082019091526000808252602082015281516001600160a01b039081168083526020808501518316818501908152600260005543600155604080519283019390935251909216908201526060015b604051602081830303815290604052600290805190602001906102f9929190610b2b565b50505050565b61030f600260005414600f6109d8565b6103298135158061032257506001548235145b60106109d8565b60008080556002805461033b90610c9b565b80601f016020809104026020016040519081016040528092919081815260200182805461036790610c9b565b80156103b45780601f10610389576101008083540402835291602001916103b4565b820191906000526020600020905b81548152906001019060200180831161039757829003601f168201915b50505050508060200190518101906103cc9190610cec565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516103ff929190610d9b565b60405180910390a16104133415600d6109d8565b6104256006602084013510600e6109d8565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015182168452338352600390955543600155875193840194909452905183169582019590955293511690830152906080016102d5565b61049b600560005414601b6109d8565b6104b5813515806104ae57506001548235145b601c6109d8565b6000808055600280546104c790610c9b565b80601f01602080910402602001604051908101604052809291908181526020018280546104f390610c9b565b80156105405780601f1061051557610100808354040283529160200191610540565b820191906000526020600020905b81548152906001019060200180831161052357829003601f168201915b50505050508060200190518101906105589190610dc2565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161058b929190610d63565b60405180910390a16105a48160600151341460196109d8565b60408101516105bf906001600160a01b03163314601a6109d8565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105fc573d6000803e3d6000fd5b506000808055600181905561061390600290610baf565b5050565b61062760046000541460176109d8565b6106418135158061063a57506001548235145b60186109d8565b60008080556002805461065390610c9b565b80601f016020809104026020016040519081016040528092919081815260200182805461067f90610c9b565b80156106cc5780601f106106a1576101008083540402835291602001916106cc565b820191906000526020600020905b8154815290600101906020018083116106af57829003601f168201915b50505050508060200190518101906106e49190610dc2565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610717929190610d9b565b60405180910390a161072b341560156109d8565b6040810151610746906001600160a01b0316331460166109d8565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b039081168852898601518116909452888801519093169091528601519052600590915543600155915190916102d591839101610e49565b6000606060005460028080546107c090610c9b565b80601f01602080910402602001604051908101604052809291908181526020018280546107ec90610c9b565b80156108395780601f1061080e57610100808354040283529160200191610839565b820191906000526020600020905b81548152906001019060200180831161081c57829003601f168201915b50505050509050915091509091565b61085860036000541460136109d8565b6108728135158061086b57506001548235145b60146109d8565b60008080556002805461088490610c9b565b80601f01602080910402602001604051908101604052809291908181526020018280546108b090610c9b565b80156108fd5780601f106108d2576101008083540402835291602001916108fd565b820191906000526020600020905b8154815290600101906020018083116108e057829003601f168201915b50505050508060200190518101906109159190610e84565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610948929190610d9b565b60405180910390a161095c341560116109d8565b8051610974906001600160a01b0316331460126109d8565b60408051608081018252600080825260208083018281528385018381526060850184815287516001600160a01b039081168752888501518116909352878701519092169052868201359052600490915543600155915190916102d591839101610e49565b816106135760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610a0c83853085610a16565b90505b9392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610a7d91610efe565b60006040518083038185875af1925050503d8060008114610aba576040519150601f19603f3d011682016040523d82523d6000602084013e610abf565b606091505b5091509150610ad082826001610af0565b5080806020019051810190610ae59190610f1a565b979650505050505050565b60608315610aff575081610a0f565b825115610b0f5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109f5565b828054610b3790610c9b565b90600052602060002090601f016020900481019282610b595760008555610b9f565b82601f10610b7257805160ff1916838001178555610b9f565b82800160010185558215610b9f579182015b82811115610b9f578251825591602001919060010190610b84565b50610bab929150610bec565b5090565b508054610bbb90610c9b565b6000825580601f10610bcb575050565b601f016020900490600052602060002090810190610be99190610bec565b50565b5b80821115610bab5760008155600101610bed565b600060408284031215610c1357600080fd5b50919050565b600060408284031215610c2b57600080fd5b610a0f8383610c01565b60005b83811015610c50578181015183820152602001610c38565b838111156102f95750506000910152565b8281526040602082015260008251806040840152610c86816060850160208701610c35565b601f01601f1916919091016060019392505050565b600181811c90821680610caf57607f821691505b60208210811415610c1357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ce757600080fd5b919050565b600060408284031215610cfe57600080fd5b6040516040810181811067ffffffffffffffff82111715610d2f57634e487b7160e01b600052604160045260246000fd5b604052610d3b83610cd0565b8152610d4960208401610cd0565b60208201529392505050565b8015158114610be957600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610d8b81610d55565b8015156040840152509392505050565b6001600160a01b038316815260608101610a0f602083018480358252602090810135910152565b600060808284031215610dd457600080fd5b6040516080810181811067ffffffffffffffff82111715610e0557634e487b7160e01b600052604160045260246000fd5b604052610e1183610cd0565b8152610e1f60208401610cd0565b6020820152610e3060408401610cd0565b6040820152606083015160608201528091505092915050565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060918201519181019190915260800190565b600060608284031215610e9657600080fd5b6040516060810181811067ffffffffffffffff82111715610ec757634e487b7160e01b600052604160045260246000fd5b604052610ed383610cd0565b8152610ee160208401610cd0565b6020820152610ef260408401610cd0565b60408201529392505050565b60008251610f10818460208701610c35565b9190910192915050565b600060208284031215610f2c57600080fd5b8151610a0f81610d5556fea264697066735822122008a85ece3f84dd6668b89d09c3780a69b58f74ab6a9a878fc5372ebd0cf6dba464736f6c634300080c0033`,
  BytecodeLen: 4738,
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
  2: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:98:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:128:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:138:11:after expr stmt semicolon',
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
