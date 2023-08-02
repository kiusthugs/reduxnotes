
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {ADD, MINUS} from './store/actions'

function App() {

  //globally grab/select the globalstate -> reducer -> state?

  //this displays the chanaged state
  const countData = useSelector((state) => state.countReducer.count)

  //dispatch connected with event handlers

  //this changes the state from the ui
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Count</h1>
      <h2>{countData}</h2>
       {/* ADD function from action.js */}
      <button onClick={() => dispatch(ADD())}>Add 10</button>
      <button onClick={() => dispatch(MINUS())}>Minus 10</button>
    </div>
  );
}
//redux process is ui calls action, action returns action name to the reducer, reducer takes the state that is in a store and updates the state with new values
export default App;
