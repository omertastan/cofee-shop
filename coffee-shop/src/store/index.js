import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true, user: action.payload };
        case 'LOGIN_FAIL':
            return { ...state, isAuthenticated: false, user: null, error: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null };
        case 'REGISTER_SUCCESS':
            return { ...state, isAuthenticated: false, user: null, success: action.payload };
        case 'REGISTER_FAIL':
            return { ...state, isAuthenticated: false, user: null, error: action.payload };
        default:
            return state;
    }
};

const menuReducer = (state = { menuItems: [] }, action) => {
    switch (action.type) {
        case 'GET_MENU_ITEMS':
            return { ...state, menuItems: action.payload };
        default:
            return state;
    }
};

const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case 'GET_ORDERS':
            return { ...state, orders: action.payload };
        case 'ADD_ORDER':
            return { ...state, orders: [...state.orders, action.payload] };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    order: orderReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
