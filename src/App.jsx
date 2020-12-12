import React from "react";
import {HashRouter as Router, Route,} from 'react-router-dom';
import Samples from './Samples';
import Camera from './Camera'

//主组件
class App extends React.Component {
    render() {
        //路由配置
        return <Router>
            <div>
                {/* 首页 */}
                <Route exact path="/" component={Samples}/>
                <Route exact path="/camera" component={Camera}/>
            </div>
        </Router>
    }
}

//导出主组件
export default App;
