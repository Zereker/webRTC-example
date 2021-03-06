import React from "react";
import {List} from "antd";
import {Link} from 'react-router-dom';
//标题和路径
const data = [
    {title: '首页', path: '/'},
    {title: '摄像头示例', path: '/camera'},
    {title: '麦克风示例', path: '/microphone'},
    {title: '截取视频示例', path: '/canvas'},
    {title: '共享屏幕示例', path: '/screenSharing'},
    {title: '视频滤镜示例', path: '/videoFilter'},
];

//示例组件
class Samples extends React.Component {
    render() {
        return <div>
            {/* 示例列表 */}
            <List
                header={<div>WebRTC示例</div>}
                footer={<div>Footer</div>}
                bordered
                //数据源
                dataSource={data}
                //列表项
                renderItem={item => (
                    <List.Item>
                        {/* 连接 */}
                        <Link to={item['path']}>{item['title']}</Link>
                    </List.Item>
                )}
            />
        </div>
    }
}

//导出示例组件
export default Samples;
