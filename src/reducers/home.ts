/**
 * @component reducers
 * @description Home Reducer 高阶函数
 * @time 2018/1/9
 * @author ***
 */

import * as Constants from '../constants/actionsTypes';
import IGetUserInfo from '../actions/home';

const initialState = {
    address: '',
    age: 0,
    name: '',
    sex: ''
}

// 初始化
const createUserReducer = (state = initialState, action: IGetUserInfo) => {
    switch (action.type) {
        case Constants.GET_USER_INFO:
            return action.data;
        default:
            return state;
    }
}

export { createUserReducer };