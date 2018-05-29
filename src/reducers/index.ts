/**
 * @component reducers
 * @description Home RootReducer
 * @time 2018/1/9
 * @author ***
 */

import { combineReducers } from 'redux'; // 连接reducers
import { createUserReducer } from './home';

const rootReducer = combineReducers({
    createUserReducer
})

export default rootReducer;


