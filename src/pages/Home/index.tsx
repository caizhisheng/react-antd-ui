import * as React from 'react';
import HButton from '../../components/h-button/src';
import HButtonGroup from '../../components/h-button/src/button-group';
// import HButton from 'h-button';

// 工作台demo https://preview.pro.ant.design/#/dashboard/workplace
class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
        return true;
    }
    onClick = () => {
        // 回调事件
    }
    render() {
        return (
            <div className="homepage">
                <HButtonGroup>
                    <HButton size="large" text="保存1" icon="warning" />
                    <HButton type="dashed" size="large" text="保存2" icon="search" />
                </HButtonGroup>
            </div>
        )
    }
    componentDidMount() {

    }
}

export default Home;

