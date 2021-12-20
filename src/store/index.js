import { createContext, useContext } from "react";
import AppleListStore from "./AppleListStore";

class RootStore {
  constructor () {
    this.appleSummary = new AppleListStore();
  }
}

const rootStore = new RootStore();

const RootStoreContext = createContext();

export const RootStoreProvider = ({children}) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
);

export const useRootStore = () => useContext(RootStoreContext);