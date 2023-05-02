import { createStore, action } from "easy-peasy";
import { persist } from "easy-peasy";




const store = createStore(
  persist(
    {
      user: {},
      setUser: action((state, payload) => {
        state.user = payload;
      }),
      logOut: action((state) => {
        state.user = {};
      }),
    },
    {
      storage: "localStorage",
    }
  )
);

export default store;
