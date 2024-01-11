import { JsonRpcProvider, Wallet } from 'ethers';
import { RPC_CONFIG } from '../src/configs/bundler-common';

const data = `0x000000000000000000000000000000000000000000000000000000000000000060a060405234801561001057600080fd5b50604051613bb1380380613bb183398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b61310a80610aa783390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b6080516109c76100e060003960008181604b01528181610114015261025801526109c76000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100965780638cb84e18146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461039d565b6100bc565b61006d6100b736600461039d565b6101ee565b6000806100c984846101ee565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101e8565b60405173ffffffffffffffffffffffffffffffffffffffff8616602482015284907f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052516101b790610390565b6101c2929190610406565b8190604051809103906000f59050801580156101e2573d6000803e3d6000fd5b50925050505b92915050565b60006103578260001b6040518060200161020790610390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905273ffffffffffffffffffffffffffffffffffffffff871660248201527f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052905161030093929101610406565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261033c9291602001610474565b6040516020818303038152906040528051906020012061035e565b9392505050565b60006103578383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6104ee806104a483390190565b600080604083850312156103b057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146103d457600080fd5b946020939093013593505050565b60005b838110156103fd5781810151838201526020016103e5565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104418160608501602087016103e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104868184602088016103e2565b83519083019061049a8183602088016103e2565b0194935050505056fe60806040526040516104ee3803806104ee833981016040819052610022916102de565b61002e82826000610035565b50506103fb565b61003e83610061565b60008251118061004b5750805b1561005c5761005a83836100a1565b505b505050565b61006a816100cd565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100c683836040518060600160405280602781526020016104c760279139610180565b9392505050565b6001600160a01b0381163b61013f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080856001600160a01b03168560405161019d91906103ac565b600060405180830381855af49150503d80600081146101d8576040519150601f19603f3d011682016040523d82523d6000602084013e6101dd565b606091505b5090925090506101ef868383876101f9565b9695505050505050565b60608315610268578251600003610261576001600160a01b0385163b6102615760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610136565b5081610272565b610272838361027a565b949350505050565b81511561028a5781518083602001fd5b8060405162461bcd60e51b815260040161013691906103c8565b634e487b7160e01b600052604160045260246000fd5b60005b838110156102d55781810151838201526020016102bd565b50506000910152565b600080604083850312156102f157600080fd5b82516001600160a01b038116811461030857600080fd5b60208401519092506001600160401b038082111561032557600080fd5b818501915085601f83011261033957600080fd5b81518181111561034b5761034b6102a4565b604051601f8201601f19908116603f01168101908382118183101715610373576103736102a4565b8160405282815288602084870101111561038c57600080fd5b61039d8360208301602088016102ba565b80955050505050509250929050565b600082516103be8184602087016102ba565b9190910192915050565b60208152600082518060208401526103e78160408501602087016102ba565b601f01601f19169190910160400192915050565b60be806104096000396000f3fe608060405236601057600e6013565b005b600e5b601f601b6021565b6065565b565b600060607f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156083573d6000f35b3d6000fdfea264697066735822122041fcb114bf3daedafd11a9fc20e2f99afb6f7d91d9249b07752a2e5655ccc52064736f6c63430008150033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d53ae986d4a3b9fa0c6a36458ca865e0a23a1b449359a520df314b9610cd719d64736f6c6343000815003360e0604052306080523480156200001557600080fd5b506040516200310a3803806200310a83398101604081905262000038916200011c565b7f33e4b41198cc5b8053630ed667ea7c0c4c873f7fc8d9a478b5d7259cec0a4a0060a0526001600160a01b03811660c052620000736200007a565b506200014e565b60006200008660a05190565b805490915068010000000000000000900460ff1615620000b95760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001195780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6000602082840312156200012f57600080fd5b81516001600160a01b03811681146200014757600080fd5b9392505050565b60805160a05160c051612f3f620001cb6000396000818161040001528181610a8c01528181610b3a0152818161101c01528181611259015281816114c60152818161182b0152611adb0152600061108f0152600081816107f0015281816108a501528181610bf601528181610ca60152610db90152612f3f6000f3fe60806040526004361061018e5760003560e01c806352d1902d116100d6578063c399ec881161007f578063f23a6e6111610059578063f23a6e61146104d6578063f2fde38b1461051c578063f698da251461053c57600080fd5b8063c399ec881461048c578063c4d66de8146104a1578063d087d288146104c157600080fd5b8063b0d691fe116100b0578063b0d691fe146103f1578063b61d27f614610424578063bc197c811461044457600080fd5b806352d1902d146103755780638da5cb5b1461038a578063a786cac9146103c457600080fd5b80633659cfe6116101385780634a58db19116101125780634a58db191461033a5780634d44560d146103425780634f1ef2861461036257600080fd5b80633659cfe6146102da5780633a871cdd146102fa57806347e1da2a1461031a57600080fd5b8063150b7a0211610169578063150b7a02146102245780631626ba7e1461029a57806318dfb3c7146102ba57600080fd5b806223de291461019a57806301ffc9a7146101c15780630a1028c4146101f657600080fd5b3661019557005b600080fd5b3480156101a657600080fd5b506101bf6101b53660046125c7565b5050505050505050565b005b3480156101cd57600080fd5b506101e16101dc366004612678565b610551565b60405190151581526020015b60405180910390f35b34801561020257600080fd5b50610216610211366004612794565b610636565b6040519081526020016101ed565b34801561023057600080fd5b5061026961023f3660046127c9565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101ed565b3480156102a657600080fd5b506102696102b536600461283c565b61064f565b3480156102c657600080fd5b506101bf6102d53660046128c8565b6106f2565b3480156102e657600080fd5b506101bf6102f5366004612934565b6107d9565b34801561030657600080fd5b50610216610315366004612951565b6109ad565b34801561032657600080fd5b506101bf6103353660046129a5565b6109d3565b6101bf610a8a565b34801561034e57600080fd5b506101bf61035d366004612a3f565b610b30565b6101bf610370366004612a6b565b610bdf565b34801561038157600080fd5b50610216610d9f565b34801561039657600080fd5b5061039f610e8b565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ed565b3480156103d057600080fd5b506103e46103df366004612794565b610ecb565b6040516101ed9190612b13565b3480156103fd57600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061039f565b34801561043057600080fd5b506101bf61043f366004612b26565b610f87565b34801561045057600080fd5b5061026961045f366004612b76565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561049857600080fd5b50610216610fd6565b3480156104ad57600080fd5b506101bf6104bc366004612934565b61108d565b3480156104cd57600080fd5b5061021661120c565b3480156104e257600080fd5b506102696104f1366004612c14565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b34801561052857600080fd5b506101bf610537366004612934565b611288565b34801561054857600080fd5b50610216611320565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806105e457507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061063057507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b600061064182610ecb565b805190602001209050919050565b60008061067c8460405160200161066891815260200190565b604051602081830303815290604052610ecb565b80516020820120909150610698610691610e8b565b8286611433565b156106c857507f1626ba7e0000000000000000000000000000000000000000000000000000000091506106309050565b507fffffffff00000000000000000000000000000000000000000000000000000000949350505050565b6106fa6114ae565b828114610733576040517fa24a13a600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260005b818110156107d1576107c986868381811061075457610754612c7e565b90506020020160208101906107699190612934565b600086868581811061077d5761077d612c7e565b905060200281019061078f9190612cad565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061156292505050565b600101610737565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108e26115df565b73ffffffffffffffffffffffffffffffffffffffff1614610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161089a565b61098e81611607565b604080516000808252602082019092526109aa9183919061160f565b50565b60006109b7611813565b6109c184846118b2565b90506109cc826119a3565b9392505050565b6109db6114ae565b84811415806109ea5750848314155b15610a21576040517fa24a13a600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460005b818110156101b557610a82888883818110610a4257610a42612c7e565b9050602002016020810190610a579190612934565b878784818110610a6957610a69612c7e565b9050602002013586868581811061077d5761077d612c7e565b600101610a25565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b158015610b1557600080fd5b505af1158015610b29573d6000803e3d6000fd5b5050505050565b610b38611a0e565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610bcb57600080fd5b505af11580156107d1573d6000803e3d6000fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610ca4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161089a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610ce36115df565b73ffffffffffffffffffffffffffffffffffffffff1614610d86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161089a565b610d8f82611607565b610d9b8282600161160f565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161089a565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60007f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be5122005b5473ffffffffffffffffffffffffffffffffffffffff16919050565b606060007f5e3baca2936049843f06038876a12f03627b5edc98025751ecf2ac756264019960001b8380519060200120604051602001610f15929190918252602082015260400190565b604051602081830303815290604052805190602001209050610f35611320565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101829052606201604051602081830303815290604052915050919050565b610f8f6114ae565b610fd0848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061156292505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015611064573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110889190612d12565b905090565b7f0000000000000000000000000000000000000000000000000000000000000000805468010000000000000000810460ff16159067ffffffffffffffff166000811580156110d85750825b905060008267ffffffffffffffff1660011480156110f55750303b155b905081158015611103575080155b1561113a576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166001178555831561119b5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b6111a486611a21565b83156107d15784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401611047565b611290611a0e565b73ffffffffffffffffffffffffffffffffffffffff811615806112c8575073ffffffffffffffffffffffffffffffffffffffff811630145b15611317576040517fb20f76e300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216600482015260240161089a565b6109aa81611b68565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60001b604051602001611387906020808252600c908201527f4c696768744163636f756e740000000000000000000000000000000000000000604082015260600190565b6040516020818303038152906040526040516020016113d79060208082526001908201527f3100000000000000000000000000000000000000000000000000000000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261141893929146903090602001612d2b565b60405160208183030381529060405280519060200120905090565b60008060006114428585611c6a565b9092509050600081600481111561145b5761145b612d85565b14801561149357508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b806114a457506114a4868686611caf565b9695505050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480159061152757506114f7610e8b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b15611560576040517f4a0bfec100000000000000000000000000000000000000000000000000000000815233600482015260240161089a565b565b6000808473ffffffffffffffffffffffffffffffffffffffff16848460405161158b9190612db4565b60006040518083038185875af1925050503d80600081146115c8576040519150601f19603f3d011682016040523d82523d6000602084013e6115cd565b606091505b509150915081610b2957805160208201fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610eaf565b6109aa611a0e565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156116475761164283611e0c565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156116cc575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526116c991810190612d12565b60015b611758576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f742055555053000000000000000000000000000000000000606482015260840161089a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611807576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c65555549440000000000000000000000000000000000000000000000606482015260840161089a565b50611642838383611f16565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611560576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161089a565b6000806118bd610e8b565b905060006118ca84611f3b565b905060006118dc610140870187612cad565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939450839250611920915085905084611c6a565b9092509050600081600481111561193957611939612d85565b14801561197157508473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b806119825750611982858885611caf565b1561199557600095505050505050610630565b506001979650505050505050565b80156109aa5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610b29576040519150601f19603f3d011682016040523d82523d6000602084013e610b29565b33301480159061152757506114f7610e8b565b73ffffffffffffffffffffffffffffffffffffffff8116611a71576040517fb20f76e30000000000000000000000000000000000000000000000000000000081526000600482015260240161089a565b807f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be51220080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff928316179055604051828216917f000000000000000000000000000000000000000000000000000000000000000016907fec6a23b49d2c363d250c9dda15610e835d428207d15ddb36a6c230e37371ddf190600090a360405173ffffffffffffffffffffffffffffffffffffffff8216906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350565b7f691ec1a18226d004c07c9f8e5c4a6ff15a7b38db267cf7e3c945aef8be512200805473ffffffffffffffffffffffffffffffffffffffff908116908316819003611bf7576040517fb20f76e300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161089a565b81547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8481169182178455604051908316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000808251604103611ca05760208301516040840151606085015160001a611c948782858561205d565b94509450505050611ca8565b506000905060025b9250929050565b60008060008573ffffffffffffffffffffffffffffffffffffffff16631626ba7e60e01b8686604051602401611ce6929190612dd0565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092529051611d6f9190612db4565b600060405180830381855afa9150503d8060008114611daa576040519150601f19603f3d011682016040523d82523d6000602084013e611daf565b606091505b5091509150818015611dc357506020815110155b80156114a4575080517f1626ba7e0000000000000000000000000000000000000000000000000000000090611e019083016020908101908401612d12565b149695505050505050565b73ffffffffffffffffffffffffffffffffffffffff81163b611eb0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161089a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b611f1f8361214c565b600082511180611f2c5750805b1561164257610fd08383612199565b6000600280611f4b8460206121be565b604051602001611f5b9190612de9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052611f9391612db4565b602060405180830381855afa158015611fb0573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190611fd39190612d12565b604051602001611fe591815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261201d91612db4565b602060405180830381855afa15801561203a573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906106309190612d12565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156120945750600090506003612143565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156120e8573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661213c57600060019250925050612143565b9150600090505b94509492505050565b61215581611e0c565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606109cc8383604051806060016040528060278152602001612ee360279139612401565b606060006121cd836002612e83565b6121d8906002612e9a565b67ffffffffffffffff8111156121f0576121f06126ba565b6040519080825280601f01601f19166020018201604052801561221a576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061225157612251612c7e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106122b4576122b4612c7e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006122f0846002612e83565b6122fb906001612e9a565b90505b6001811115612398577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061233c5761233c612c7e565b1a60f81b82828151811061235257612352612c7e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361239181612ead565b90506122fe565b5083156109cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161089a565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161242b9190612db4565b600060405180830381855af49150503d8060008114612466576040519150601f19603f3d011682016040523d82523d6000602084013e61246b565b606091505b50915091506114a4868383876060831561250d5782516000036125065773ffffffffffffffffffffffffffffffffffffffff85163b612506576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161089a565b5081612517565b612517838361251f565b949350505050565b81511561252f5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089a9190612b13565b73ffffffffffffffffffffffffffffffffffffffff811681146109aa57600080fd5b60008083601f84011261259757600080fd5b50813567ffffffffffffffff8111156125af57600080fd5b602083019150836020828501011115611ca857600080fd5b60008060008060008060008060c0898b0312156125e357600080fd5b88356125ee81612563565b975060208901356125fe81612563565b9650604089013561260e81612563565b955060608901359450608089013567ffffffffffffffff8082111561263257600080fd5b61263e8c838d01612585565b909650945060a08b013591508082111561265757600080fd5b506126648b828c01612585565b999c989b5096995094979396929594505050565b60006020828403121561268a57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146109cc57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126126fa57600080fd5b813567ffffffffffffffff80821115612715576127156126ba565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561275b5761275b6126ba565b8160405283815286602085880101111561277457600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156127a657600080fd5b813567ffffffffffffffff8111156127bd57600080fd5b612517848285016126e9565b6000806000806000608086880312156127e157600080fd5b85356127ec81612563565b945060208601356127fc81612563565b935060408601359250606086013567ffffffffffffffff81111561281f57600080fd5b61282b88828901612585565b969995985093965092949392505050565b6000806040838503121561284f57600080fd5b82359150602083013567ffffffffffffffff81111561286d57600080fd5b612879858286016126e9565b9150509250929050565b60008083601f84011261289557600080fd5b50813567ffffffffffffffff8111156128ad57600080fd5b6020830191508360208260051b8501011115611ca857600080fd5b600080600080604085870312156128de57600080fd5b843567ffffffffffffffff808211156128f657600080fd5b61290288838901612883565b9096509450602087013591508082111561291b57600080fd5b5061292887828801612883565b95989497509550505050565b60006020828403121561294657600080fd5b81356109cc81612563565b60008060006060848603121561296657600080fd5b833567ffffffffffffffff81111561297d57600080fd5b8401610160818703121561299057600080fd5b95602085013595506040909401359392505050565b600080600080600080606087890312156129be57600080fd5b863567ffffffffffffffff808211156129d657600080fd5b6129e28a838b01612883565b909850965060208901359150808211156129fb57600080fd5b612a078a838b01612883565b90965094506040890135915080821115612a2057600080fd5b50612a2d89828a01612883565b979a9699509497509295939492505050565b60008060408385031215612a5257600080fd5b8235612a5d81612563565b946020939093013593505050565b60008060408385031215612a7e57600080fd5b8235612a8981612563565b9150602083013567ffffffffffffffff81111561286d57600080fd5b60005b83811015612ac0578181015183820152602001612aa8565b50506000910152565b60008151808452612ae1816020860160208601612aa5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006109cc6020830184612ac9565b60008060008060608587031215612b3c57600080fd5b8435612b4781612563565b935060208501359250604085013567ffffffffffffffff811115612b6a57600080fd5b61292887828801612585565b60008060008060008060008060a0898b031215612b9257600080fd5b8835612b9d81612563565b97506020890135612bad81612563565b9650604089013567ffffffffffffffff80821115612bca57600080fd5b612bd68c838d01612883565b909850965060608b0135915080821115612bef57600080fd5b612bfb8c838d01612883565b909650945060808b013591508082111561265757600080fd5b60008060008060008060a08789031215612c2d57600080fd5b8635612c3881612563565b95506020870135612c4881612563565b94506040870135935060608701359250608087013567ffffffffffffffff811115612c7257600080fd5b612a2d89828a01612585565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612ce257600080fd5b83018035915067ffffffffffffffff821115612cfd57600080fd5b602001915036819003821315611ca857600080fd5b600060208284031215612d2457600080fd5b5051919050565b85815260a060208201526000612d4460a0830187612ac9565b8281036040840152612d568187612ac9565b91505083606083015273ffffffffffffffffffffffffffffffffffffffff831660808301529695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008251612dc6818460208701612aa5565b9190910192915050565b8281526040602082015260006125176040830184612ac9565b7f18426974636f696e205369676e6564204d6573736167653a0a0000000000000081527f4200000000000000000000000000000000000000000000000000000000000000601982015260008251612e4781601a850160208701612aa5565b91909101601a0192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141761063057610630612e54565b8082018082111561063057610630612e54565b600081612ebc57612ebc612e54565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122029fd17bff062604352a9e0e200a930d6ae7986e344690de064ce6a8c79d8db7264736f6c634300081500330000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789`;

const factoryAddress = '0x8d19cf619Dfe7ea25a130a0b4201452a6ddE134F';
export const deployBTCAccountFactory = async (chainId: number, signer: Wallet) => {
    const rpcUrl = RPC_CONFIG[chainId].rpcUrl;
    const provider = new JsonRpcProvider(rpcUrl);
    signer = signer.connect(provider);

    const feeData = await provider.getFeeData();

    const code = await provider.getCode(factoryAddress);
    if (code.length > 2) {
        console.log('BTC account factory already deployed');
        return;
    }

    let gasPrice: any = feeData.gasPrice;
    let maxFeePerGas: any = null;
    let maxPriorityFeePerGas: any = null;

    const r = await signer.sendTransaction({
        type: 0,
        to: '0x4e59b44847b379578588920ca78fbf26c0b4956c',
        data,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
    });

    console.log(r);
};
