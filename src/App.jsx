import React from "react";
import {HashRouter as Router, Route,} from 'react-router-dom';
import Samples from './Samples';
import Camera from './Camera'
import Microphone from './Microphone';
import Canvas from './Canvas'
import ScreenSharing from './ScreenSharing';
import VideoFilter from "./VideoFilter";


//主组件
class App extends React.Component {
    render() {
        //路由配置
        return <Router>
            <div>
                {/* 首页 */}
                <Route exact path="/" component={Samples}/>
                <Route exact path="/camera" component={Camera}/>
                <Route exact path="/microphone" component={Microphone}/>
                <Route exact path="/canvas" component={Canvas}/>
                <Route exact path="/screenSharing" component={ScreenSharing}/>
                <Route exact path="/videoFilter" component={VideoFilter}/>
            </div>
        </Router>
    }
}

//导出主组件
export default App;
