import React from 'react';

export class Qizi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: true,
            qizis:[]
        }
        this.ctx = {};
    }

    componentDidMount(){
        this.ctx= document.getElementById('qizi').getContext('2d');
    }

//获取棋子位置
    clickHandle = (e) => {
        let obj = e.target , x , y , row,col,nowqizis,canDown = true;
        nowqizis = this.state.qizis;
        x = e.clientX - obj.offsetLeft;
        y = e.clientY - obj.offsetTop;
        row = Math.round((x - 15)/30);
        col = Math.round((y - 15)/30);
        this.state.qizis.forEach( val => {
            if(val.row === row && val.col === col){
                canDown = false;
            }
        })
        if(canDown){
            nowqizis.push({
                row: row,
                col: col,
                color:this.state.color,
            });
            this.setState({
                color: !this.state.color,
                qizis: nowqizis
            },() => this.drawQizi());
            canDown = true;
        }
    }

//描绘棋子
    drawQizi = () => {
        let that = this;
        this.ctx.clearRect(0,0,570,570);
        this.state.qizis.forEach((val) => {
            that.ctx.beginPath();
            that.ctx.arc(val.row*30+15,val.col*30+15,10,0,2*Math.PI);
            that.ctx.fillStyle = val.color? 'white': 'black';
            that.ctx.fill();
            that.ctx.closePath();
        })
    }

//悔棋
    back = () => {
        let nowqizis = this.state.qizis;
        if(nowqizis.length){
            nowqizis.pop();
            this.setState({
                qizis: nowqizis,
                color: !this.state.color
            },() => {
                this.drawQizi();
            })
        }
    }

    render(){
        return(
            <div className={'qipanContent'}>
                <canvas id={'qizi'} width={570} height={570} onClick={this.clickHandle} className={'qizi'}>
                    您的浏览器不支持该棋盘，请更换高版本浏览器。
                </canvas>
                <div className={'huiqi'}>
                    <span>{this.state.color? '白棋回合': '黑棋回合'}</span>
                    <button onClick={this.back}>悔棋</button>
                </div>
            </div>
        )
    }
} 