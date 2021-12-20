import { RootStoreProvider } from "../store";
import Layout from "./Layout";

export default function App () {
  return (
    <RootStoreProvider>
      <Layout />
    </RootStoreProvider>
  )
}