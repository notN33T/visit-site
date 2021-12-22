import  './CRA/App.css';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.lightMode);
  const lightModeSwitch = () => {
    dispatch({type: 'LIGHT_MOD_SWITCHER'});
  };

  return (
    <div className="App">
      <button onClick={lightModeSwitch}>SWITCH</button>
    </div>
  );
}

export default App;
