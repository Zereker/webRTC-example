import React from 'react'
import {Button, message} from "antd";

const constrains = window.constraints = {
    //禁用音频
    audio: false,
    //启用视频
    video: true
}

class Camera extends React.Component {
    constructor(props) {
        super(props);
    }

    async openCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constrains);
            console.log('handle success')
            this.handleSuccess(stream)
        } catch (err) {
            this.handleError(err);
        }
    }


    handleSuccess = (stream) => {
        const video = this.refs['myVideo'];
        const videoTracks = stream.getVideoTracks();

        console.log('通过设置限制条件获取到流:', constraints);
        console.log(`使用的视频设备: ${videoTracks[0].label}`);

        // 使得浏览器能访问到stream
        window.stream = stream;
        video.srcObject = stream;
    }

    handleError(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
            const v = constraints.video;
            //宽高尺寸错误
            message.error(`宽:${v.width.exact} 高:${v.height.exact} 设备不支持`);
        } else if (error.name === 'PermissionDeniedError') {
            message.error('没有摄像头和麦克风使用权限,请点击允许按钮');
        }

        message.error(`getUserMedia错误: ${error.name}`, error);
    }

    render() {
        return (
            <div className="container">
                <h1>
                    <span>摄像头示例</span>
                </h1>
                <video className="video" ref="myVideo" autoPlay playsInline/>
                <Button onClick={this.openCamera.bind(this)}>打开摄像头</Button>
            </div>
        );
    }
}

export default Camera