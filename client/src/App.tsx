import {BrowserRouter as Router}  from 'react-router-dom'
import UseRouter                  from './router/router'
import Header                     from './pages/common/Header/Header'
import Loading                    from './pages/common/Loading/Loading'
function App() {

  return (
    <Router>
        <div className='App'>
          <Header/>
          <UseRouter/>
        </div>
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