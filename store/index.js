import Vuex from "vuex";

const cookieparser = process.server ? require("cookieparser") : undefined;

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      auth: null
    }),
    mutations: {
      setAuth(state, auth) {
        state.auth = auth;
      }
    },
    actions: {
      nuxtServerInit({ commit }) {
        /*let auth = null;
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie);
          try {
            auth = JSON.parse(parsed.auth);
          } catch (err) {
            //no valid cookie found
          }
        }
        commit("setAuth", auth);*/
      }
    }
  });
};

export default createStore;
