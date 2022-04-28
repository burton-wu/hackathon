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
  const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v35, from: v125 } = txn1;
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
  const {data: [], secs: v140, time: v139, didSend: v40, from: v138 } = txn2;
  ;
  ;
  const v141 = stdlib.addressEq(v125, v138);
  stdlib.assert(v141, {
    at: './index.rsh:67:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v144 = stdlib.protect(ctc1, await interact.getWeek(), {
    at: './index.rsh:74:51:application',
    fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:17:function exp)'],
    msg: 'getWeek',
    who: 'Alice'
    });
  const v145 = stdlib.lt(v144, stdlib.checkedBigNumberify('./index.rsh:75:22:decimal', stdlib.UInt_max, '6'));
  stdlib.assert(v145, {
    at: './index.rsh:75:10:application',
    fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:17:function exp)'],
    msg: 'The valid Week has been selected.',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v125, v126, v144],
    evt_cnt: 1,
    funcNum: 2,
    lct: v139,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v147], secs: v149, time: v148, didSend: v50, from: v146 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v147], secs: v149, time: v148, didSend: v50, from: v146 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v60, from: v153 } = txn4;
  ;
  const v157 = stdlib.addressEq(v125, v153);
  stdlib.assert(v157, {
    at: './index.rsh:88:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc2, await interact.acceptFee(v154), {
    at: './index.rsh:94:23:application',
    fs: ['at ./index.rsh:93:13:application call to [unknown function] (defined at: ./index.rsh:93:17:function exp)'],
    msg: 'acceptFee',
    who: 'Alice'
    });
  
  const v164 = stdlib.protect(ctc1, await interact.providePasscode(v147), {
    at: './index.rsh:104:61:application',
    fs: ['at ./index.rsh:103:14:application call to [unknown function] (defined at: ./index.rsh:103:18:function exp)'],
    msg: 'providePasscode',
    who: 'Alice'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v125, v126, v146, v154, v164],
    evt_cnt: 1,
    funcNum: 4,
    lct: v155,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:107:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v166], secs: v168, time: v167, didSend: v76, from: v165 } = txn5;
      
      ;
      const v169 = stdlib.addressEq(v146, v165);
      ;
      const v170 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:10:39:decimal', stdlib.UInt_max, '30'));
      const v171 = v170 ? stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, '0');
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v166], secs: v168, time: v167, didSend: v76, from: v165 } = txn5;
  ;
  const v169 = stdlib.addressEq(v146, v165);
  stdlib.assert(v169, {
    at: './index.rsh:107:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v170 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:10:39:decimal', stdlib.UInt_max, '30'));
  const v171 = v170 ? stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, '0');
  const txn6 = await (ctc.sendrecv({
    args: [v125, v126, v146, v154],
    evt_cnt: 0,
    funcNum: 5,
    lct: v167,
    onlyIf: true,
    out_tys: [],
    pay: [v154, []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v174, time: v173, didSend: v85, from: v172 } = txn6;
      
      sim_r.txns.push({
        amt: v154,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v177 = stdlib.addressEq(v146, v172);
      ;
      sim_r.txns.push({
        amt: v154,
        kind: 'from',
        to: v125,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v126
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
  const {data: [], secs: v174, time: v173, didSend: v85, from: v172 } = txn6;
  ;
  const v177 = stdlib.addressEq(v146, v172);
  stdlib.assert(v177, {
    at: './index.rsh:124:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v171), {
    at: './index.rsh:134:24:application',
    fs: ['at ./index.rsh:133:7:application call to [unknown function] (defined at: ./index.rsh:133:29:function exp)'],
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
  
  
  const v118 = stdlib.protect(ctc2, await interact.createNFT(), {
    at: './index.rsh:54:71:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'createNFT',
    who: 'Creator'
    });
  const v119 = v118.lenInBlocks;
  const v120 = v118.minBid;
  const v121 = v118.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v121, v120, v119],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v35, from: v125 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v126
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
  const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v35, from: v125 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v125, v126],
    evt_cnt: 0,
    funcNum: 1,
    lct: v129,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:58:15:decimal', stdlib.UInt_max, '0'), v126]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v140, time: v139, didSend: v40, from: v138 } = txn2;
      
      ;
      ;
      const v141 = stdlib.addressEq(v125, v138);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v140, time: v139, didSend: v40, from: v138 } = txn2;
  ;
  ;
  const v141 = stdlib.addressEq(v125, v138);
  stdlib.assert(v141, {
    at: './index.rsh:67:11:dot',
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
  const {data: [v147], secs: v149, time: v148, didSend: v50, from: v146 } = txn3;
  ;
  const v152 = stdlib.protect(ctc0, await interact.setFee(), {
    at: './index.rsh:85:53:application',
    fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:19:function exp)'],
    msg: 'setFee',
    who: 'Creator'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v125, v126, v146, v152],
    evt_cnt: 1,
    funcNum: 3,
    lct: v148,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v154], secs: v156, time: v155, didSend: v60, from: v153 } = txn4;
      
      ;
      const v157 = stdlib.addressEq(v125, v153);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v60, from: v153 } = txn4;
  ;
  const v157 = stdlib.addressEq(v125, v153);
  stdlib.assert(v157, {
    at: './index.rsh:88:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.requestPasscode(v147), {
    at: './index.rsh:99:29:application',
    fs: ['at ./index.rsh:98:15:application call to [unknown function] (defined at: ./index.rsh:98:19:function exp)'],
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
  const {data: [v166], secs: v168, time: v167, didSend: v76, from: v165 } = txn5;
  ;
  const v169 = stdlib.addressEq(v146, v165);
  stdlib.assert(v169, {
    at: './index.rsh:107:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v170 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:10:39:decimal', stdlib.UInt_max, '30'));
  const v171 = v170 ? stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, '0');
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v174, time: v173, didSend: v85, from: v172 } = txn6;
  ;
  const v177 = stdlib.addressEq(v146, v172);
  stdlib.assert(v177, {
    at: './index.rsh:124:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v171), {
    at: './index.rsh:134:24:application',
    fs: ['at ./index.rsh:133:7:application call to [unknown function] (defined at: ./index.rsh:133:29:function exp)'],
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
  appApproval: `BiAKAAEEBSADAghIoI0GJgIBAAAiNQAxGEECuylkSSJbNQEhB1s1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAEuSSQMQADKSSUMQABiJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDIQhbNf+ABMyZklywNP+IAmA0A1coIDEAEkSxIrIBNP+yCCOyEDQDVwAgsgezsSKyASKyEiSyEDIJshUyCrIUNAMhBFuyEbNCAc9IJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+VyggNf0hCFs1/Ek1BRc1+4AE+YuveDT7FlCwNP0xABJENP80/hZQNP1QNPwWUChLAVcAUGdIJTUBMgY1AkIBiEghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQUXNfyABNQMbNY0/BZQsDT/MQASRDT/NP4WUDT9UDT8FlAoSwFXAFBnSCQ1ATIGNQJCASpJIwxAAJ1JIQYMQABPSCEGNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BRc1/YAEl073FzT9FlCwNP80/hZQMQBQKEsBVwBIZ0ghBTUBMgY1AkIAzkgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/oAEmouRdLA0/zEAEkQ0/zT+FlAoSwFXAChnSCEGNQEyBjUCQgCHSCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hB1s1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiACIIQmIAIOxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAbMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v126",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
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
                "name": "v126",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
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
                "name": "v147",
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
                "name": "v154",
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
                "name": "v166",
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
                "name": "v147",
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
                "name": "v154",
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
                "name": "v166",
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
  Bytecode: `0x6080604052604051620012703803806200127083398101604081905262000026916200021c565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000115565b604080518082018252600060208083018281523380855286830151516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200010c9291906200013f565b50505062000305565b816200013b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200014d90620002c8565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b604051606081016001600160401b03811182821017156200021657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200023057600080fd5b604080519081016001600160401b03811182821017156200026157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200027b57600080fd5b62000285620001e5565b60208501519092506001600160a01b0381168114620002a357600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002dd57607f821691505b60208210811415620002ff57634e487b7160e01b600052602260045260246000fd5b50919050565b610f5b80620003156000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a209ad4e146100f4578063ab53f2c614610107578063f4cedab01461012a57005b80631e93b0f1146100825780632c10a159146100a657806345f70396146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610c07565b61013d565b6100806100c7366004610c07565b6102ff565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610c07565b610479565b610080610102366004610c07565b610605565b34801561011357600080fd5b5061011c610799565b60405161009d929190610c4f565b610080610138366004610c07565b610836565b61014d600160005414600b6109c6565b6101678135158061016057506001548235145b600c6109c6565b60008080556002805461017990610c89565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610c89565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610cda565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610d51565b60405180910390a1610251341560086109c6565b61026b61026433836020015160006109ec565b60096109c6565b8051610283906001600160a01b03163314600a6109c6565b604080518082019091526000808252602082015281516001600160a01b039081168083526020808501518316818501908152600260005543600155604080519283019390935251909216908201526060015b604051602081830303815290604052600290805190602001906102f9929190610b19565b50505050565b61030f600260005414600e6109c6565b6103298135158061032257506001548235145b600f6109c6565b60008080556002805461033b90610c89565b80601f016020809104026020016040519081016040528092919081815260200182805461036790610c89565b80156103b45780601f10610389576101008083540402835291602001916103b4565b820191906000526020600020905b81548152906001019060200180831161039757829003601f168201915b50505050508060200190518101906103cc9190610cda565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516103ff929190610d89565b60405180910390a16104133415600d6109c6565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015182168452338352600390955543600155875193840194909452905183169582019590955293511690830152906080016102d5565b610489600560005414601a6109c6565b6104a38135158061049c57506001548235145b601b6109c6565b6000808055600280546104b590610c89565b80601f01602080910402602001604051908101604052809291908181526020018280546104e190610c89565b801561052e5780601f106105035761010080835404028352916020019161052e565b820191906000526020600020905b81548152906001019060200180831161051157829003601f168201915b50505050508060200190518101906105469190610db0565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610579929190610d51565b60405180910390a16105928160600151341460186109c6565b60408101516105ad906001600160a01b0316331460196109c6565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105ea573d6000803e3d6000fd5b506000808055600181905561060190600290610b9d565b5050565b61061560046000541460166109c6565b61062f8135158061062857506001548235145b60176109c6565b60008080556002805461064190610c89565b80601f016020809104026020016040519081016040528092919081815260200182805461066d90610c89565b80156106ba5780601f1061068f576101008083540402835291602001916106ba565b820191906000526020600020905b81548152906001019060200180831161069d57829003601f168201915b50505050508060200190518101906106d29190610db0565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610705929190610d89565b60405180910390a1610719341560146109c6565b6040810151610734906001600160a01b0316331460156109c6565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b039081168852898601518116909452888801519093169091528601519052600590915543600155915190916102d591839101610e37565b6000606060005460028080546107ae90610c89565b80601f01602080910402602001604051908101604052809291908181526020018280546107da90610c89565b80156108275780601f106107fc57610100808354040283529160200191610827565b820191906000526020600020905b81548152906001019060200180831161080a57829003601f168201915b50505050509050915091509091565b61084660036000541460126109c6565b6108608135158061085957506001548235145b60136109c6565b60008080556002805461087290610c89565b80601f016020809104026020016040519081016040528092919081815260200182805461089e90610c89565b80156108eb5780601f106108c0576101008083540402835291602001916108eb565b820191906000526020600020905b8154815290600101906020018083116108ce57829003601f168201915b50505050508060200190518101906109039190610e72565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610936929190610d89565b60405180910390a161094a341560106109c6565b8051610962906001600160a01b0316331460116109c6565b60408051608081018252600080825260208083018281528385018381526060850184815287516001600160a01b039081168752888501518116909352878701519092169052868201359052600490915543600155915190916102d591839101610e37565b816106015760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006109fa83853085610a04565b90505b9392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610a6b91610eec565b60006040518083038185875af1925050503d8060008114610aa8576040519150601f19603f3d011682016040523d82523d6000602084013e610aad565b606091505b5091509150610abe82826001610ade565b5080806020019051810190610ad39190610f08565b979650505050505050565b60608315610aed5750816109fd565b825115610afd5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109e3565b828054610b2590610c89565b90600052602060002090601f016020900481019282610b475760008555610b8d565b82601f10610b6057805160ff1916838001178555610b8d565b82800160010185558215610b8d579182015b82811115610b8d578251825591602001919060010190610b72565b50610b99929150610bda565b5090565b508054610ba990610c89565b6000825580601f10610bb9575050565b601f016020900490600052602060002090810190610bd79190610bda565b50565b5b80821115610b995760008155600101610bdb565b600060408284031215610c0157600080fd5b50919050565b600060408284031215610c1957600080fd5b6109fd8383610bef565b60005b83811015610c3e578181015183820152602001610c26565b838111156102f95750506000910152565b8281526040602082015260008251806040840152610c74816060850160208701610c23565b601f01601f1916919091016060019392505050565b600181811c90821680610c9d57607f821691505b60208210811415610c0157634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610cd557600080fd5b919050565b600060408284031215610cec57600080fd5b6040516040810181811067ffffffffffffffff82111715610d1d57634e487b7160e01b600052604160045260246000fd5b604052610d2983610cbe565b8152610d3760208401610cbe565b60208201529392505050565b8015158114610bd757600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610d7981610d43565b8015156040840152509392505050565b6001600160a01b0383168152606081016109fd602083018480358252602090810135910152565b600060808284031215610dc257600080fd5b6040516080810181811067ffffffffffffffff82111715610df357634e487b7160e01b600052604160045260246000fd5b604052610dff83610cbe565b8152610e0d60208401610cbe565b6020820152610e1e60408401610cbe565b6040820152606083015160608201528091505092915050565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060918201519181019190915260800190565b600060608284031215610e8457600080fd5b6040516060810181811067ffffffffffffffff82111715610eb557634e487b7160e01b600052604160045260246000fd5b604052610ec183610cbe565b8152610ecf60208401610cbe565b6020820152610ee060408401610cbe565b60408201529392505050565b60008251610efe818460208701610c23565b9190910192915050565b600060208284031215610f1a57600080fd5b81516109fd81610d4356fea264697066735822122061357a73f4bc7083a91933216a8909c6da03d361c5221905012fd05d4752043664736f6c634300080c0033`,
  BytecodeLen: 4720,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:81:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:90:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:130:11:after expr stmt semicolon',
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
