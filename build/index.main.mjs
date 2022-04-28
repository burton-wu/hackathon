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
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0, ctc1],
      3: [ctc0, ctc0, ctc1]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v84 = stdlib.protect(ctc0, await interact.getWeek(), {
    at: './index.rsh:49:51:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: 'getWeek',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v84],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86], secs: v88, time: v87, didSend: v27, from: v85 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v27, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v36, from: v92 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.acceptFee(v93), {
    at: './index.rsh:67:23:application',
    fs: ['at ./index.rsh:66:13:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
    msg: 'acceptFee',
    who: 'Alice'
    });
  
  const v102 = stdlib.protect(ctc0, await interact.providePasscode(v86), {
    at: './index.rsh:77:61:application',
    fs: ['at ./index.rsh:76:14:application call to [unknown function] (defined at: ./index.rsh:76:18:function exp)'],
    msg: 'providePasscode',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v85, v92, v93, v102],
    evt_cnt: 1,
    funcNum: 2,
    lct: v94,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v104], secs: v106, time: v105, didSend: v52, from: v103 } = txn3;
      
      ;
      const v107 = stdlib.addressEq(v85, v103);
      ;
      const v108 = stdlib.eq(v104, stdlib.checkedBigNumberify('./index.rsh:8:27:decimal', stdlib.UInt_max, '30'));
      const v109 = v108 ? stdlib.checkedBigNumberify('./index.rsh:85:51:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:85:55:decimal', stdlib.UInt_max, '0');
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v104], secs: v106, time: v105, didSend: v52, from: v103 } = txn3;
  ;
  const v107 = stdlib.addressEq(v85, v103);
  stdlib.assert(v107, {
    at: './index.rsh:80:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v108 = stdlib.eq(v104, stdlib.checkedBigNumberify('./index.rsh:8:27:decimal', stdlib.UInt_max, '30'));
  const v109 = v108 ? stdlib.checkedBigNumberify('./index.rsh:85:51:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:85:55:decimal', stdlib.UInt_max, '0');
  const txn4 = await (ctc.sendrecv({
    args: [v85, v92, v93],
    evt_cnt: 0,
    funcNum: 3,
    lct: v105,
    onlyIf: true,
    out_tys: [],
    pay: [v93, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v112, time: v111, didSend: v61, from: v110 } = txn4;
      
      sim_r.txns.push({
        amt: v93,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v115 = stdlib.addressEq(v85, v110);
      ;
      sim_r.txns.push({
        amt: v93,
        kind: 'from',
        to: v92,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v112, time: v111, didSend: v61, from: v110 } = txn4;
  ;
  const v115 = stdlib.addressEq(v85, v110);
  stdlib.assert(v115, {
    at: './index.rsh:90:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v109), {
    at: './index.rsh:98:24:application',
    fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:29:function exp)'],
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v27, from: v85 } = txn1;
  ;
  const v91 = stdlib.protect(ctc0, await interact.setFee(), {
    at: './index.rsh:58:53:application',
    fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
    msg: 'setFee',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v85, v91],
    evt_cnt: 1,
    funcNum: 1,
    lct: v87,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v93], secs: v95, time: v94, didSend: v36, from: v92 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v36, from: v92 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.requestPasscode(v86), {
    at: './index.rsh:72:29:application',
    fs: ['at ./index.rsh:71:15:application call to [unknown function] (defined at: ./index.rsh:71:19:function exp)'],
    msg: 'requestPasscode',
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
  const {data: [v104], secs: v106, time: v105, didSend: v52, from: v103 } = txn3;
  ;
  const v107 = stdlib.addressEq(v85, v103);
  stdlib.assert(v107, {
    at: './index.rsh:80:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v108 = stdlib.eq(v104, stdlib.checkedBigNumberify('./index.rsh:8:27:decimal', stdlib.UInt_max, '30'));
  const v109 = v108 ? stdlib.checkedBigNumberify('./index.rsh:85:51:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:85:55:decimal', stdlib.UInt_max, '0');
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v112, time: v111, didSend: v61, from: v110 } = txn4;
  ;
  const v115 = stdlib.addressEq(v85, v110);
  stdlib.assert(v115, {
    at: './index.rsh:90:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v109), {
    at: './index.rsh:98:24:application',
    fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:29:function exp)'],
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
  appApproval: `BiAFAAEDAkAmAgEAACI1ADEYQQGsKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEAAp0kkDEAASCQSRCQ0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gASnZcS0sDT/iAFYNANXACAxABJEsSKyATT/sggjshA0A1cgILIHs0IA4EglNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4hBFs1/Uk1BRc1/IAEl073FzT8FlCwNP8xABJENP80/lA0/RZQKEsBVwBIZ0gkNQEyBjUCQgCjSSMMQABESCM0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gATVFRkUNP4WULA0/zEAUDT+FlAoSwFXAEhnSCU1ATIGNQJCAFlIIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwgaCNBogAbTEAKEsBVwAgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
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
                "internalType": "uint256",
                "name": "v86",
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
                "internalType": "uint256",
                "name": "v86",
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
                "name": "v93",
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
                "name": "v104",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v93",
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
                "name": "v104",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c2d38038062000c2d8339810160408190526200002691620001a3565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000d3565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000ca929190620000fd565b50505062000282565b81620000f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010b9062000245565b90600052602060002090601f0160209004810192826200012f57600085556200017a565b82601f106200014a57805160ff19168380011785556200017a565b828001600101855582156200017a579182015b828111156200017a5782518255916020019190600101906200015d565b50620001889291506200018c565b5090565b5b808211156200018857600081556001016200018d565b6000818303604080821215620001b857600080fd5b80518082016001600160401b038082118383101715620001e857634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200020257600080fd5b8351945060208501915084821081831117156200022f57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61099b80620002926000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806345f703961461008357806373b4522c1461009657806383230757146100a9578063873779a1146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610762565b6100f4565b61005d6100a4366004610762565b6102ae565b3480156100b557600080fd5b50600154610070565b61005d6100cc366004610762565b61043b565b3480156100dd57600080fd5b506100e66105b2565b60405161007a929190610785565b610104600260005414600d61064f565b61011e8135158061011757506001548235145b600e61064f565b600080805560028054610130906107e2565b80601f016020809104026020016040519081016040528092919081815260200182805461015c906107e2565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610833565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516101f49291906108a9565b60405180910390a16102083415600b61064f565b8051610220906001600160a01b03163314600c61064f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526003909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906102a8929190610674565b50505050565b6102be600360005414601161064f565b6102d8813515806102d157506001548235145b601261064f565b6000808055600280546102ea906107e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610316906107e2565b80156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b505050505080602001905181019061037b9190610833565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516103ae9291906108d0565b60405180910390a16103c781604001513414600f61064f565b80516103df906001600160a01b03163314601061064f565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610420573d6000803e3d6000fd5b5060008080556001819055610437906002906106f8565b5050565b61044b600160005414600961064f565b6104658135158061045e57506001548235145b600a61064f565b600080805560028054610477906107e2565b80601f01602080910402602001604051908101604052809291908181526020018280546104a3906107e2565b80156104f05780601f106104c5576101008083540402835291602001916104f0565b820191906000526020600020905b8154815290600101906020018083116104d357829003601f168201915b5050505050806020019051810190610508919061090d565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225338360405161053b9291906108a9565b60405180910390a161054f3415600861064f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088523384528a8501358352600290955543600155875193840194909452905190921694810194909452519083015290608001610284565b6000606060005460028080546105c7906107e2565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906107e2565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b50505050509050915091509091565b816104375760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610680906107e2565b90600052602060002090601f0160209004810192826106a257600085556106e8565b82601f106106bb57805160ff19168380011785556106e8565b828001600101855582156106e8579182015b828111156106e85782518255916020019190600101906106cd565b506106f4929150610735565b5090565b508054610704906107e2565b6000825580601f10610714575050565b601f0160209004906000526020600020908101906107329190610735565b50565b5b808211156106f45760008155600101610736565b60006040828403121561075c57600080fd5b50919050565b60006040828403121561077457600080fd5b61077e838361074a565b9392505050565b82815260006020604081840152835180604085015260005b818110156107b95785810183015185820160600152820161079d565b818111156107cb576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806107f657607f821691505b6020821081141561075c57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461082e57600080fd5b919050565b60006060828403121561084557600080fd5b6040516060810181811067ffffffffffffffff8211171561087657634e487b7160e01b600052604160045260246000fd5b60405261088283610817565b815261089060208401610817565b6020820152604083015160408201528091505092915050565b6001600160a01b03831681526060810161077e602083018480358252602090810135910152565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146108fe57600080fd5b80604085015250509392505050565b60006020828403121561091f57600080fd5b6040516020810181811067ffffffffffffffff8211171561095057634e487b7160e01b600052604160045260246000fd5b60405261095c83610817565b8152939250505056fea2646970667358221220b65808371d4f4bdf06a813bc6b4a370528dbf753714940da026b6f8d38c9ec7a64736f6c634300080c0033`,
  BytecodeLen: 3117,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:94:11:after expr stmt semicolon',
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
