/**
 * @component constants
 * @description Home 动作及函数
 * @time 2018/05/04
 * @author Mike.Cai
 */

import * as constants from '../constants/actionsTypes';

export default interface IGetUserInfo {
       data: {},
       type: constants.GET_USER_INFO
}

export const GetUserAction = (): IGetUserInfo => {
     return {
         data: {name: 'zhangsan',age: 30,sex: "男",address: "上海市浦东新区高行镇298号"},
         type: constants.GET_USER_INFO
     }
}

