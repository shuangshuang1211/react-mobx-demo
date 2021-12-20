import { useCallback } from "react";
import "../styles/appleItem.scss";

const AppleItem = ({apple}) => {
  const handleClickEated = useCallback(() => {
    apple.updateIsEated()
  }, []);
  return (
    <div className="appleItem">
      <div className="apple" >
        <img alt="苹果" src={require('../assets/apple.png')} />
      </div>
      <div className="info">
        <h4 className="name">{apple.title}</h4>
        <h4 className="weight">{apple.weight} 克</h4>
      </div>
      <div className="btn-div">
        <button onClick={handleClickEated}>
          吃掉
        </button>
      </div>
    </div>
  );
}

export default AppleItem;