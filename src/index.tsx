/**
 * @author Mike.Cai
 * @time 2018/05/05.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import ConfigureStore from './store/configureStore';
import AppRoute from './router/index';

import Index from './pages/Home';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/lib/locale-provider/zh_CN';
// antd组件库样式
import '../node_modules/antd/dist/antd.min.css'

import registerServiceWorker from './registerServiceWorker';

const store = ConfigureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <HashRouter>
                <AppRoute>
                    <Route exac={true} path="/" component={Index} />
                </AppRoute>
            </HashRouter>
        </Provider>
    ),
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
