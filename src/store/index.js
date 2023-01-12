import Vuex from "vuex";

const store = () => {
  return new Vuex.Store({
    state: {
      currencyList: [],
    },
    actions: {
      getCurrencyList({ commit }) {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
          .then((response) => response.json())
          .then((data) => {
            commit("GET_CURRENCY_LIST", data.Valute);
          })

          .catch((error) => {
            throw Error(error);
          });
      },
    },
    mutations: {
      GET_CURRENCY_LIST(state, data) {
        state.currencyList = [];
        return (state.currencyList = Object.values(data));
      },
    },
  });
};

export default store;
