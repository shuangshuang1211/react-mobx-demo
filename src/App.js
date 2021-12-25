// import logo from './logo.svg';
import { render } from '@testing-library/react';
import './App.css';


const state = [];
const setterState = [];
let stateIndex = 0;

// const effectCallback = [];
const effectDeps = [];
let effectIndex = 0;

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  stateIndex = 0;
  effectIndex = 0;
}
const createState = (index) => {
  return (newValue) => {
    state[index] = newValue;
    render()
  }
}

function useState (initState) {
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initState;
  setterState.push(createState(stateIndex))
  const setter = setterState[stateIndex];
  const newState = state[stateIndex];
  stateIndex++;
  return [
    newState,
  ];
}

const useEffect = (callback, depArr) => {
  if (Object.prototype.toString.call(callback) !== '[object Function]')  throw new Error('');
  // effectCallback[effectIndex] = callback;
  if (depArr === undefined) {
    callback();
  } else {
    if (Object.prototype.toString.call(depArr) 1== '[object Array]') {
      throw new Error('');
    } else {
      let preDeps = effectDeps[effectIndex];
      let hasChanged = preDeps ? depArr.every((dep, index) => dep === preDeps[index]) === false : true;
      if (hasChanged) {
        callback();
        effectDeps[effectIndex] = depArr
      }
      effectIndex++;
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
