import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import HogeCoin from "../build/contracts/HogeCoin.json";

Vue.use(Vuex);

const contract_address = '0x1ca287e45bda35932c048365a7ed6b6aed8ac9ac';

const Transfer = {
  namespaced: true,
  state: {
    from: "0x",
    to: "0x",
    amount: 10
  },
  mutations: {
    setFrom(state, value) {
      state.from = value;
    },
    setTo(state, value) {
      state.to = value;
    },
    setAmount(state, value) {
      const amount = parseInt(value);
      if (amount > 0) {
        state.amount = amount;
      } else {
        state.amount = "";
      }
    },
    clear(state) {
      state.from = "0x";
      state.to = "0x";
      state.amount = 10;
    }
  },
  actions: {
    async transfer({ commit, state, rootState })  {
      const contract = new window.web3.eth.Contract(HogeCoin.abi, contract_address);
      contract.methods.transfer(state.to, state.amount).send({ from: state.from });
      alert("done!");
      commit("clear");
      router.push('/');
    },
    changeFrom({ commit, state }, value) {
      commit("setFrom", value);
    },
    changeTo({ commit, state }, value) {
      commit("setTo", value);
    },
    changeAmount({ commit, state }, value) {
      commit("setAmount", value);
    }
  },
  getters: {
    getFrom(state) {
      return state.from;
    },
    getTo(state) {
      return state.to;
    },
    getAmount(state) {
      return state.amount;
    }
  }
};

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
  },
  modules: {
    Transfer
  }
});
