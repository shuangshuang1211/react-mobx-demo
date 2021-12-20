import { useRootStore } from "../store";
import "../styles/appleBasket.scss";
import { observer } from "mobx-react-lite"
import AppleItem from "./AppleItem";
import { useCallback } from "react";

const Layout = () => {
  const rootStore = useRootStore();
  const appleSummary = rootStore.appleSummary;
  const appleInfo = appleSummary.appleInfo;
  const unEatedApples = appleSummary.unEatedApples;
  const unEatedEmpty = !!unEatedApples && unEatedApples.length === 0;

  const handleClickPickApple = useCallback(async () => {
    await appleSummary.addOneApple()
  }, [appleSummary]);

  return (
    <div className="app">
      <div className="appleBusket">
        <h3 className="title">苹果篮子</h3>
        <div className="stats">
          <div className="section">
            <h4 className="head">当前</h4>
            <h2 className="content">
              {appleInfo && `${appleInfo.unEatedCount}个苹果，${appleInfo.unEatedWeight}克`}
            </h2>
          </div>
          <div className="section">
            <h4 className="head">已吃掉</h4>
            <h2 className="content">
              {appleInfo && `${appleInfo.eatedCount}个苹果，${appleInfo.eatedWeight}克`}
            </h2>
          </div>
        </div>
        <div className="appleList">
          {!unEatedEmpty && unEatedApples.map((apple) => (
            <AppleItem apple={apple} key={apple.id}/>
          ))}
          {unEatedEmpty && (
            <div className="empty-tip">
              <h5>苹果篮子空空如也</h5>
            </div>
          )}
        </div>
        <div className="btn-div">
          <button onClick={handleClickPickApple} disabled={appleSummary.isPicking}>
            {appleSummary.isPicking ? '正在采摘...' :  '摘苹果'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(Layout);