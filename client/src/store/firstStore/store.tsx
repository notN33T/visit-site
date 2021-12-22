import {createStore}    from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState: any = {
    lightMode: 'day-mode',
}

// let action = {type: '', payload: ''};
 
const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "LIGHT_MOD_SWITCHER":
            if (state.lightMode === 'day-mode') {
                return {...state, lightMode: 'night-mode'};
            } else {
                return {...state, lightMode: 'day-mode'};
            }

        default:
            return state;
    }

};

const store = createStore(reducer, composeWithDevTools());

export default store;


// const mode = useSelector((state: any) => state.cash.lightMode);

// const rootReducer = combineReducers( {
//     cash: cashReducer,
//     customers: customerReducer,
// })

// const store = createStore(rootReducer);

// export default store;