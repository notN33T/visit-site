import {BrowserRouter as Router}  from 'react-router-dom'
import UseRouter       from './router/router'

function App() {

  return (
    <Router>
        <UseRouter/>
    </Router>
  );
}

export default App;



// import {useSelector, useDispatch} from 'react-redux';

// const dispatch = useDispatch();
// const mode = useSelector((state: any) => state.lightMode);
// const lightModeSwitch = () => {
//   dispatch({type: 'LIGHT_MOD_SWITCHER'});
// };