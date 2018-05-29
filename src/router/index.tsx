import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Content } = Layout;

// import HeadNav from '../components/HeadNav';

class App extends React.Component<any, any> {
    public render() {
        return (
            <BrowserRouter>
                <Layout>
                    {/* <HeadNav /> */}
                    <Layout>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                               { this.props.children }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;