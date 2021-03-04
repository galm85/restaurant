import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';

// reducers
import {categoriesReducer} from './reducers/categoriesReducer';
import {productsReducer} from './reducers/productsReducer';
import {usersReducer} from './reducers/usersReducer';
import {ordersReducer} from './reducers/ordersReducer';

const middleware = [thunk];

const initialState = {};

const rootReducer = combineReducers({
    categories:categoriesReducer,
    products:productsReducer,
    users:usersReducer,
    orders:ordersReducer
});


const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

));

export default store;