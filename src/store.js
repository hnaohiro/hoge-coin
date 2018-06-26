import Vue from "vue";
import Vuex from "vuex";
import HogeCoin from "../build/contracts/HogeCoin.json";

Vue.use(Vuex);

const contract_address = '0x1ca287e45bda35932c048365a7ed6b6aed8ac9ac';

export default new Vuex.Store({
  state: {
    accounts: [],
    loading: false
  },
  mutations: {
    setAccounts(state, accounts) {
      state.accounts = accounts;
    }
  },
  getters: {
    getAccounts(state) {
      return state.accounts;
    }
  },
  actions: {
    async fetchAccounts({commit}) {
      const rawAccounts = await window.web3.eth.getAccounts();
      const accounts = await Promise.all(
        rawAccounts.map(async account => {
          const balance = await web3.eth.getBalance(account);
          const contract = new window.web3.eth.Contract(HogeCoin.abi, contract_address);
          const hoge = await contract.methods.balanceOf(account).call({ from: account });
          return { address: account, balance, hoge };
        })
      );
      commit("setAccounts", accounts);
    }
  }
});
